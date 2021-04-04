import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyAlb5fbkLfSSMyN_-6gGwETOXOoisM4TdI";
const LIMIT = "&maxResults=30";

// eslint-disable-next-line
export default {
  search: function (query) {
    return axios.get(BASEURL + query + APIKEY + LIMIT);
  },
};
