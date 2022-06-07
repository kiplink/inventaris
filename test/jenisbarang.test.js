import request from "supertest"
import { Test } from "supertest"
import app from "../app"

describe("Test Jenis Barang", () => {
    test("GET list barang", done => {
        request(app)
        .get("/api/v1/jenisbarang")
        .then(response => {
            expect(response.statusCode).toBe(200);
            done()
        })
    })
})