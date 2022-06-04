
export const AddNewPost = () =>{   
  return (
    <form className="notes_list_add">
        <label>
          Название:
          <input type="text" name="name" />
        </label>  
        <label>
          Текст заметки:
          <textarea name='text'/>
        </label>
        <label>
          Тэги:
          <input type="text" name="name" />
        </label>
        <input type='button' value='Сохранить'/>
    </form>
  );
}


