import {Header} from "./Header"
import {FaSlackHash} from 'react-icons/fa'

export const NotesListItems = ({notes, onClickOnText})=>
<ul className="notesList_items">
    <Header/>
        {Object.values(notes).map(e=>
          <li className="notesList_items_item">
              <h2>{e.title}</h2>    
              <p onClick={()=>onClickOnText(e)}>{e.text}</p>
              <ul className="notesList_items_item_tags">
                <FaSlackHash style={{fontSize:'25px'}}/>
                {
                  Object.values(e.tags).map(el=><li>{el}</li>)
                }
              </ul>
            </li>
        )}
</ul>