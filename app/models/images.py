from .db import db, environment, SCHEMA, add_prefix_for_prod



class Image(db.Model):
    __tablename__ = "images"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    url = db.Column(db.Text, nullable=False)
    description = db.Column(db.Text)
    tags = db.Column(db.Text)
    people = db.Column(db.Text)
    albumid = db.Column(db.Integer)

    image_user = db.relationship("User", back_populates="user_image")

    def to_dict(self):
        return{
            'id': self.id,
            'user_id': self.user_id,
            'url': self.url,
            'description': self.description,
            'tags': self.tags,
            'people': self.people,
            'albumid': self.albumid
        }
