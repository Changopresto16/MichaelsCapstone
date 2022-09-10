import os

basedir = os.path.abspath(os.path.dirname(__name__))

class Config():
    FLASK_APP = os.environ.get('FLASK_APP')
    FLASK_ENV = os.environ.get('FLASK_ENV')
    SECRET_KEY = "1234"
    SQLALCHEMY_DATABASE_URI = 'postgresql://ucjlqxtw:v26e8fIU6SlTQKLxyQ7LKOKp4ivm4IdT@jelani.db.elephantsql.com/ucjlqxtw'
    SQLALCHEMY_TRACK_MODIFICATIONS = False