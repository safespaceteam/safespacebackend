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

| GET   | /messages    | This route does require auth in the header to view the messages. The JWT token is used to authorize |

