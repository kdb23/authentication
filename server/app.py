from flask import request, session, make_response
from flask_restful import Resource
from config import app, db, api
from models import User

class Home(Resource):
    def get(self):
        return make_response("Is tihs Working ?")
    
api.add_resource(Home, '/')

if __name__ == '__main__':
    app.run(port=5555, debug=True)