from flask import Blueprint, request
from app.models import db, Image
from app.forms import ImageForm
from flask_login import current_user, login_required
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)

image_routes = Blueprint("images", __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@image_routes.route("", methods=["POST"])
@login_required
def upload_image():

    if "image" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["image"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if upload:
        print(upload)

    if "url" not in upload:
        # if the dictionary doesn't have a filename key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload,400

    url = upload["url"]

    form = ImageForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
    # we can use the
        new_image = Image(user=current_user, url=url, description=form.data['description'], tags=form.data['tags'], people=form.data['people'])
        db.session.add(new_image)
        '''
        new_image.append.albums(form.data['albums'])
        '''
        db.session.commit()
        return {"url": url}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@image_routes.route("")
def get_all_images():
    images = Image.query.order_by(Image.id.desc()).all()
    return {image.id: image.to_dict() for image in images}

@image_routes.route("/<int:id>", methods=['DELETE'])
@login_required
def delete_image(id):
    image = Image.query.get(id)
    db.session.delete(image)
    db.session.commit()
    return {'message': 'Delete Successful'}


@image_routes.route('/<int:id>', methods=['GET'])
def get_one_image(id):
    image = Image.query.get(id)
    return ({image.id: image.to_dict()})


@image_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_image_details(id):
    image = Image.query.get((id))

    form = ImageForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        description = form.data['description']
        tags = form.data['tags']
        people = form.data['people']

        image.description = description
        image.tags = tags
        image.people = people

        db.session.commit()

    return image.to_dict()
