import {Header} from "./notesList/Header"
import { AddNewPost } from "./notesList/AddPost"
import { BodyOfListNotes } from "./notesList/BodyList"

export const NotesListItems = ({notes, onClickOnText, create})=>{

  const filterTags = (tag)=>{
    return notes.filter(e=>e.tags.includes(tag))
  }

  return (  
  <div className="notes_list">
  <ul className="notes_list_items">
      <Header filterTags={e=>filterTags(e)}/>   
      <AddNewPost create={create}/>
      <BodyOfListNotes notes={notes} onClickOnText={e=>{onClickOnText(e)}}/>
  </ul>
</div>)

}
