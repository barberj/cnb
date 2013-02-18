import os
from flask import Flask, render_template
app = Flask(__name__)


@app.route("/fees")
def fees():
    return render_template('fees.html')

@app.route("/about")
def about():
    return render_template('about.html')

@app.route("/counseling")
def counseling():
    return render_template('counseling.html')

@app.route("/supervision")
def supervision():
    return render_template('supervision.html')

@app.route("/")
def index():
    return render_template('index.html')


if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
