# School inventory app
Aplication preview: [Members only Clubhouse](https://members-only-clubhouse23.up.railway.app/log-in)

## Description
This web application serves as a demonstration of my knowledge for user authentication and sessions in Express (NodeJS) along with SQL for data storage. First user needs to sign up with his information and password that gets encrypted and saved into PostgreSQL database. After that you can log in with your username and password and session is created. By default, user doesn't get a membership and admin status. All default users can create and see messages that are stored in the database but only members can view the date and authors of the messages and admin users can delete those messages. 
To become a member you must enter the secret passcode `clubhouse` and after that you can also become an admin by entering the passcode `runtheworld`. 
When user is logged out, all routes (such as `/messages`, `/join-club`, `/become-admin`, etc.) are secured with middleware that checks if user is logged in or not. Application is also designed to be used with smaller screen devices such as smartphones and tablets.

### Things that still need to be fixed:
- better design

## Instalation
To run this application locally, follow these steps:
1. clone the repository: `git clone https://github.com/jangmz/members-only.git`
2. install dependencies: `npm install`
3. create .env file with database credentials and other neccessary information: 
    - `DB_USER=` -> database username
    - `DB_PASSWORD=` -> database password
    - `DB_NAME=` -> database name
    - `DB_PORT=5432`
    - `DB_HOST=localhost`
    - `PORT=3000`
    - `SECRET=clubhouse`
    - `ADMIN_SECRET=runtheworld`
4. create database in your psql, then run the create tables script: `npm run tables`
5. start the development server: `npm run dev`
6. open your browser and navigate to: http://localhost:3000/

## Usage
- sign up: sign up form to create an account
- log in: log in form
- messages: all messages from DB are displayed, admins get a button to delete a message
- new message: create a new message that is saved to db and displayed
- join club: enter secret passcode to become a member
- become admin: enter secret passcode to become an admin

## Technologies used
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)\
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)\
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)\
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)\
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)\
![Debian](https://img.shields.io/badge/Debian-D70A53?style=for-the-badge&logo=debian&logoColor=white)\
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)\
![Railway](https://a11ybadges.com/badge?logo=railway)

## Contact
Contact me here for any collaborations/inquiries: [LinkedIn](https://si.linkedin.com/in/jan-jankovi%C4%8D-03429b247)
