import axios from "axios";

const wikipedia = axios.create({
    baseURL: `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info|extracts&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=`
});

export default wikipedia;