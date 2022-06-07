import { useEffect, useRef, useState } from 'react'
import { Tags } from './notesText/tags'
import { Header } from './notesText/Header'
import { TextNotes } from './notesText/Text'
import {AiFillCloseSquare} from 'react-icons/ai'
export const NotesTextItem = ({fullNotes, updateServer, setFullText})=>{
  const [text,setText] = useState(false);
  const [tags, setTags] = useState(null); 

useEffect(()=>{
  if (text){
    updateServer(["upd", text ,text.id ])
 
  }
},[text])

  useEffect(()=>{
      setText(fullNotes)
      setTags(null)
  },[fullNotes])

return (
<>
 
    {
    text?
    <div className="notes_text">
      <div className="notes_text_back" > <AiFillCloseSquare onClick={()=>setFullText()}/></div>
      <Header text={text} addText={el=>setText(el)} />   
      <TextNotes tags={tags} text={text} addText={el=>setText(el)} />
      <Tags text={text} addText={el=>setText(el)} searchTags={el=>setTags(el)} />
      <span className='notes_text_delete' onClick={()=>{ updateServer(["remove", text.id]);  setFullText()}}> Удалить заметку</span>
    </div>
    :null
    }
</>
)
}

 