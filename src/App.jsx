import React, { useEffect, useState } from 'react'
import UserContainer from './components/UserContainer';
import { createContext } from 'react';
import "./style/App.css"
export const userContext = createContext(0);

const App = () => {
  const [user,setUser] = useState([]);

  useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => setUser(data))
  },[])
  
  useEffect(() => {
    document.title = "Use Context"  
  }, []);

  return (
    <div>
    <userContext.Provider value = {user}>
    <UserContainer />
    </userContext.Provider>
    </div>
  )
}

export default App