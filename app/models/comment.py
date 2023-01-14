from .db import db, environment, SCHEMA, add_prefix_for_prod



class Comment(db.Model):
    __tablename__ = "comments"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    image_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("images.id")))
    comment = db.Column(db.String, nullable=False)

    user = db.relationship('User', back_populates='comments')
    image = db.relationship('Image', back_populates='comments')

    def to_dict(self):
        return{
            "id": self.id,
            "user":self.user_id,
            "image": self.image_id,
            "comment": self.comment,
            "owner": self.user.to_dict()
        }
