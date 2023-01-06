from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField
from wtforms.validators import DataRequired, ValidationError, Length
from app.models import Album

class AlbumForm(FlaskForm):
    name = StringField('Album Name')
    description = StringField('Description')
    images = StringField('Images')
