import { useEffect, useRef, useState } from 'react'
import { Tags } from './notesText/Tags'
import { Header } from './notesText/Header'
import { TextNotes } from './notesText/Text'

export const NotesTextItem = ({fullNotes, updates, removePost})=>{
  const [text,setText] = useState(false);
  const [tags, setTags] = useState(null); 

useEffect(()=>{
  updates(text,text.id )
},[text])

  useEffect(()=>{
      setText(fullNotes)
      setTags(null)
  },[fullNotes])

return (
  <div className="notes_text">
  <div className="notes_text_container">
    {
    text?
    <div className="notes_text">
      <Header text={text} addText={el=>setText(el)} />   
      <TextNotes tags={tags} text={text} addText={el=>setText(el)} />
      <Tags text={text} addText={el=>setText(el)} searchTags={el=>setTags(el)} />
      <span className='notes_text_delete' onClick={()=>removePost(fullNotes.id)}> Удалить заметку</span>
    </div>
    :null
    }
  </div>
</div>
)
}

 