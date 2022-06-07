import { useEffect, useState } from "react";
import { randomID } from "../../modules/randomID";
import { creates } from "../../modules/query";

export const AddNewPost = ({clickVisibleAddForm, visible, updateServer}) =>{  
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
          <input type="text"  className="notes_list_add_title" name="name" value={newNotes.title?newNotes.title:""}onChange={e=>setNewNotes({...newNotes, title:e.target.value})}/>
        </label>  
        <label>
          Текст заметки:
          <textarea name='text' value={newNotes.text?newNotes.text:""} onChange={e=>{setNewNotes({...newNotes, text:e.target.value}); setTags(spliterTags(e.target.value))}}/>
        </label>
        <span>
            {tags.map(e=><p key={randomID()}>{e}</p>)}
          </span>
        <span className="notes_list_add_button">   
            <input  type="button"  value='Сохранить' onClick={()=>{ updateServer(["add",{...newNotes, id:randomID(), text:newNotes.text.replace(/#/g, '')}]); setNewNotes({}); setTags([])}}/>
            <input  type="button"  value='Скрыть' onClick={
              //()=>clickVisibleAddForm()
              ()=>creates({...newNotes, id:randomID(), text:newNotes.text.replace(/#/g, '')}).then(e=>console.log(e))
              }/>
        </span>
    </form>
  );
}


