import { useEffect, useState } from "react";
import './assets/style/notes.css'
import {Header} from "./Header"
function App() {
  const [notes,setNotes] = useState('')

  useEffect(()=>{
    fetch('http://localhost:3001/notes')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data)
      setNotes(data);
    });
  },[])
 
  return (
    <>
    
    <div className="App">
      <div className="notesList">
        <ul className="notesList_items">
          <Header/>
          {Object.values(notes).map(e=>
          <li>
              <h2>{e.title}</h2>    
              <p>{e.text}</p>
              <ul>
              {
                Object.values(e.tags).map(el=><li>{el}</li>)
              }
              </ul>
            </li>
          )}
        </ul>
      </div>
      <div className="notesText">
        gd
      </div>
    
      
    </div>
    </>
  );
}

export default App;
