import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editInput, setEditInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, { text: input, completed: false }]);
      setInput('');
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditInput(todos[index].text);
  };

  const handleEditSave = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = editInput;
    setTodos(updatedTodos);
    setEditIndex(null);
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleCheckboxChange = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div className="container mx-auto px-4" style={{ maxWidth: '800px' }}>
      <div className="h-screen flex items-center justify-center">
        <div className="bg-red-800 p-4 rounded-lg w-full">
          <h1 className="text-2xl text-white mb-5">Todo App</h1>
          <div className='flex items-center'>
            <input 
              type='text'
              placeholder='Enter a todo....'
              className="flex-1 px-3 py-2 border rounded mr-2"
              value={input}
              onChange={handleInputChange}
            />
            <button 
              className='bg-blue-500 text-white p-2 rounded-md m-2 cursor-pointer hover:bg-blue-700'
              onClick={addTodo}
            >
              Add Todo
            </button>
          </div>
          <div className='flex flex-col'>
            {todos.map((todo, index) => (
              <div key={index} className='flex items-center justify-between p-2 m-2 border rounded bg-gray-100'>
                <div className="flex items-center">
                  <input 
                    type="checkbox"
                    className="mr-2 form-checkbox h-5 w-5 text-red-600"
                    checked={todo.completed}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  {editIndex === index ? (
                    <input
                      type="text"
                      value={editInput}
                      onChange={(e) => setEditInput(e.target.value)}
                      onBlur={() => handleEditSave(index)}
                      autoFocus
                    />
                  ) : (
                    <h4 className={`text-xl ${todo.completed ? 'line-through' : ''}`}>{todo.text}</h4>
                  )}
                </div>
                <div>
                  <button 
                    className='bg-green-500 text-white p-2 rounded-md m-2 cursor-pointer hover:bg-green-700' 
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button 
                    className='bg-red-500 text-white p-2 rounded-md m-2 cursor-pointer hover:bg-red-700' 
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

