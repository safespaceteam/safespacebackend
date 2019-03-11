const request = require("supertest");
const server = require("../api/server");

describe("user auth router", () => {
  describe("POST to /register", () => {
    it("should return a 201 status when inserting a new user", async () => {
      const expected = 201;
      const user = {
        name: 'name',
        username: "test user",
        password: "pass"
      };
      let res = await request(server)
        .post("/register")
        .send(user);

      expect(res.status).toEqual(expected);
    });
  });
});