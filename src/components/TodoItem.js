import React, {useState} from 'react';

const TodoItem = (props) => {

const [done, setDone] = useState('do')

    return (
        <div className="todo">
        <div className="todo_container">
          <strong className='todo_item'>{props.number}. {props.list.title}</strong>
          <div className='todo_description'>
          {props.list.body}
          </div>
        </div>
          <div className="todo_btn">
          <button onClick={()=>setDone('done')} className='done_btn' type="checkbox">{done}</button>
          </div >
      </div>
    );
};

export default TodoItem;