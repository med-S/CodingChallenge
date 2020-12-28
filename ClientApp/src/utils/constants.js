export default {
    baseUrl: process.env.NODE_ENV === "production" ? "https://www.CodingChallenge.com/api/" : "http://localhost:59258/api/",
    timeout: process.env.NODE_ENV === "production" ? 70000 : 999999999,

}