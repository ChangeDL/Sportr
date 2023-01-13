from app.models import db, Image, Album, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_albums():
    demo5 = Image(
        user_id=1,  url="https://sportrbucket.s3.amazonaws.com/AtlantaMMA.jpg", title='UFC comes to my city.', description="Huge MMA fan and the UFC just so happened to be in my city this weekend.", tags='UFC,Atlanta'
    )
    demo6 = Image(
        user_id=1,  url="https://sportrbucket.s3.amazonaws.com/mmaatlanta.jpg", title='View of arena', description="The look from inside the arena from when I first walked in.", tags='UFC,Atlanta'
    )
    greenbay1 = Image(
        user_id=4,  url="https://sportrbucket.s3.amazonaws.com/image0.jpeg", title='Packers vs Viking Week 17, 2022 w/ the boys.', description='First time going to Green Bay and Lambeau Field. Met some close friends for the first time and had an awesome time. My toes felt like they were going to fall off at half time from how cold it was. Still an amazing way to start the New Year.', tags='Football,NFL,Vikings,Packers,Lambeau,SNF,New Years'
    )
    greenbay2 = Image(
        user_id=4,  url="https://sportrbucket.s3.amazonaws.com/image1.jpeg", title='The boys w/ the legend himself Tundra Man', description='Saw the famous Tundra Man while waiting to get into the stadium for the Packers vs Vikings game. My friends who are huge Packers fans just had to have a picture with him.', tags='Football,NFL,Vikings,Packers,Lambeau,SNF,New Years,Tundra Man'
    )
    greenbay3 = Image(
        user_id=4,  url="https://sportrbucket.s3.amazonaws.com/image5.jpeg", title='The view from outside Lambeau an hour before kickoff', description='View of the outside of the stadium from when we were getting ready to head inside.', tags='Football,NFL,Vikings,Packers,Lambeau,SNF,New Years,Stadium'
    )
    minnesota1 = Image(
        user_id=4,  url="https://sportrbucket.s3.amazonaws.com/image2.jpeg", title='First Football Game Outside of Florida', description='The Seahawks are my 2nd favorite team in the NFL and was lucky enough to fly out to meet some friends to watch them play the Vikings. Sat 4th row behind the endzone for what was a great game.',tags='Football,NFL,Vikings,Seahawks,US Bank,12th Man'
    )
    tyreek1 = Image(
        user_id=5,  url="https://sportrbucket.s3.amazonaws.com/TyreekAndTua.jpg", title='Uce and Cheetah against the world', description='Ready to begin my journey in Miami and help bring this city another Super Bowl.', tags='FinsUp,Miami,Dolphins,Cheetah,Tua,Football,NFL'
    )
    tyreek2 = Image(
        user_id=5,  url="https://sportrbucket.s3.amazonaws.com/TyreekHillBackFlip.jfif", title='Sunday Victory Vibes', description='Back flipping my way into a dub.', tags='FinsUp,Miami,Dolphins,Cheetah,Backflip,Football,NFL,Touchdown'
    )
    minnesota2 = Image(
        user_id=4,  url="https://sportrbucket.s3.amazonaws.com/image3.jpeg", title='4th row endzone watching the Seahawks warm up pt.1', description='Got to see Jamal Adams and Travis Home warming up before the game',tags='Football,NFL,Vikings,Seahawks,US Bank,Hurricanes,12th Man,Prez'
    )
    minnesota3 = Image(
        user_id=4,  url="https://sportrbucket.s3.amazonaws.com/image4.jpeg", title='4th row endzone watching the Seahawks warm up pt.2', description='Got to see Tyler Lockett and D.K. Metcalf warming up before the game',tags='Football,NFL,Vikings,Seahawks,US Bank,Metcalf,12th Man,Lockett'
    )
    dolphins1 = Image(
        user_id=4,  url="https://sportrbucket.s3.amazonaws.com/image6.jpeg", title='I may live in Jacksonville, but I am a Dolphins fan for life. #FinsUp', description='The Miami Dolphins came to town for a thursday night game. It was my first time seeing a Dolphins regular season game in person.', tags='FinsUp,Miami,Dolphins,Jacksonville,Football,NFL,Jaguars'
    )
    demo1 = Image(
        user_id=1,  url="https://sportrbucket.s3.amazonaws.com/tiger-crowd-atlanta.jpg", title='Tiger in Atlanta!', description="I'm not the biggest golf fan, but when Tiger Woods comes to your town you go and see him play.", tags='Woods,Golf,Atlanta'
    )
    demo2 = Image(
        user_id=1,  url="https://sportrbucket.s3.amazonaws.com/TigerWoodsHoleInOne.jpg", title='Hole In One!', description="Just saw a Tiger Woods hole in one live! What a moment to witness and be apart of. Congrat Tiger!.",tags='Woods,Golf,Atlanta,Hole In One'
    )
    dolphins2 = Image(
        user_id=4,  url="https://sportrbucket.s3.amazonaws.com/image7.jpeg", title='A rookie Tua warming up before the game', description='Got to see Tua in his rookie year warming up before the game. Sadly he did not get a chance to play in the game.',tags='FinsUp,Miami,Dolphins,Jacksonville,Football,NFL,Jaguars,Tua'
    )
    dolphins3 = Image(
        user_id=4,  url="https://sportrbucket.s3.amazonaws.com/image8.jpeg", title='Fun little wheel spin while we waited for the game to start.', description='The stadium had fun games and wheel spins that anyone could try before the game. I ended up winning a Gardner Minshew Stache facemask that I wore the rest of the game.',tags='FinsUp,Miami,Dolphins,Jacksonville,Football,NFL,Jaguars,Minshew'
    )
    dolphins4 = Image(
        user_id=4,  url="https://sportrbucket.s3.amazonaws.com/image9.jpeg", title='Under the lights of Thursday Night.', description='View from our seats of the stadium as the sun was going down and the game was getting ready to begin.',tags='FinsUp,Miami,Dolphins,Jacksonville,Football,NFL,Jaguars,Stadium'
    )
    tyreek6 = Image(
        user_id=5,  url="https://sportrbucket.s3.amazonaws.com/TyreekHillDolphinsWalkout.jpg", title='Walking out on Thursday Night.', description="Ready to help lead my team to a Victory and continue to prove why I am the best in the league.",tags='FinsUp,Miami,Dolphins,Cheetah,Football,NFL'
    )
    demo3 = Image(
        user_id=1,  url="https://sportrbucket.s3.amazonaws.com/Braves.jpg", title='Beautiful Day at Braves Stadium', description="Nothing like spending the afternoon watching some Braves baseball.", tags='Atlanta,Braves,Baseball,MLB'
    )
    demo4 = Image(
        user_id=1,  url="https://sportrbucket.s3.amazonaws.com/BraveWorldSeriesWin.jfif", title='World Champions!!!', description="Got to celebrate with the rest of Atlanta today at the championship parade! Go Braves!.", tags='Atlanta,Braves,Baseball,MLB'
    )
    tyreek3 = Image(
        user_id=5,  url="https://sportrbucket.s3.amazonaws.com/TyreekHillCollege.jpg", title='Throwback to college pt. 1', description='Been looking fly even before I was in the league.',tags='College,Cheetah,Football,NCAA'
    )
    tyreek4 = Image(
        user_id=5,  url="https://sportrbucket.s3.amazonaws.com/TyreekHillCollege2.jpg", title='Throwback to college pt. 2', description='Taking ankles and burning secondaries has always been my game.',tags='College,Cheetah,Football,NCAA'
    )
    tyreek5 = Image(
        user_id=5,  url="https://sportrbucket.s3.amazonaws.com/TyreekHillDeuces.jfif", title='Maybe next time young boy.', description="Can't keep up with so I throw up the deuces as I leave you in the dust",tags='NFL,Cheetah,Football,ChiefsKingdom,Deuces,Touchdown,Speed'
    )
    tyreek7 = Image(
        user_id=5,  url="https://sportrbucket.s3.amazonaws.com/TyreekHillPosing.jpg", title='Winners Pose', description="Who's going to stop me?",tags='NFL,Cheetah,Football,ChiefsKingdom'
    )
    tyreek9 = Image(
        user_id=5,  url="https://sportrbucket.s3.amazonaws.com/TyreekHillSuperBowl.jpg", title='SuperBowl Thangs', description="Making big plays no matter the game, I am him!",tags='NFL,Cheetah,Football,ChiefsKingdom,Deuces,SuperBowl,Champion'
    )
    demo7 = Image(
        user_id=1,  url="https://sportrbucket.s3.amazonaws.com/AtlantaHawksDraftParty.jpg", title='Throwback Thursday', description="Throwback to when I went to the Hawks draft party that they hosted in 2019.",tags='Atlanta,Hawks,Draft,NBA,Basketball'
    )
    demo8 = Image(
        user_id=1,  url="https://sportrbucket.s3.amazonaws.com/AtlantaHawksPlayOffWin.jpg", title='Playoff Victory!', description="Nothing like embarassing the Knicks in the playoffs. Trae Young is the future of this franchise.",tags='Atlanta,Hawks,Playoffs,NBA,Basketball,Knicks'
    )
    tyreek8 = Image(
        user_id=5,  url="https://sportrbucket.s3.amazonaws.com/TyreekHillProBowl1.jpg", title='Pro Bowl on the regular', description="I'm here so much it's basically a 2nd team for me at this point",tags='NFL,Cheetah,Football,ChiefsKingdom,Pro Bowl'
    )
    tyreek10 = Image(
        user_id=5,  url="https://sportrbucket.s3.amazonaws.com/TyreekPattyTravis.png", title='Pro Bowl w/ the squad', description="Best trio in the league, no one is stopping us ever.",tags='NFL,Cheetah,Football,ChiefsKingdom,Pro Bowl,Mahomes,Kelce,GOATS'
    )
    demo9 = Image(
        user_id=1,  url="https://sportrbucket.s3.amazonaws.com/AtlantaFalcons.jpg", title='Packed House', description="Everyone is excited to come see this new stadium and watch pur Falcons go on their quest to win a superbowl!.",tags='Atlanta,Falcons,NFL,Stadium'
    )
    demo10 = Image(
        user_id=1,  url="https://sportrbucket.s3.amazonaws.com/AtlantaFalconsView.jpg", title='Falcons new stadium view of field', description="This stadium is incredible, amazing views from no matter where you sit!!.",tags='Atlanta,Falcons,NFL,Stadium'
    )






    db.session.add(demo5)
    db.session.add(demo6)
    db.session.add(greenbay1)
    db.session.add(greenbay2)
    db.session.add(greenbay3)
    db.session.add(minnesota1)
    db.session.add(tyreek1)
    db.session.add(tyreek2)
    db.session.add(minnesota2)
    db.session.add(minnesota3)
    db.session.add(dolphins1)
    db.session.add(demo1)
    db.session.add(demo2)
    db.session.add(dolphins2)
    db.session.add(dolphins3)
    db.session.add(dolphins4)
    db.session.add(tyreek6)
    db.session.add(demo3)
    db.session.add(demo4)
    db.session.add(tyreek3)
    db.session.add(tyreek4)
    db.session.add(tyreek5)
    db.session.add(tyreek7)
    db.session.add(tyreek9)
    db.session.add(demo7)
    db.session.add(demo8)
    db.session.add(tyreek8)
    db.session.add(tyreek10)
    db.session.add(demo9)
    db.session.add(demo10)



    album1 = Album(
        user_id=1, name='Atlanta Golf',description='Tiger comes to ATL', images=[demo1,demo2]
        )
    album13 = Album(
        user_id=1, name='Atlanta Braves',description='Baseballs Best', images=[demo3,demo4]
        )
    album14 = Album(
        user_id=1, name='UFC',description='UFC Events in Atlanta', images=[demo5,demo6]
        )
    album15 = Album(
        user_id=1, name='Hawks',description='Atlanta Hawks', images=[demo7,demo8]
        )
    album16 = Album(
        user_id=1, name='Falcons',description='Atlanta Falcons (future superbowl champs)', images=[demo9,demo10]
        )
    album2 = Album(
        user_id=2, name='Album 2', description='Description for Album 2')
    album3 = Album(
        user_id=3, name='Album 3', description='Description for Album 3')
    album4 = Album(
        user_id=4,name='New Years Trip 2022',description='Trip up North for New Years', images=[greenbay1, greenbay2,greenbay3]
    )
    album5 = Album(
        user_id=4,name='Minnesota Trip 2022',description='Quick weekend in Minnesota', images=[minnesota1,minnesota2,minnesota3]
    )
    album6 = Album(
        user_id=4,name='Dolphins Come To Jax',description='Fins win in Jacksonville', images=[dolphins1,dolphins2,dolphins3,dolphins4]
    )
    album7 = Album(
        user_id=4,name='All Football Games',description="Games I've been to", images=[dolphins1,dolphins2,dolphins3,dolphins4,greenbay1, greenbay2,greenbay3,minnesota1,minnesota2,minnesota3]
    )
    album8 = Album(
        user_id=4,name='Out of State Football Games',description='Games I went to outside of Florida', images=[greenbay1, greenbay2,greenbay3,minnesota1,minnesota2,minnesota3]
    )
    album9 = Album(
        user_id=5,name='Miami',description='Dolphins Tenure', images=[tyreek1,tyreek2, tyreek6]
    )
    album9 = Album(
        user_id=5,name='College',description='Young Cheetah', images=[tyreek3,tyreek4]
    )
    album10 = Album(
        user_id=5,name='Kansas City',description='The beginnning', images=[tyreek5,tyreek7,tyreek8, tyreek9,tyreek10]
    )
    album11 = Album(
        user_id=5,name='Pro Bowl',description='Proof of greatness', images=[tyreek8,tyreek10]
    )
    album12 = Album(
        user_id=5,name='Football Career',description='From college to the pros, my career', images=[tyreek3,tyreek4,tyreek5,tyreek7,tyreek8, tyreek9,tyreek10,tyreek1,tyreek2, tyreek6]
    )




    db.session.add(album1)
    db.session.add(album13)
    db.session.add(album14)
    db.session.add(album15)
    db.session.add(album16)
    db.session.add(album2)
    db.session.add(album3)
    db.session.add(album4)
    db.session.add(album5)
    db.session.add(album6)
    db.session.add(album7)
    db.session.add(album8)
    db.session.add(album9)
    db.session.add(album10)
    db.session.add(album11)
    db.session.add(album12)
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
