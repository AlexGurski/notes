import { useEffect, useRef, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import {AiOutlineEdit, AiOutlineCheckSquare, AiOutlineCloseSquare} from 'react-icons/ai'

const onSearch = (text, tags) =>{
  return text.split(" ").map((e) => e.includes(tags)?<span style={{fontWeight:900}}>{e} </span>:e+" ")
}

export const TextNotes = ({tags, text, addText}) =>{
  const divText = useRef("")
  const [textToEdit, setTextToEdit] = useState("")
  const [display, setDisplay] = useState(false)
  useEffect(()=>{
    setDisplay(false)
    setTextToEdit(text.text)
  },[text])
  
  return (
    <>
      <div  className='notes_text_div' style={{display:display?"none":"block"}}
            contentEditable="false"suppressContentEditableWarning={true} ref={divText} 
            onKeyDown={()=>{
              divText.current.textContent=divText.current.textContent
            }}>
                {
                text?textToEdit.split("\n").map(e=><p>{onSearch(e, tags)}</p>):null
                }
      </div>
      <TextareaAutosize className='notes_text_area' style={{display:display?"block":"none"}} value={textToEdit}  name="textarea" onChange={(e)=>setTextToEdit(e.target.value)}></TextareaAutosize>
      <AiOutlineEdit style={{display:display?"none":"block"}} onClick={()=>setDisplay(!display)}/>  
      <AiOutlineCheckSquare style={{display:display?"block":"none"}} onClick={()=>{setDisplay(!display);  addText({...text, text:textToEdit});}}/>
      <AiOutlineCloseSquare style={{display:display?"block":"none"}} onClick={()=>{setDisplay(!display); setTextToEdit(text.text)}}/>
    </>
  )
}
