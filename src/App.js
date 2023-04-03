import React, {useState} from 'react';
import TodoList from './components/TodoList';
import './styles/style.css'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

function App() {

const [lists, setList] = useState([
  {id: 1, title: 'Shop', body: 'Go to shop1'},
  {id: 2, title: 'Shop', body: 'Go to shop2'},
  {id: 3, title: 'Shop', body: 'Go to shop3'},
])

const [title, setTitle] = useState('');
const [body, setBody] = useState('');


function addNewList(e){
  e.preventDefault()
const newList={
  id: Date.now(),
  title,
  body
}
setList([...lists, newList])
setTitle('')
setBody('')

}


  return (
    <div className="App">
      <form>
        <MyInput 
        placeholder='name'
        value={title}
        onChange={e => setTitle(e.target.value)}
        ></MyInput>
        <MyInput 
        placeholder='description'
        value={body}
        onChange={e => setBody(e.target.value)}
        ></MyInput>
        <MyButton onClick={addNewList}>Create</MyButton>
      </form>

    <TodoList lists={lists} title='Todo List'/>
    </div>
  );
}


export default App;