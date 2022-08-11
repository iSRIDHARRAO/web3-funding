import React from 'react';
import {useNavigate} from 'react-router-dom';
import './ProfileForm.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { getAccount } from './utils/wallet';

 
 const ProfileForm= () => {
   const navigate = useNavigate();
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [mobile,setMobile] = useState("");
   const [address,setAddress] = useState("");
   const [id,setId] = useState("");

   useEffect(()=>{
      (async()=>{
          const i = await getAccount();
          setId(i)
          
          
      })();
      
  },[])
   
   let submitdetails = async (e) => {
      
      e.preventDefault();
      
      axios({
         method: 'post',
         url: 'http://localhost:3001/userdetails',
         data: {
           "name":name,
           "id":id,
           "email":email,
           "mobile":mobile,
           "address":address,
         }
       }).then(function (response) {
            if(response.data==="Success"){
               navigate("/success");
            }
            else{
               navigate("/failure")
            }
          })
          .catch(function (error) {
            console.log(error);
          });
       
          
            
        
            
               
        
                        
   }
   
  return(

   <div className='profile-form'>
     <div className='form'>
        <div className='heading-form'><span className='border'>&nbsp;&nbsp;&nbsp;&nbsp;CREATE PROFILE&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
        <div className='input-fields'>

           <form onSubmit={submitdetails}>
           <div ><label className="one-one-one-one" htmlFor="fname">Full Name :</label><br/>
          <input type="text" id="fname"  onChange={(e) => setName(e.target.value)} placeholder='Your name goes here...'/><br/></div>
  
          <div ><label className="one-one-one-two" htmlFor="mail">Mail Id :</label><br/>
          <input type="text" id="mail" onChange={(e) => setEmail(e.target.value)} placeholder='abcedfg@mail.com' name="mail"/><br/></div>

          <div ><label className="one-one-one-three" htmlFor="mobile">Mobile Number :</label><br/>
          <input type="text" id="mobile" onChange={(e) => setMobile(e.target.value)} placeholder='+91-987654321' name="mobile"/><br/></div>
          
          <div ><label className="one-one-one-four" htmlFor="address">Address :</label><br/>
          <textarea type="text" id="address" onChange={(e) => setAddress(e.target.value)} placeholder='Address...' name="address"/><br/></div>
          <div className='submit-button'>
            <button className="button" type="submit" >Submit</button>
          </div>
          </form>
        
       
        </div>
       </div>
    </div>
  );
}
export default ProfileForm;