from flask import Flask, render_template, request

app = Flask(__name__)

# Home Page
@app.route('/')
def home():
    return render_template('home.html')

# Events Page
@app.route('/events')
def events():
    return render_template('events.html')

# Registration Page + Form Handling
@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        name = request.form.get('name')
        branch = request.form.get('branch')
        rollno = request.form.get('rollno')
        semester = request.form.get('semester')

        print(name, branch, rollno, semester)

        return "Registration Successful!"

    return render_template('register.html')

# Run app
if __name__ == '__main__':
    app.run(debug=True)
