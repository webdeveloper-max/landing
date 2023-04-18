import React, { useState, useEffect } from "react";
import axios from "axios";
 import FormGroup from "@mui/material/FormGroup";
 import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import './App.css';
import woman from './images/woman.png';
import couple from './images/couple.png';
import {Box, FormLabel} from "@mui/material";
import man from './images/man.png';
import makeStyles, { IconButton } from "@mui/material";
import swal from 'sweetalert';
import { InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { FormHelperText } from '@mui/material';
import logo from "./images/logo.png"
import Header from "./Header";
import Footer from "./Footer";

function App() {

  
  const [stat, setStat] = useState('');
  const [ages, setAges] = useState('');
  const[location, setLocation]= useState('')
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
const[eye, setEye]=useState(false)
const handleEye=()=>{
  setEye(!eye);
}
const handleUsername = (e) => {
  setUsername(e.target.value)
}

const handlePassword = (e) => {
  setPassword(e.target.value)
}
const handleStatus = (e) => {
  setStat(e.target.value)
}

const handleAges = (e) => {
  setAges(e.target.value)
}


const handleLocation = (e) => {
  setLocation(e.target.value)
} 

 const handleApi = () => {
   console.log({ username, password,stat,ages, location})
       
  axios.post('https://iconnect247.net/api/v2/sessions', {
    username: username,
    password: password
    
  }).then(Data => {
    console.log(Data.data)
    alert('success')
  })
    .catch(error => {
      alert('service error')
      console.log(error)
    })

       
      }
  
  
  

  return (
   
    <div className="form1">
      
      <img src={woman} className="woman" alt='woman'></img> 
      <img src={man}className="man" alt='man'></img>
      
    <div className="form">
    <h3 className="title"> GET LOVELY CUTIES IN YOUR AREA! </h3>
      
      <Box sx={{ mx: '3'}}>
    <FormGroup>
      
      <div className="form-group">
      <div   >
    <label className="am">I am:
            <Select size="small" 
            onChange={handleStatus}
            native 
            
            SelectProps={{}}
            sx={{width:"100%", marginLeft:"35%",marginBottom:"-40%"}}
            >
           
          <option value={stat} disabled>
          
          </option>
          <option value="male">A man looking for a woman</option>
          <option value="female">A woman looking for a man</option>
          
        </Select>
        </label>
        </div>
        
            <br/>
            <div className="age"  >
    <label
    SelectProps={{}}
    sx={{   marginLeft:"5%",marginTop:""}} >My age:
      
            <Select size="small"  
             onChange={handleAges}native 
             
             SelectProps={{}}
            sx={{width:"100%",   marginLeft:"36%"}}
             >
          <option value={ages} disabled >
            select     your     age 
          </option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
          <option value="32">22</option>
          <option value="33">33</option>
          <option value="34">34</option>
        </Select>
        </label>
        </div>
            <div className="location"  >
              
    <label className="location">My location: 
            <Select 
            size="small" 
            color="secondary"
             onChange={handleLocation}
             native 
             defaultValue='none'
             fullWidth required
             SelectProps={{}}
            sx={{width:"100%",marginLeft:"35%",paddind:"2%",marginTop:"2%"}}
             
             >
          <option value={location} disabled>
            city/village/town/region
          </option>
          <option value="Wimbeldon">Wimbeldon</option>
          <option value="London">London</option>
          <option value="Greenwich">Greenwich</option>
          <option value="Dulwich">Dulwich</option>
          <option value="Barnes"> Barnes</option>
        </Select>
        
        </label>
        
        </div>
        <FormHelperText
        SelectProps={{}}
        sx={{width:"100%",marginLeft:"35%",paddind:"2%",marginTop:"2%"}}
         >E.g. New Roads or 70760 We don't use postal addresses to contact members directly!</FormHelperText>
<label>My email:
                <TextField  
                
                required
                 type="email" 
                 onChange={handleUsername} 
                 size="small"
                 label='email'
                  placeholder='email'
                  fullWidth 
                  value={username}
                  helperText={!username ?"Oops!There may be a mistake in your email address.Please Check.If you've already signed up in your site, please use the login form":"Success"}
                  error={!username }
                  SelectProps={{}}
            sx={{width:"100%",marginLeft:"34%"}}
                  />
                
                </label>
                <lable> My password:
                <TextField 
                 required
                  type={eye?"text":"password"}
                  value={password} 
                  onChange={handlePassword}
                  SelectProps={{}}
            sx={{width:"100%",marginLeft:"32%",borderColor:"",borderRadius: '50px'}}
                   size="small"
                   label='Password' placeholder='password'  fullWidth 
                   InputProps={{
                    endAdornment:(
                      <InputAdornment POSITION="end">
                        <IconButton onClick
                        ={handleEye}>
                          {eye ? <VisibilityIcon />:<VisibilityOffIcon/>}
                        </IconButton>

                      </InputAdornment>
                    )
                   }}
                />
                
                </lable>
               
                <button 
                  onClick={handleApi} 
                >Start</button>
            

    </div>
      </FormGroup>
      </Box>
    </div>
      <img src={couple}className="couple" alt="couple"></img> 
     
     
     <Footer/>
     <p> &#169;Cotyright2023, Kaleton Web s.r.o.</p>
    </div>
    
  
  );
  }

export default App;
