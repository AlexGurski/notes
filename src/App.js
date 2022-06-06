import { useEffect, useState } from "react";
import './assets/style/notes.css'
import {NotesListItems} from './components/ListItems'
import {NotesTextItem} from './components/TextItem'
import { get} from "./modules/query";

function App() {
  const [notes,setNotes] = useState(false)
  const [fullNotes, setFullNotes] = useState(false)
  const [updateServer,setUpdateServer] = useState(false)

  useEffect(()=>{
    get()
    .then((response) => {
      return response.json();
    })
    .then((data) => {

      setNotes(data.reverse());
    });
  },[updateServer])

  const filterTags = (tag)=>  {
    get()
    .then((response) => {
      return response.json();
    })
    .then((data)=>{      
     setNotes(data.filter(e=>e.tags.join('').indexOf(tag)!==-1?true:false)) 
    })
   
  }

  return (
    <div className="notes">
        <NotesListItems notes={notes} onClickOnText={notesTo=>setFullNotes(notesTo)} filterTags={e=>filterTags(e)} updateServer={()=>setUpdateServer(!updateServer)}/>
        <NotesTextItem fullNotes={fullNotes} updateServer={()=>setUpdateServer(!updateServer)}/>
    </div>
  );
}

export default App;
