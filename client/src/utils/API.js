import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = ":keyes&key=AIzaSyC1xIQzLfqJvuVumPdeyDOOdtZs0aRIlA0";
const LIMIT = "&maxResults=30";
// "&key=AIzaSyC1xIQzLfqJvuVumPdeyDOOdtZs0aRIlA0"

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY + LIMIT);
  }
};