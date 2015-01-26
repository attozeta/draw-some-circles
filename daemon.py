#!/usr/bin/python
import flask as fl

app = fl.Flask(__name__)
app.config.update(
    DEBUG = True,
)

@app.route('/')
def init():
    return fl.render_template('main.html')

if __name__ == '__main__':
    app.run()

