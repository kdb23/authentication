from flask import request, session, make_response


class Home(Resource):
    def get(self):
        return make_response("Is tihs Working ?")
    
api.add_resource(Home, '/')

if __name__ == '__main__':
    app.run(port=5555, debug=True)