import './Header.css';
// import axios from 'axios';
import {   Link , useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { connectWallet, getAccount } from './utils/wallet';
import { frontend } from './utils/frontend';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonIcon from '@mui/icons-material/Person';

function Header(){
    const navigate = useNavigate();
    const [account,setAccount] = useState("");
    const [profile,setProfile] = useState("");
    useEffect(()=>{
        (async()=>{
            const account2 = await getAccount();
            setAccount(account2);
            
            const availability = await frontend(account2);
        setProfile(availability)
            
            
        })();
        
    },[])
   const onConnect = async ()=>{
    await connectWallet();
    (async()=>{
            const account2 = await getAccount();
            setAccount(account2);
            const availability = await frontend(account2);
        setProfile(availability)
           
        })();
   };
//    const fetchProfile = ()=>{
//     if(profile==""){
//         window.alert("Add Profile First");
//     }
//     else{
//         window.alert("Profile Available")
//     }
//    }
   const profileRouting=()=>{
    

    if(profile==""){
        console.log(profile)
       
            navigate("/profileform");
       
    }
    else{
        console.log(profile)
       
            navigate("/profile");
    }
   }
   
    return(
        
        <div className="header">
        
            <div className="logo"><Link to="/"><img src="https://st.depositphotos.com/1265046/1328/i/600/depositphotos_13281915-stock-photo-human-brain-in-x-ray.jpg" alt="Logo"/><p>CONFERO - An aid for need</p></Link></div>            
            <div className="browse"><Link to="/browse"> Browse Fund Raisers</Link></div>
            <div className="how"><Link to="/how">How it works ?</Link></div>
            <div className="start"><Link to="/how">Start a Fundraiser</Link></div>
            <div className="icon"  onClick={profileRouting}><a> { (profile=== "") ? <PersonAddIcon/>  : <PersonIcon/> } </a></div>

            <div className="sign" onClick={onConnect}><a> { (account=== "") ?"Connect Wallet"  : account  } </a></div>
        </div>
    )
}
export default Header;