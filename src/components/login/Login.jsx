import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './login.css'
import { useState } from 'react';
import { observer } from "mobx-react";
import {CheckLogin} from "../../server/server"

const Login=(observer(()=> {
const [name, setName]=useState('');
const [pass, setPass]=useState('');

 const handleSetName=(e)=>{
setName(e.target.value);
  };
 const handleSetPassword=(e)=>{
setPass(e.target.value)
  };
  // const handleLogin = () => {
  //   if () {
  //     setName('');
  //     setPass('');
  //     console.log('uf');
  //   }
  //   else{
  //     console.log('hello');
  //   }
  // };
  
  
  return (
    <>
<div>
<TextField
        
          id="filled-disabled"
          label="הכנס שם"
          color="success"
          position="end"
          variant="filled"
          value={name}
          onChange={handleSetName}

        />
        <br/> <br/>
        <TextField
          id="filled-password-input"
          label="הכנס סיסמה"
          type="password"
          color="warning"
          autoComplete="current-password"
          variant="filled"
          value={pass}
          onChange={handleSetPassword}
        />
        <br/> <br/>
        
        <Button onClick={() => {
    CheckLogin(name, pass);
   
}}>to login</Button>
</div>
      </>
  )
}
))
export default Login
