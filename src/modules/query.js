import axios from "axios";
const URL = 'https://testnotestask.herokuapp.com/notes/'
//const URL = 'http://localhost:3001/notes/'
export const get = () =>{
    return  fetch(URL)
   }

export const creates = async (data) =>{
  let response = await axios.post(URL, data)
    return  response.data
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


