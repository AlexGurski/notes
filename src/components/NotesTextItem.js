import { useEffect, useRef, useState } from 'react'
import { Tags } from './notesText/Tags'
import { Header } from './notesText/Header'

export const NotesTextItem = ({fullNotes, updates})=>{
  const divText = useRef("")

  const [text,setText] = useState(false);
  const [tags, setTags] = useState(null);


  const onSearch = (text, tags) =>{
    return text.split(" ").map((e) => e.includes(tags)?<span style={{fontWeight:900}}>{e} </span>:e+" ")
  }
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
      <Header text={text} addText={el=>setText(el)}/>
      <div  className='notes_text_div' 
          contentEditable="false"suppressContentEditableWarning={true} ref={divText} 
          onKeyDown={()=>{
            divText.current.textContent=divText.current.textContent
          }}>
              {
              text?text.text.split("\n").map(e=><p>{onSearch(e, tags)}</p>):null
              }
      </div>
     <Tags text={text} addText={el=>setText(el)} addTags={el=>setTags(el)}/>
    </div>
    :null
    }
  </div>
</div>
)
}

 