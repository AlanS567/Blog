import { Button, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Form = () => {
  return (
    <div style={{textAlign:'center',marginTop:"15%",marginLeft:"10%"}} >
      <TextField  label="Blog Name" variant="outlined" />&nbsp;
      <br /><br />
      <TextField  label="Description" variant="outlined" />&nbsp;
      <br /><br />
      <TextField  label="Author Name" variant="outlined" />&nbsp;
      <br /><br />
      <Button><Link to={"/h"}>Submit</Link></Button>
    </div>
  )
}

export default Form
