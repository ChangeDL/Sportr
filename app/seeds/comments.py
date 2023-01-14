from app.models import db, Comment, environment, SCHEMA

def seed_comments():
    comment1 = Comment(
        user_id=2, image_id=1, comment='This is an awesome photo of the UFC Ring hope you had fun! '
    )
    comment2 = Comment(
        user_id=2, image_id=1, comment='I wish UFC would come to Pembroke Pines, would love to see Style Bender fight!'
    )
    comment3 = Comment(
        user_id=1, image_id=1, comment='Thanks for the support on my photo'
    )

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)

    db.session.commit()

def undo_comments():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM comments")

    db.session.commit()
