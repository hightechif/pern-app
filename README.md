## PERN App Boilerplate

### Description
A Boilerplate for PERN App.

### Instalation

**1. Clone the source code**

```
$ git clone https://github.com/ridhanf/pern-app.git
$ cd pern-app
```

**2. Install Dependencies**

Make sure you have [Node.js](https://nodejs.org/) installed. Project dependencies listed in `package.json`.

```
$ npm install
```

**3. Run sequelize**

Generate database

```
$ sequelize db:create
```

Run migration and seeders

```
$ sequelize db:migrate
$ sequelize db:seed:all
```

**4. Run the server**

Run server with:

```
$ npm run start
```

or

```
$ npm run dev
```

&nbsp;

React App listening in port 3000 (open http://localhost:3000)

Express App listening in port 5000 (open http://localhost:5000)

&nbsp;

That's all. Thank you.

&nbsp;

Sincerely,

Ridhan Fadhilah
