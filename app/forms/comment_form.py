from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField
from wtforms.validators import DataRequired, ValidationError, Length
from app.models import Comment

class CommentForm(FlaskForm):
    imageId = IntegerField("ImageId")
    comment = StringField('Comment')
