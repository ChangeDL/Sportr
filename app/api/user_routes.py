from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, db, Bio
from app.forms import SignUpForm

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    bio = Bio.query.filter_by(user_id=id).first()

    return user.to_dict()
