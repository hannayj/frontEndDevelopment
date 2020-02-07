import React from 'react';

export default function Todolist(props) {
    return(
        <div>
            <form onSubmit={props.handleClick}>
                Date: 
                <input type="date" name="date" value={props.todo.date} onChange={props.handleChange}/>
                Description: 
                <input type="text" name="desc" value={props.todo.desc} onChange={props.handleChange}/>
                <input type="submit" value="Add" />
            </form>
        </div>
    );
}