# RESTAPI-handbook


Hello!


This project is a RESTAPI using Express. The API is a list of pets. Each pet has:
- id
- name
- type
- age
- breed


It has the following CRUD endpoints:

- GET '/'
  Shows the home page
- GET '/pets'
  Lists all pets
- GET '/pets/:id'
  Gets a single pet by id
- PUT '/pets/:id'
  Updates a pet by id (all fields required in body)
- POST '/pets'
  Adds a new pet
- DELETE '/pets/:id'
  Deletes a pet by id


If you'd like to complete this tutorial by yourself, you can do so [here](https://www.freecodecamp.org/news/build-consume-and-document-a-rest-api/)

Otherwise you can follow these steps:

1. Clone the repository using the following command:
   ```
   git clone https://github.com/charlieBdev/RESTAPI-handbook.git
   ```
2. Install the required dependencies:
   ```
   npm i
   ```

3. Start the server by running the following command:
   ```
   npm start
   ```

4. To run tests (watch flag is enabled), use the following command:
   ```
   npm test
   ```

## Dependencies

- Jest
- Supertest
- Nodemon
- CORS
- Express
- Babel
