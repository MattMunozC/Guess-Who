#!/usr/bin/python
# -*- coding: ascii -*-
from unicodedata import category
from flask import Flask, render_template, request, redirect,send_file
from pathlib import Path
from os import path


app = Flask(__name__)
BASE_DIR = Path(__file__).resolve().parent
STATIC_FILE_DIR=path.join(BASE_DIR,"static")
MEDIA_FILE_DIR=path.join(BASE_DIR,"media")


@app.route('/')
def Index():
    return render_template("home.html")
@app.route('/static/<type>/<resource>',methods=['GET'])
def resource_retrieve(type,resource):
    return send_file(f"{STATIC_FILE_DIR}/{type}/{resource}")

if __name__=="__main__":
    #PORT=1521 HOST=LOCALHOST
    app.debug=True
    app.run()

