# from .db import db, environment, SCHEMA, add_prefix_for_prod


# class Album(db.Model):
#     __tablename__ = 'albums'

#     if environment == "production":
#         __table_args__ = {'schema': SCHEMA}

#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
#     album_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("albums.id")))
#     name = db.Column(db.String, nullable=False)
#     description = db.Column(db.String)

#     user = db.relationship("User", back_populates='albums')

#     def to_dict(self):
#         return {
#             "id": self.id,
#             "user": self.user_id,
#             "name": self.name,
#             "description": self.description,
#             "album": self.album_id,
#             "owner": self.user.to_dict()
#         }

#     def __repr__(self):
#         return f"{self.user_id}{self.user}"
