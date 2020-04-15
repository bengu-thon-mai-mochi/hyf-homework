import React from 'react';
import './TodoItem.css';

function TodoItem(props){
    const {description, id, deleteTodo, todoItemClicked} = props;
    const { isChecked } = props;

    const todoItemChecked = event => {
        todoItemClicked(id, event.target.checked);
    }
    
    return(  
            <li className='todo-item-container'>
                <h4 className={isChecked ? 'checked' : ''} >{description}</h4>   
                <button onClick={() => deleteTodo(id)}> Delete </button>
                <input type="button" value="Edit Description" />
                <label>Check</label>
                <input type="checkbox" id="check" checked={isChecked} onChange={todoItemChecked}/>
            </li>
    )
}

export default TodoItem;