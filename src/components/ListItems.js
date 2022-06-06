import {Header} from "./notesList/Header"
import { AddNewPost } from "./notesList/AddPost"
import { BodyOfListNotes } from "./notesList/BodyList"
import { useState } from "react"

export const NotesListItems = ({notes, onClickOnText, filterTags, updateServer})=>{

  const [visibleAddForm,setVisibleAddForm] = useState(false);

  return (  
  <div className="notes_list">
  <ul className="notes_list_items">
      <Header filterTags={e=>filterTags(e)} clickVisibleAddForm={()=>setVisibleAddForm(!visibleAddForm)}/>   
      <AddNewPost clickVisibleAddForm={()=>setVisibleAddForm(!visibleAddForm)} visible={visibleAddForm} updateServer={()=>updateServer()}/>
      <BodyOfListNotes notes={notes} onClickOnText={e=>{onClickOnText(e)}}/>
  </ul>
</div>)

}
