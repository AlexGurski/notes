import { useEffect, useRef, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import {AiOutlineEdit, AiOutlineCheckSquare, AiOutlineCloseSquare} from 'react-icons/ai'

const onSearch = (text, tag) =>{
  return text.split(" ").map((e) => (e===tag) || (e===tag+',') || (e===tag+'.') ?<b >{e} </b>:e+" ")
}

const showTextonEdit = (text, tag) =>{
  return text.split(" ").map(word=>tag.includes(word)?"#"+word+" ":word+" ").join("")
}

export const TextNotes = ({tags, text, addText}) =>{
  const divText = useRef("")
  const refTextArea = useRef("")
  const [textToEdit, setTextToEdit] = useState("")
  const [display, setDisplay] = useState(false)  
  const [textAreaText, setTextAreaText] = useState("")

  useEffect(()=>{
    setDisplay(false)
    setTextToEdit(text.text)
    setTextAreaText(showTextonEdit(text.text, text.tags))
  },[text])

  useEffect(()=>{
    if(display){
      refTextArea.current.classList.add("edits-style")
    }
      else{
        refTextArea.current.classList.remove("edits-style")        
      }
  },[display])

  return (
    <>
      <div  className='notes_text_output' style={{display:!display?"block":"none"}} ref={divText} >
                {
                text?textToEdit.split("\n").map(e=><p>{onSearch(e, tags)}</p>):null  
                }
      </div>
      <TextareaAutosize className='notes_text_area' style={{display:display?"block":"none"}} ref={refTextArea}
      value={textAreaText}  name="textarea" 
      onChange={(e)=>setTextAreaText(e.target.value)}>
      </TextareaAutosize>
      <div className='notes_text_edit'>
        <AiOutlineEdit style={{display:display?"none":"block"}} onClick={()=>setDisplay(!display)}/>  
        <span >
            <AiOutlineCheckSquare style={{display:display?"block":"none"}} 
              onClick={()=>{
                setDisplay(!display); 
                setTextToEdit(textAreaText.replace(/#/g, ''));
                addText({...text, text:textAreaText.replace(/#/g, '')});
              }}/>
            <AiOutlineCloseSquare style={{display:display?"block":"none"}} 
              onClick={()=>{setDisplay(!display)}}/>
        </span>
      </div>
     
    </>
  )
}
