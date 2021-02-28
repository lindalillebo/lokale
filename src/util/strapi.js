import Strapi from "strapi-sdk-javascript/build/main"

const apiUrl = process.env.VUE_APP_STRAPI_URL || "http://localhost:1337"
const strapi = new Strapi(apiUrl)

export default strapi;
export { apiUrl }