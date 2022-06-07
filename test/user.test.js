import request from "supertest"
import app from "../app"

describe("Test root path", () => {
    test("GET user list", done => {
        request(app)
        .get("/api/v1/users")
        .then(response => {
            expect(response.statusCode).toBe(200);
            done()
        })
    })
})
