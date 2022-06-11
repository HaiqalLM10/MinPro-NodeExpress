## 1. Overview

Mini Project from Dibimbing based on NodeJS and ExpressJS. This project is a relationship between Merchant and Product wrapped using an API. 
Merchants can create merchant users, view product inquiries, and add products.

## 2. Authetincation

Every merchant to publish and edit products requires an access token. The token is generated using JSON Web Token (JWT).

## 3. Resources

8 API endpoints can be used in this project. Users (merchants) can add or remove merchants and can perform CRUD processes on products. The first thing to do is hit the user login endpoint to get the access token, then put the token in the access token bearer header.

### 4. Architecture

<img width="649" alt="Screen Shot 2022-06-11 at 11 33 56" src="https://user-images.githubusercontent.com/57058838/173187796-7b5df298-5cea-4c6b-a740-55b952f109bb.png">

This project is initialized to run on a local server with port 3000. You can change the port or use the IP as you wish. The local server will run the backend runtime from nodeJS. Furthermore, the backend will access the local database with the name of the database and the available tables.

<img width="463" alt="Screen Shot 2022-06-09 at 14 58 06" src="https://user-images.githubusercontent.com/57058838/173187948-6d2f2dc0-1d21-4505-9407-55800c16541e.png">

Entity Relationship Diagram (ERD) in this project consists of 2 entity tables, namely merchant and product. The relationship between these 2 tables is Many to Many (M:N), meaning that each merchant can have more than one product and one product can be owned by more than one merchant.

### Executing program

* How to run the program
```
node app.js
```

## Authors

Contributors names and contact info

ex. HaiqalMA
