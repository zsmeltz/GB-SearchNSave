import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyAugBcq-tCpCVYJNr1uziC2Y1Fbj4bZm50";
const LIMIT = "&maxResults=30";


// eslint-disable-next-line
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY + LIMIT);
  }
};