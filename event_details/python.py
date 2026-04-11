from flask import Flask, render_template

app = Flask(__name__)

# Home Page
@app.route('/')
def home():
    return render_template('home.html')

# Events Page (FIXED)
@app.route('/events')
def events():
    return render_template('events.html')

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
