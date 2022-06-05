import {FiEdit} from "react-icons/fi";

export const Header = ({filterTags,clickVisibleAddForm}) =>{   

  return (
    <header>
      <div className="header_content">
        <input type="text" placeholder="Поиск по #тегу" onKeyUp={e=>{
          filterTags(e.target.value)
        }}/>
        <span onClick={()=>clickVisibleAddForm()}><FiEdit/></span>
      </div>
    </header>
  );
}


