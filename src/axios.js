import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://us-central1-ecommerce-clone-xiangning.cloudfunctions.net/api",
  // first try on local:
  // "http://localhost:5001/ecommerce-clone-xiangning/us-central1/api", // the api(cloud function) url
});

export default instance;
