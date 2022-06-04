import { useEffect, useState } from "react";
import './assets/style/notes.css'
import {NotesListItems} from './components/ListItems'
import {NotesTextItem} from './components/TextItem'
import axios from "axios";

function App() {
  const [notes,setNotes] = useState(false)
  const [fullNotes, setFullNotes] = useState(false)
  const [updateServer, setUpdateServer]=useState(true)
  
  const creates = (data) =>{
    axios.post('http://localhost:3001/notes/', data)
    .then(function (response) {
      setUpdateServer(!updateServer)
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const removes = (path) =>{
    axios.delete('http://localhost:3001/notes/'+path, {})
    .then( (response) => {
      setUpdateServer(!updateServer)
      setFullNotes(false)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

const update = (data, path) =>{
  console.log(data)
        axios.put('http://localhost:3001/notes/'+path, data )
        .then(resp => {
          setUpdateServer(!updateServer)
          //console.log(resp.data);
      }).catch(error => {
          console.log(error);
      });
}

  useEffect(()=>{
    fetch('http://localhost:3001/notes')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setNotes(data.reverse());
    });
  },[updateServer])

  return (
    <>    
    <div className="notes">
        <NotesListItems notes={notes} onClickOnText={notesTo=>setFullNotes(notesTo)} create={(data)=>creates(data,"")}/>
        <NotesTextItem fullNotes={fullNotes} updates={(data, path)=>update(data,path)} removePost={e=>removes(e)}/>
    </div>
    </>
  );
}

export default App;
