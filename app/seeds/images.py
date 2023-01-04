from app.models import db, Image, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_images():
    image1 = Image(
        user_id=1, url="https://sportrbucket.s3.amazonaws.com/DuckyMeme.jpg")
    image2 = Image(
        user_id=2, url="https://i.pinimg.com/236x/71/28/3b/71283bb49db55cfee5bb6acd1389c465--tree-of-life-the-tree.jpg")
    image3 = Image(
        user_id=3, url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW48RE_KpnEYGS8XE1JBa_ZLaZZ7s40hrjk9NBdUjp5w&s")

    db.session.add(image1)
    db.session.add(image2)
    db.session.add(image3)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the images table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM images")

    db.session.commit()
