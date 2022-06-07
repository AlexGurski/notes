import { useEffect, useState } from "react";
import './assets/style/notes.css'
import {NotesListItems} from './components/ListItems'
import {NotesTextItem} from './components/TextItem'
import { get, creates} from "./modules/query";

function App() {
  const [notes,setNotes] = useState(false)
  const [fullNotes, setFullNotes] = useState(false)
  const [updateServ,setUpdateServ] = useState([])

   async  function  update(arr){
     if (arr[0]==="add"){
      await creates(arr[1]).then(e=>console.log(e))
    }
  }

useEffect(()=>{
     update(updateServ)
      .then( (response) => {
        console.log(response)
      })
      .then(
        ()=>
        get()
        .then((response) => {
          return response.json();
        })
        .then((data) => {        
          setNotes(data.reverse());
          console.log(data);
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
        {fullNotes?<NotesTextItem fullNotes={fullNotes} setFullText={()=>{setFullNotes(false)}} updateServer={(e)=>setUpdateServ(e)}/>:null}
    </div>
  );
}

export default App;
