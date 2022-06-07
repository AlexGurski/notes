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

  export const removes = async (path) =>{
    let response = await axios.delete(URL+path, {})
    return  response.data
  }

  export const updates = async (data, path) =>{
    let response = await axios.put(URL+path, data )
    return  response.data
}


