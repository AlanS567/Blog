import { TextField } from '@mui/material'
import React from 'react'

const Form = () => {
  return (
    <div style={{textAlign:'center',marginTop:"15%",marginLeft:"10%"}} >
      <TextField  label="Blog Name" variant="outlined" />&nbsp;
      <br /><br />
      <TextField  label="Description" variant="outlined" />&nbsp;
      <br /><br />
      <TextField  label="Author Name" variant="outlined" />&nbsp;
     
    </div>
  )
}

export default Form
