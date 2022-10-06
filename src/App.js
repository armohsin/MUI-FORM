import logo from './logo.svg';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { Checkbox, MenuItem, Stack} from '@mui/material';
import {useState} from "react";
function App() {
  const [message, setMessage] = useState('');
  const [message2, setMessage2] = useState('');
  const [ischecked, setIschecked] = useState(false);
  const [isfield,setfield]=useState(true)

  const handleChange = event => {
    const result = event.target.value.replace(/[^a-z]/gi, '');
    setMessage(result);
  };

  const handleChange2 = event => {
    const result2 = event.target.value.replace(/[^a-z]/gi, '');
    setMessage2(result2);
  };
  const handleChange3 = event => {
    if (event.target.checked) {
      setfield(false)
    } else {
      console.log("unchecked")
    }
  };
  return (
    <>
     <CssBaseline />
     <Container style={{padding:20}} >
     <Box sx={{ bgcolor: '#cfe8fc', height: '800px', padding:'20px',borderRadius:'10px' }} >
        <center>
        <h2>University Form</h2>
        </center>
        <Stack direction="row" spacing={2} >
      <TextField  id="outlined-basic" label="Student Name" variant="outlined"   required
      type="text"
        value={message}
        onChange={handleChange}
      />
      <TextField  id="filled-basic" label="Father Name" variant="outlined" required
      type="text"
      value={message2}
      onChange={handleChange2} />
      </Stack>
      <div style={{ display: 'flex'}}>

      <FormControlLabel   control={<Checkbox defaultChecked />} label="Are you Pakistani"
      type="checkbox"
      value={ischecked}
      onChange={handleChange3}
      id="subscribe"
      name="subscribe" />

      {/* <label htmlFor="subscribe">

        <input
          type="checkbox"
          value={ischecked}
          onChange={handleChange3}
          id="subscribe"
          name="subscribe"
        />
        Subscribe
      </label> */}
      <Autocomplete
      
      disablePortal
      id="combo-box-demo"
      style={{marginTop:20}}
      options={top100Films}
      sx={{ width: 300 }}
      
      renderInput={(params) => <TextField {...params} label="Nationality" /> }
    />
      </div>
    <div style={{ display: 'flex'}}>

    <Autocomplete
      disablePortal
      id="combo-box-demo"
      style={{marginTop:20}}
      options={cities}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="City" />}
      disabled={isfield}
    />
     <TextField type={"text"} style={{marginTop:20, marginLeft:20}}  id="outlined-basic" label="Domicile" variant="outlined"  disabled={isfield}  />
    <TextField  disabled={isfield} type="number" style={{marginTop:20, marginLeft:20}} id="outlined-basic" label="CNIC" variant="outlined"  helperText="Enter your 13 digit CNIC number" 
     onInput = {(e) =>{
      e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,13)
  }} />
    </div>
  < div style={{marginTop:20}}>
    <FormLabel  id="demo-controlled-radio-buttons-group">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" style={{width:'100px'}} />
        <FormControlLabel value="male" control={<Radio />} label="Male" style={{width:'100px'}} />
      </RadioGroup>
      </div >

      <div style={{ display: 'flex'}}>
     

      <Autocomplete
      
      disablePortal
      id="combo-box-demo"
      style={{marginTop:20, marginRight:20}}
      options={campus}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Select your campus" />}
    />
    
<Autocomplete
      
      disablePortal
      id="combo-box-demo"
      style={{marginTop:20}}
      options={course}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Select your course" />}
    />
    
    </div>

    <h3>Educational Background</h3>
    <p>According to your FSC fill in the Field below.</p>

    <div style={{ display: 'flex'}}>

    <Autocomplete
      
      disablePortal
      id="combo-box-demo"
      style={{marginTop:20}}
      options={fscs}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Select your FSC course" />}
    />   

    <TextField type="number" style={{marginTop:20, marginLeft:20,width:150}}  id="outlined-basic" label="Marks" variant="outlined"  
       
   />
    <TextField type="number" style={{marginTop:20, marginLeft:20,width:150}} id="outlined-basic" label="Percentage (%)" variant="outlined"   />


    </div>
    <Button style={{marginTop:20}} type={"submit"} variant="contained">Submit</Button>
    
      </Box>
      </Container>

    </>
  );
}

const top100Films = [
  { label: 'Afghanistan' },
  { label: 'Algeria' },
  { label: 'Australia' },
  { label: 'Bahrain' },
  { label: 'England' },
  { label: "India" }];

  const cities = [
    { label: 'Abottabad' },
    { label: 'Bahawalpur' },
    { label: 'Dera Ismail Khan' },
    { label: 'Faislabad' },
    { label: 'Gujrawala' },
    { label: "Lahore" },
    {  label: 'Multan' }];

    const campus = [
      { label: 'Abottabad' },
      { label: 'Lahore' },
      { label: 'Karachi' },
      { label: 'Peshawer' },
      ];

      const course = [
        { label: 'Computer Science' },
        { label: 'Mathematics' },
        { label: 'Software Engineering' },
        { label: 'Pharmacy' },
        ];

        const fscs = [
          { label: 'I.C.S' },
          { label: 'Pre Eng' },
          { label: 'Pre Med' },
          { label: 'Economics' },
          { label: 'Arts' }
          ];
  
export default App;
