import React from 'react';
import TodoItem from './TodoItem';


const TodoList = ({lists, title}) => {
    return (
        <div>
            <h1>{title}</h1>
            {lists.map((list, index)=>
                 <TodoItem number={index + 1} list={list} key={list.id}/>
            )}
        </div>
    );
};


export default TodoList;