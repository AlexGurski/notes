
import {FiEdit} from "react-icons/fi";
export const Header = () =>{   
  return (
    <header>
      <div className="header_content">
        <input type="text" placeholder="Поиск по #тегу"/>
        <span><FiEdit/></span>
      </div>
    </header>
  );
}


