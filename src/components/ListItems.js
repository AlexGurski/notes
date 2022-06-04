import {Header} from "./notesList/Header"
import {FaSlackHash} from 'react-icons/fa'

export const NotesListItems = ({notes, onClickOnText})=>
<div className="notes_list">
  <ul className="notes_list_items">
      <Header/>   
          {Object.values(notes).map(e=>
            <li className="notes_list_items_item"  onClick={()=>onClickOnText(e)}>
                <h2>{e.title}</h2>    
                <p>{e.text}</p>                
                <ul >  
                <FaSlackHash style={{fontSize:'25px'}}/>                
                    {Object.values(e.tags).map(el=><li>{el}</li>)}
                </ul>
              </li>
          )}
  </ul>
</div>