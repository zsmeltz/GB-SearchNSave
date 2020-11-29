import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyC1xIQzLfqJvuVumPdeyDOOdtZs0aRIlA0";
const LIMIT = "&maxResults=30";
// "&key=AIzaSyC1xIQzLfqJvuVumPdeyDOOdtZs0aRIlA0"

//eslint-disable-next-line
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY + LIMIT);
  }
};