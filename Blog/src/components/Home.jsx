import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
    var [output,setOutput]=useState([])
    useEffect(()=>{
    // axios.get("url").then().catch()
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
     console.log(res);
     setOutput(res.data)
     

  }).catch((e)=>{
    console.log(e);
  })
 },[]);
  return (
    
   

    
    <div>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>id</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Body</TableCell>
                </TableRow>
            </TableHead>
        
        <TableBody>
            {output.map((val,i)=>{
                return(
            <TableRow key={i}>
                <TableCell>{val.id}</TableCell>
                <TableCell>{val.title}</TableCell>
                <TableCell>{val.body}</TableCell>
            </TableRow>)
        })}
            </TableBody></Table>
      </TableContainer>
    </div>
  )
}

export default Home
