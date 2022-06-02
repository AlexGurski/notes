import { useEffect, useState } from "react";
import './assets/style/notes.css'
import {NotesListItems} from './layouts/NotesListItems'
import {NotesTextItem} from './layouts/NotesTextItem'

function App() {
  const [notes,setNotes] = useState(false)
  const [fullNotes, setFullNotes] = useState(false)
  useEffect(()=>{
    fetch('http://localhost:3001/notes')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setNotes(data.reverse());
    });
  },[])

  return (
    <>    
    <div className="notes">
        <NotesListItems notes={notes} onClickOnText={notesTo=>setFullNotes(notesTo)}/>
        <NotesTextItem fullNotes={fullNotes}/>
    </div>
    </>
  );
}

export default App;
