import React, { useEffect, useState } from 'react';
import list from './components/list';

function App() {

  const [user,setUser]= useState([]);
  const [inputValue, setInputValue] = useState('');
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  async function onclickHandle(event) {
    try {
      const response = await fetch('http://localhost:3001/api/post',{
        method: 'post',
        headers: {
          "Content-Type": "application/json",
        } ,       
        body: JSON.stringify({
          name: inputValue,
          age: 10
        })
      });
    const a =  await response.json()
    setUser([...user,a])
    } catch (error) {
      alert('error')
      
    }
  }
  console.log(inputValue)
 useEffect(()=> {
  const fecthData= async ()=> {
    // setLoading(true)
    try {
      const response = await fetch('http://localhost:3001/api/getAll');
    const a =  await response.json()
    setUser(a)
    } catch (error) {
      alert('error')
      
    }
    // setLoading(false)

  }
fecthData()
  
  
 },[setUser]) 
 
  return (
    <main>
      <h1 className='title'>Crud Operation</h1>

      <div className='input_holder'>
        <input 
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
     
        <button type='button' onClick={onclickHandle}> Task</button>
      </div>

      <ul>
        {user?.map((item)=> <li>{item.name}</li>)}
      </ul>
    </main>
  )
}

export default App;
