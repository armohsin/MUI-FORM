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


function App() {

  

  return (
    <>
     <CssBaseline />
      <Container style={{padding:20}} >
        
      <TextField   id="outlined-basic" label="Student Name" variant="outlined"   />
      <TextField  id="filled-basic" label="Father Name" variant="outlined"  style={{ marginLeft:20}} />
       
      <Autocomplete
      
      disablePortal
      id="combo-box-demo"
      style={{marginTop:20}}
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Nationality" />}
    />
      
    <div style={{ display: 'flex'}}>

    <Autocomplete
      disablePortal
      id="combo-box-demo"
      style={{marginTop:20}}
      options={cities}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="City" />}

    />
     <TextField type="text" style={{marginTop:20, marginLeft:20}}  id="outlined-basic" label="Domicile" variant="outlined"   />
    <TextField   type="number" style={{marginTop:20, marginLeft:20}} id="outlined-basic" label="CNIC" variant="outlined"   />
    </div>
  < div style={{marginTop:20}}>
    <FormLabel  id="demo-controlled-radio-buttons-group">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
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

    <TextField type="number" style={{marginTop:20, marginLeft:20,width:150}}  id="outlined-basic" label="Marks" variant="outlined"   />
    <TextField type="number" style={{marginTop:20, marginLeft:20,width:150}} id="outlined-basic" label="Percentage (%)" variant="outlined"   />


    </div>
    <Button style={{marginTop:20}} variant="contained">Submit</Button>

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
  { label: "India" },
  {  label: 'Pakistan' }];

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
