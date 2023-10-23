import React from 'react'
import Resusable from './resusable'
import './App.css';

const App = () => {
  const data =  [
    {id:1,Name : 'Abhinand' ,Email : 'abhinandntk123@gmail.com'},
                ]
  const data1 = [
                {id:2 , Name : 'jhon' ,Email : 'jhon@gmail.com'}
                ]
  return (
    <div >
      <Resusable data={data}/>
      <Resusable data={data1}/>
      
    </div>
  )
}

export default App
