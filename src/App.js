import { useEffect, useState } from "react";


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
    <div className="App">
      <ul>
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
  );
}

export default App;
