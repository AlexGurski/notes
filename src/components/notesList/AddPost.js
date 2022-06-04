import { useEffect, useState } from "react";

const randomID = (title) =>{
  const abc = "1234567890-_abcdefghijklmnopqrstuvwxyz";
  let rs = title.substring(0,5);
  while (rs.length < 10) {
      rs += abc[Math.floor(Math.random() * abc.length)];
  }
  return rs
}

export const AddNewPost = ({create}) =>{  
  const [newNotes, setNewNotes] = useState({}) 
  const [tags, setTags] = useState([])
  const [display,setDisplay] = useState({display:"none"})
  useEffect(()=>{
    setNewNotes({...newNotes, tags:tags})
  },[tags])

  const spliterTags = (text) =>{
    return text.split(" ").filter(e=>e[0]===("#")).map(el=>el.replace(',', '').replace('.', '').replace('#', ''));
  }

  return (
    <form className="notes_list_add" style={display}>
        <label>
          Название:
          <input type="text" name="name" value={newNotes.title?newNotes.title:""}onChange={e=>setNewNotes({...newNotes, title:e.target.value})}/>
        </label>  
        <label>
          Текст заметки:
          <textarea name='text' value={newNotes.text?newNotes.text:""} onChange={e=>{setNewNotes({...newNotes, text:e.target.value}); setTags(spliterTags(e.target.value))}}/>
        </label>
        <span>
            {tags.map(e=><p>{e}</p>)}
          </span>
        <span>          
          <input type='button' value='Сохранить' onClick={()=>{create({...newNotes, id:randomID(newNotes.title), text:newNotes.text.replace('#', '')});setNewNotes({}); }}/>
          <input type='button' value='Отмена' onClick={()=>setDisplay({display:'none'})}/>
        </span>
    </form>
  );
}


