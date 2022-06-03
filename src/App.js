import { useEffect, useState } from "react";
import './assets/style/notes.css'
import {NotesListItems} from './components/NotesListItems'
import {NotesTextItem} from './components/NotesTextItem'
import axios from "axios";

function App() {
  const [notes,setNotes] = useState(false)
  const [fullNotes, setFullNotes] = useState(false)
  const [updateServer, setUpdateServer]=useState(true)
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
        <NotesListItems notes={notes} onClickOnText={notesTo=>setFullNotes(notesTo)} />
        <NotesTextItem fullNotes={fullNotes} updates={(data, path)=>update(data,path)}/>
    </div>
    </>
  );
}

export default App;
