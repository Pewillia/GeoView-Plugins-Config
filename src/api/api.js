import axios from "axios";

export default axios.create({
    baseURL:'http://localhost:3500',
    //baseURL:'https://viewer-visualiseur.services.geo.ca/apps/RAMP/fgpa/fgpa-1.3.1/schemaForm/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
    //headers: {"X-Requested-With": "XMLHttpRequest"}

});