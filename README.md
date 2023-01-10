# Sportr

### About

Sportr, inspired by, Flickr, is a website clone for the sport fans community. Users and guests alike can come to find photos from sporting events and venues. The site offers the ability to upload photos only that are png,jpg, or jpeg. With this users are able to show others images they took anywhere sporting related they've been, whether the sport is football, golf, basketball, baseball, mma, boxing, cricket, rugby, etc.

It's been a pleasure deveolping this site with the sports community in mind. I will continue to make updates and refine the site for smoother experience. I hope you enjoy poking around the site, and that it helps you connect with others and find those with similar sport interests.

To use the website you can either select the live link, or by downloading from the repository and following the steps listed out in the "Getting Sportr started" section below

>  Live Site Link: [Sportr](https://sportr.onrender.com)



## Getting Sportr Started
1. Clone this repository, or download the zip and open the file.

2. Install dependencies

      ```bash
      pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment

4. Make sure the SQLite3 database connection URL is in the **.env** file

5. This starter organizes all tables inside the `flask_schema` schema, defined
   by the `SCHEMA` environment variable.  Replace the value for
   `SCHEMA` with a unique name, **making sure you use the snake_case
   convention**.

6. Get into your pipenv, migrate your database, seed your database, and run your Flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

7. Then checkout the [README](./react-app/README.md) inside the `react-app` directory.


## Wiki Links
The links below offer more details on our Database Schema, Features List, and User Stories:

[Database Schema](https://github.com/ChangeDL/Sportr/wiki/DATABASE-Schema)

[Features List](https://github.com/ChangeDL/Sportr/wiki/Features)

[User Stories](https://github.com/ChangeDL/Sportr/wiki/User-Stories)

[WireFrames](https://github.com/ChangeDL/Sportr/wiki/Wireframes)

## Tech Stack
Languages, Frameworks, Platforms, and Libraries used:

>  Python, Flask, Alembic, SQLAlchemy, PyPI, HTML5, CSS3, Node.js, React, Redux, AWS

Hosting:

>  Render

Host Database:

>  PostgreSQL



## Sportr Splash Page
![SportrSplashPage](https://user-images.githubusercontent.com/108757380/211228598-8ce0dc66-28e4-4978-a0e0-96f96c33d39a.png)

## Sportr Explore Page
![SportrExplorePage](https://user-images.githubusercontent.com/108757380/211228618-bfade152-6e20-49b4-8cef-f2b0f6b10888.png)

## Sportr Albums
![SportrAlbums](https://user-images.githubusercontent.com/108757380/211228631-d0cc961a-e8c7-4db9-bd8f-8be64a366334.png)

## Sportr Album Showroom
![SportrAlbumShowroom](https://user-images.githubusercontent.com/108757380/211228645-6f199d9d-eb37-452f-934f-d31c657183cd.png)

## Sportr Image Showroom
![SportrImageShowroom](https://user-images.githubusercontent.com/108757380/211228657-d8bf9479-fc45-4aa9-ac68-cae6112e8997.png)


