# safespacebackend

https://my-safe-space.herokuapp.com/


### Auth Endpoints

| Method | Endpoint      | Description                                                                                                                                                                                                                                                                                         |
| ------ | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /register | Creates a `user` sent inside the `body` of the request. **Hashes** password before saving to the database.                                                                                                                                           |
| POST   | /login    | Uses the credentials sent inside the `body` to authenticate the user. On successful login, creates a JWT token to be used to access restricted endpoints. |


### Messages Endpoints

| Method | Endpoint      | Description                                                                                                                                                                                                                                                                                         |
| ------ | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET   | /messages    | This route does require auth in the header to view the messages. The JWT token is used to authorize|
| GET   | /messages/:id    | This route requires the message id|
| POST   | /messages    | This route required the userId and a message to add a new message |
| DELETE   | /messages/:id    | Remove a message by the message id |
| PUT   | /messages/:id    | Update the message by the message id |