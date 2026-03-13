# Next.js Authentication App

A simple authentication demo built with **Next.js (App Router) and TypeScript**.
Users can log in using a public API and view their profile information.

## Live Demo

Deployed on Vercel:

https://auth-nextjs.vercel.app

## Features

* Login form with username and password
* Authentication using **DummyJSON API**
* User profile page displaying:

  * Name
  * Username
  * Email
  * Profile image
* Logout functionality
* User data stored in **localStorage**
* Built with **Next.js + TypeScript**

## Demo Credentials

Use the following DummyJSON test account:

```
Username: emilys
Password: emilyspass
```

## API Used

DummyJSON Authentication API

```
https://dummyjson.com/auth/login
```

## Installation

Clone the repository:

```
git clone https://github.com/garg-sushant/auth_nextjs.git
```

Navigate to the project folder:

```
cd auth_nextjs
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Open the app in your browser:

```
http://localhost:3000
```

## Technologies Used

* Next.js
* React
* TypeScript
* Fetch API
* DummyJSON API
* Vercel (Deployment)

## Future Improvements

* Route protection using middleware
* Authentication using cookies or JWT
* Signup functionality
* UI improvements with Tailwind CSS
