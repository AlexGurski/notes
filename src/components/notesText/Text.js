import { useEffect, useRef, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import {AiOutlineEdit, AiOutlineCheckSquare, AiOutlineCloseSquare} from 'react-icons/ai'

const onSearch = (text, tag) =>{
  return text.split(" ").map((e) => (e===tag) || (e===tag+',') || (e===tag+'.') ?<b >{e} </b>:e+" ")
}

const showTextonEdit = (text, tag) =>{
  return text.split(" ").map(word=>tag.includes(word)?<b >{word} </b>:word+" ")
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
      <span  className='notes_text_div'
            contentEditable={display} suppressContentEditableWarning={true} ref={divText} 
            onKeyDown={(e)=>{
              if (e.key==="Enter"){
              }
            }}>
                {
                text?display?showTextonEdit(textToEdit, text.tags):onSearch(textToEdit, tags):null   
                }
      </span>
      <AiOutlineEdit style={{display:display?"none":"block"}} onClick={()=>setDisplay(!display)}/>  
      <AiOutlineCheckSquare style={{display:display?"block":"none"}} onClick={()=>{setDisplay(!display); setTextToEdit(divText.current.textContent); addText({...text, text:divText.current.textContent});}}/>
      <AiOutlineCloseSquare style={{display:display?"block":"none"}} onClick={()=>{setDisplay(!display); setTextToEdit(text.text)}}/>
    </>
  )
}
