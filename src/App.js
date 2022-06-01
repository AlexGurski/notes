import { useEffect, useState } from "react";


function App() {
  const [date,setDate] = useState('')
  useEffect(()=>{
    fetch('http://localhost:3001/users')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setDate(data);
    });
  },[])
 

  return (
    <div className="App">
      {Object.keys(date).map(e=><p>{date[e].name}</p>)}
    </div>
  );
}

export default App;
