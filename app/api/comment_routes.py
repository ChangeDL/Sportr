from flask import Blueprint, request
from app.models import db, Comment
from app.forms import CommentForm
from flask_login import current_user, login_required


comment_routes = Blueprint('comments',__name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@comment_routes.route("", methods=["POST"])
@login_required
def add_comment():

    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_comment = Comment(user=current_user, image_id=form.data['imageId'], comment=form.data['comment'])
        db.session.add(new_comment)
        db.session.commit()
        return new_comment.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@comment_routes.route("/<int:id>", methods=["PUT"])
@login_required
def edit_comment(id):

    comment_edit = Comment.query.get(id)

    form = CommentForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        comment = form.data['comment']

        comment_edit.comment = comment

        db.session.commit()
    return comment_edit.to_dict()

@comment_routes.route("<int:id>", methods=["DELETE"])
@login_required
def delete_comment(id):

    comment = Comment.query.get(id)

    db.session.delete(comment)
    db.session.commit()
    return {'message': 'Delete Successful'}
