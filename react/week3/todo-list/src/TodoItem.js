import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

function TodoItem(props){
    const {description, id, deadline, deleteTodo, todoItemClicked, setIsEditing, isEditing } = props;
    const { isChecked } = props;
    const { rewriteDescription } = props;

    const todoItemChecked = event => {
        todoItemClicked(id, event.target.checked);
    };

    const changeEditingStatus = () => {
        setIsEditing(id);
    };

    const updateDescription = event => {
        rewriteDescription(id, event)
    };

    return(  
        <>
            {isEditing ? ( 
                    <li className='todo-item-container'>
                        <input type="text" onChange={updateDescription} value={description} />  
                        <input type="button" className="list-item-button" value="Update" onClick={changeEditingStatus} /> 
                        <button className="list-item-button" onClick={() => deleteTodo(id)}>Delete!</button>
                        <label>Check</label>
                        <input type="checkbox" id="check" checked={isChecked} onChange={todoItemChecked}/>
                    </li>
                    ) : (
                    <li className='todo-item-container'>
                        <h4 className={isChecked ? 'checked' : ''} > {description} / {deadline.toString()} </h4> 
                        <input type="button" className="list-item-button" value="Edit" onClick={changeEditingStatus} />
                        <button className="list-item-button" onClick={() => deleteTodo(id)}>Delete!</button>   
                        <label>Check</label>
                        <input type="checkbox" id="check" checked={isChecked} onChange={todoItemChecked}/>
                    </li>
                    )
            }
        </>      
    )
}

export default TodoItem;

TodoItem.propTypes = {
    isEditing: PropTypes.bool,
    description: PropTypes.string.isRequired,
    updateDescription: PropTypes.func,
    changeEditingStatus: PropTypes.func,
    isChecked: PropTypes.bool,
    todoItemChecked: PropTypes.func,
    id:  PropTypes.oneOfType([
            PropTypes.instanceOf(Date),
            PropTypes.number
    ]),
    deadline: PropTypes.oneOfType([
            PropTypes.instanceOf(Date),
            PropTypes.string
    ])
};
