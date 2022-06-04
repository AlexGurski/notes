import { useEffect, useState } from "react";

const randomID = (title) =>{
  const abc = "1234567890-_abcdefghijklmnopqrstuvwxyz";
  let rs = title.substring(0,5);
  while (rs.length < 10) {
      rs += abc[Math.floor(Math.random() * abc.length)];
  }
  return rs
}

export const AddNewPost = ({create,clickVisibleAddForm, visible}) =>{  
  const [newNotes, setNewNotes] = useState({}) 
  const [tags, setTags] = useState([])


  useEffect(()=>{
    setNewNotes({...newNotes, tags:tags})
  },[tags])

  const spliterTags = (text) =>{
    return text.split(" ").filter(e=>e[0]===("#")).map(el=>el.replace(',', '').replace('.', '').replace('#', ''));
  }

  return (
    <form className="notes_list_add" style={visible?{display:'flex'}:{display:'none'}}>
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
          <input type='button' value='Сохранить' onClick={()=>{create({...newNotes, id:randomID(newNotes.title), text:newNotes.text.replace(/#/g, '')});setNewNotes({}); setTags([])}}/>
          <input type='button' value='Скрыть' onClick={()=>clickVisibleAddForm()}/>
        </span>
    </form>
  );
}


