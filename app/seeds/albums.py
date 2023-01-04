from app.models import db, Album, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_albums():
    album1 = Album(
        user_id=1, name='Album 1')
    album2 = Album(
        user_id=2, name='Album 2', description='Description for Album 2')
    album3 = Album(
        user_id=3, name='Album 3', description='Description for Album 3')

    db.session.add(album1)
    db.session.add(album2)
    db.session.add(album3)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the albums table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_albums():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.albums RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM albums")

    db.session.commit()
