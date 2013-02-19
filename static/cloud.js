$(document).ready(function() {

  var w = 600,
      h = 600,
      words = [
        "Grace",
        "Faith",
        "Empower",
        "Joy",
        "Peace",
        "Temperance",
        "Passion",
        "Resilient",
        "Patience ",
        "Purpose",
        "Believe",
        "Dream",
        "Greatness"
      ],
      fill = d3.scale.category20();

    // get some duplicates going in the cloud
    words.push.apply(words, words.slice(0));
    words.push.apply(words, words.slice(0));
    words.push.apply(words, words.slice(0));

  d3.layout.cloud().size([w, h])
      .words(words.map(function(d) {
        var size= 10 + Math.random() * 90;
        console.log('Word '+d+ ' size '+ size);
        return {text: d, size: size};
      }))
      .rotate(function() { return ~~(Math.random() * 2) * 90; })
      .font("Impact")
      .fontSize(function(d) { return d.size; })
      .on("end", draw)
      .start();

  function draw(words) {
    d3.select("#cloud").append("svg")
        .attr("width", w)
        .attr("height", h)
      .append("g")
        .attr("transform", "translate("+ [ w >> 1, h >> 1]+ ")")
      .selectAll("text")
        .data(words)
      .enter().append("text")
        .style("font-size", function(d) { return d.size + "px"; })
        .style("font-family", "Impact")
        .style("fill", function(d, i) { return fill(i); })
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
           return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) {
           return d.text; });
  }
});
