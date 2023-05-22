from flask_app import app
from flask import render_template, jsonify, request
import os
import requests

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search', methods = ['POST'])
def search_superhero():
    r = requests.get(f"https://superheroapi.com/api/{os.environ.get('FLASK_APP_API_KEY')}/search/{request.form['search']}")
    return jsonify(r.json())
