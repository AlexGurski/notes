import { useEffect, useState } from "react";
import './assets/style/notes.css'
import {NotesListItems} from './components/ListItems'
import {NotesTextItem} from './components/TextItem'
import { get, creates, removes, updates} from "./modules/query";

function App() {
  const [notes,setNotes] = useState(false)
  const [fullNotes, setFullNotes] = useState(false)
  const [updateServ,setUpdateServ] = useState(["get"])

   async  function  update(arr){
     if (arr[0]==="add"){
      await creates(arr[1])
    }
    if (arr[0]==="remove"){
      await removes(arr[1])
    }
    if (arr[0]==="upd"){
      await updates(arr[1],arr[2])
    }
  }

useEffect(()=>{
     update(updateServ)
      .then(
        ()=>
        get()
        .then((response) => {
          return response.json();
        })
        .then((data) => {        
          setNotes(data.reverse());
        })
    )
    
  },[updateServ])

  const filterTags = (tag)=>  {
    get()
    .then((response) => {
      return response.json();
    })
    .then((data)=>{      
     setNotes(data.filter(e=>e.tags.join('').indexOf(tag)!==-1?true:false).reverse()) 
    })
   
  }

  return (
    <div className="notes">
        <NotesListItems notes={notes} onClickOnText={notesTo=>setFullNotes(notesTo)} filterTags={e=>filterTags(e)} updateServer={(type)=>setUpdateServ(type)}/> 
        {fullNotes?<NotesTextItem fullNotes={fullNotes} setFullText={()=>{setFullNotes(false)}} updateServer={(type)=>setUpdateServ(type)}/>:null}
    </div>
  );
}

export default App;
