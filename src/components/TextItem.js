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
      <Tags text={text} addText={el=>setText(el)} addTags={el=>setTags(el)} />
      <input type="button" value="Удалить заметку" onClick={()=>removePost(fullNotes.id)}/>
    </div>
    :null
    }
  </div>
</div>
)
}

 