from app.models import db, User, environment, SCHEMA, Bio
from datetime import date

# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password', full_name="demo lition", created_on= date.today())
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password', full_name="marnie bob", created_on= date.today())
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password', full_name="bobbie joe", created_on= date.today())
    douglas = User(
        username = 'changedl', email='sportr@gmail.com', password='password', full_name='Douglas Loizzo', created_on= date.today()
    )
    tyreek = User(
        username= 'cheetah', email='tyreek10@yahoo.com', password='password', full_name='Tyreek Hill', created_on= date.today()
    )

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(douglas)
    db.session.add(tyreek)

    demoBio = Bio(
       id=1, user_id=1, text="""
Hi, my name is Demo and I am a sports enthusiast living in Atlanta. I love playing and watching sports of all kinds, from basketball and football to tennis and golf. There's nothing quite like the thrill of competition and the feeling of being part of a team.
Growing up, sports were always a big part of my life. I played on various teams throughout my childhood and even in college. Now, as an adult, I continue to stay active by participating in pick-up games with friends and hitting the gym regularly.
In addition to sports, I also enjoy exploring all that Atlanta has to offer. From the delicious food to the vibrant culture, there's always something new to discover in this amazing city. Whether I'm trying out a new restaurant or checking out a local festival, I always try to make the most of my time here.
Overall, I am grateful for my love of sports and the way it has shaped my life. It has taught me the importance of hard work, teamwork, and perseverance, and has given me countless memories that I will cherish for years to come.
       """
    )
    marnieBio = Bio(
       id=2, user_id=2, text='Test Bio'
    )
    bobbieBio = Bio(
        id=3, user_id=3, text='Test Bio'
    )
    douglasBio = Bio(
        id=4, user_id=4, text="""
        I'm a software engineer with a passion for React, Redux, Python, and Javascript.
I myself am a huge sports fan. Being born and raised in South Florida, I am a fan of all Miami Sports. I also have teams outside of Miami that I root for such as my alma mater,
UCF, and Seattle sports teams such as the Seahawks and Krakens. My favorite sports are Football, and Basketball and I have a personal goal to one day visit every football stadium
in the NFL. Current team stadiums I have been to are (Dolphins, Jaguars, Buccaneers, Vikings, and Packers).
        """
    )
    tyreekBio = Bio(
        id=5, user_id=5, text="""
        Hi there, I'm Tyreek Hill, a wide receiver for the Miami Dolphins in the NFL. I was born in Douglas, Georgia and grew up in a rough neighborhood where football was my escape.

Despite facing many challenges growing up, I always had a passion for the game and worked tirelessly to improve my skills. In college, I played for both Garden City Community College and Oklahoma State University, where I made a name for myself as a speedy and dynamic player.

After being drafted by the Chiefs in 2016, I quickly became known as one of the most exciting players in the league. With my lightning-fast speed and quick reflexes, I have been able to make game-changing plays and help lead my team to victory.

Off the field, I am a devoted father to my three children and am committed to being a positive role model for them and for other young people. I believe that sports can be a powerful force for good in the world, and I am dedicated to using my platform to make a positive impact in my community and beyond.
        """
    )

    db.session.add(demoBio)
    db.session.add(marnieBio)
    db.session.add(bobbieBio)
    db.session.add(douglasBio)
    db.session.add(tyreekBio)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
