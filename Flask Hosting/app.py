#!/usr/bin/python
# -*- coding: ascii -*-
from unicodedata import category
from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def Index():
    return render_template("home.html")
if __name__=="__main__":
    #PORT=1521 HOST=LOCALHOST
    app.debug=True
    app.run("192.168.1.86")