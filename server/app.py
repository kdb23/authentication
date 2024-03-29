from flask import request, session, make_response
from flask_restful import Resource
from config import app, db, api
from models import User
from datetime import datetime, timedelta
from werkzeug.security import check_password_hash
import jwt

class Home(Resource):
    def get(self):
        return make_response("Is tihs Working ?")
    
api.add_resource(Home, '/')

class Users(Resource):
    def get(self):
        users = [u.to_dict() for u in User.query.all()]
        return make_response(users, 201)
    
    def post(self):
        data = request.get_json()
        user = User.query.filter_by(email = data['email']).first()

        if user:
            return make_response({'error': 'username is already taken'}, 400)
        if user == None:
            try:
                new_user = User(username = data['username'], _password_hash = data['_password_hash'])
                new_user.password_hash = new_user._password_hash
                hashed_pass = new_user._password_hash
                new_user=User(first_name = data['first_name'], last_name = data['last_name'], email = data['email'], _password_hash = hashed_pass)
                db.session.add(new_user)
                db.session.commit()

                token = jwt.encode({
                    'id': new_user.id,
                    'exp' : datetime.utcnow() + timedelta(minutes = 90)
                }, app.config['SECRET_KEY'])
                return make_response({'token' : token.decode('UTF-8'), 'user': new_user.to_dict()}, 200)

            except:
                return make_response({'error': 'user input invalid'}, 400)
    
api.add_resource(Users, '/users')

class UserById(Resource):
    def get(self, id):
        user = User.query.filter_by(id=id).first()
        if user == None:
            return make_response({'error': 'user not found'}, 400)
        return make_response(user.to_dict())
    
    def patch(self, id):
        data = request.get_json()
        user = User.query.filter_by(id=id).first()

        if user == None:
            make_response({'error': 'user not found'}, 400)

        for key in data.keys():
            setattr(user, key, data[key])
        db.session.add(user)
        db.session.commit()
        return make_response(user.to_dict(), 200)

    def delete(self, id):
        user = User.query.filter_by(id=id).first()

        if user == None:
            make_response({'error': 'user not found'}, 400)
        
        db.session.delete(user)
        db.session.commit()
        return make_response({'succes': 'user deleted'}, 200)

api.add_resource(UserById, '/users/<int:id>')

class Login(Resource):
    def post(self):
        data = request.get_json()
        user = User.query.filter_by(username = data['username']).first()
        
        if not user:
            return make_response({'error':'Could not verify username'}, 401)
  
        if user and user.authenticate(data['_password_hash']):
            token = jwt.encode({
                'id': user.id,
                'exp' : datetime.utcnow() + timedelta(minutes = 30)
            }, app.config['SECRET_KEY'])

        return make_response({'token' : token.decode('UTF-8'), 'user': user.to_dict()}, 200)

api.add_resource(Login, '/login')

if __name__ == '__main__':
    app.run(port=5555, debug=True)