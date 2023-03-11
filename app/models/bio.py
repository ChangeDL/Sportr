from .db import db, environment, SCHEMA, add_prefix_for_prod


class Bio(db.Model):
    __tablename__ = 'bio'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    text = db.Column(db.String(255))

    user = db.relationship("User", back_populates="bio")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'text': self.text,
        }
