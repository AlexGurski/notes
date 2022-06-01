import { useEffect, useState } from "react";
import './assets/style/notes.css'
import {NotesListItems} from './layouts/NotesListItems'
import {FaSlackHash} from 'react-icons/fa'

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

 const onClickOnNotes = (notesFull)=>{
  setFullNotes(notesFull)
 }

  return (
    <>    
    <div className="App">
      <div className="notesList">
        <NotesListItems notes={notes} onClickOnText={notesTo=>setFullNotes(notesTo)}/>
      </div>
      <div className="notesText">
        <div className="notesText_container">
        {
        fullNotes?
        <div className="notesList_items_item">
          <h2>{fullNotes.title}</h2>    
          <p >{fullNotes.text}</p>
          <ul className="notesList_items_item_tags">
            <FaSlackHash style={{fontSize:'25px'}}/>
            {
              Object.values(fullNotes.tags).map(el=><li>{el}</li>)
            }
          </ul>
      </div>
        :null
            }
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
