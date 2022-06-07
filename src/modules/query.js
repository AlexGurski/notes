import axios from "axios";
const URL = 'https://testnotestask.herokuapp.com/notes/'
//const URL = 'http://localhost:3001/notes/'
export const get = () =>{
    return fetch(URL)
   }

export const creates = (data) =>{
    axios.post(URL, data)
    .then(function (response) 
  {  
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  export const removes = (path) =>{
    axios.delete(URL+path, {})
    .then( (response) => {

    })
    .catch(function (error) {
      console.log(error);
    });
  }

  export const updates = (data, path) =>{
    axios.put(URL+path, data )
    .then(resp => {
  }).catch(error => {
      console.log(error);
  });
}


