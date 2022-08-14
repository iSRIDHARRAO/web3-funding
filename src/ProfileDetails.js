import React from "react";
import { useState , useEffect } from 'react';
import axios from "axios";
import { getAccount } from "./utils/wallet";
import './ProfileDetails.css';
import { withdraw } from "./utils/operation";


function ProfileDetails() {
    //all the hooks for the data
    const [status, setStatus] = useState(0);
    const [profileinfo, setprofileinfo] = useState([]);
    const [account2,setAccount2] = useState("");
    //note status 0: means loading data, status 1: means data found, status 2: means data not found
    useEffect(() => {
        
      async function fetchData() {
        try {
            const account3 = await getAccount();
            setAccount2(account3);
          setStatus(0);
          var url="http://localhost:3001/profiledetails/"
          url = url.concat(account3)
          console.log(url)
          const res = await axios.get(url)
                // const displayData = data.filter((value) => value.title === );
                const abc = res.data
                // abc.map((getcate) => (
                //   console.log("this is name",getcate.name),
                //   console.log("this is id",getcate.id),
                //   console.log("This is email",getcate.email),
                //   console.log("This is mobile number",getcate.mblno),
                //   console.log("This is address",getcate.address)
                  
                // ))
                console.log(typeof(abc))
                setprofileinfo(abc)   
    
                console.log(abc)    
        setStatus(1);
  
    }
  
        catch {
          setStatus(2);
        }
        // here use the comparator to get the specific package id
      }
      fetchData();
      (async()=>{

        const account3 = await getAccount();

        setAccount2(account3);  })();
    }, []);
  //end of hook
//withdraw
const withdrawmoney = async() => {
    try {
        await withdraw();
        alert("Transaction succesful!");
      } catch (err) {
        alert(err.message);
      }

    }
    return (
        
    <div className='Profile-details'>
  
         
        {status === 0 ? <p>"Loading data"</p> : null}
         {status === 1 && 'information' && profileinfo.map((value)=>(
           <div className="profile-block">
           <div className="profile-heading">Profile details</div>
      
           <div className="profile-name">Id : {value.name}</div>
              <div className="profile-name">Id : {value.id}</div>
              <div className="profile-name">Email : {value.email}</div>
              <div className="profile-name">Mobile No : {value.mblno} </div>
              <div className="profile-name">Address : {value.address}</div>
              <button class="withdraw" onClick={withdrawmoney}>Withdraw</button>
          
      
           </div>
      
         ))}
        {status === 2 ? <p className='NoInformation'>No Profile details</p> : null} 
         
     

     


    </div>
      
    )
  }
  
  export default ProfileDetails;