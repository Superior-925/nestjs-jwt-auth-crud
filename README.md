# App description

This app is NestJS/PostgreSql based server. Application uses Passport-JWT
technology for user authorization.
The application contains functionality for registering and 
authenticating users. You can also search for users, modify user data, and delete a user.

## To start the application, you need

- Install dependencies by command

```bash
$ npm install
```

- Set your user name and user password for DB in .env file and config/config.js file
- Create database and migrate

```bash
$ npm run db:create
$ npm run db:migrate
```


- Running the app

```bash
# watch mode
$ npm run start:dev
```

The application will be launched at localhost:5000

### For signup send data to localhost:5000/auth/signup
Body example: { 
name: "Tony",
email: "asd@mail.ru",
phone_number: "+79502358888",
password: "111111"
}

### For login send data(you can send email or phone and password) to localhost:5000/auth/login
Body example: {
username: "asd@mail.ru or 89181234567",
password: "111111"
}

To go to swagger go to localhost:5000/api
