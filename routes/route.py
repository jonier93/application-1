from flask import render_template, request, jsonify
from server import app
from db.users import *

@app.route('/')
def home_page():
    return render_template('index.html')

@app.route('/home')
def home_page2():
    return render_template('index.html')

@app.route('/register_page')
def register_page():
    return render_template('register.html')

@app.route('/register_user', methods=["post"])
def register_user():
    name = request.form["name"]
    lastName = request.form["lastName"]
    id = request.form["id"]
    age = request.form["age"]
    connectionSQL()
    insert_record(name, lastName, id, age)
    return render_template("confirm.html")

@app.route('/consult_user', methods=["post"])
def consult_user():
    obj = request.get_json()
    connectionSQL()
    results = consult_record(obj["id"])
    return jsonify(results)