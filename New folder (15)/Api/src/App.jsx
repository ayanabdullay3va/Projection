import {  useEffect, useState } from 'react'
import axios from "axios"
import Categories from './components/Categories'
import { ChakraProvider } from '@chakra-ui/react'
import './App.css'

function App() {
  const [data, setData]=useState([])
  const [name, setName]=useState("")




useEffect(()=>{
  axios("https://6554d87163cafc694fe716fa.mockapi.io/products").then((res) => {
    
   setData(res.data);
  });
}, []);

  return (
    <ChakraProvider>
    <h1>List</h1>
    <Categories
    data={data}
    name={name}
    />
    </ChakraProvider>
    
  )
  
}

export default App
