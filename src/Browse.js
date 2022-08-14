import React from 'react';
import { useEffect, useState } from 'react';
import './Browse.css';
import axios from 'axios';
import { donor } from './utils/operation';




 function Browse() {
  //all the hooks for the data
  const [status, setStatus] = useState(0);
  const [information, setInformation] = useState([]);
  const [DonAddress,setDonAddress] = useState("0");
  const [DonAmount,setDonAmount] = useState("0");

  //note status 0: means loading data, status 1: means data found, status 2: means data not found
  useEffect(() => {
    async function fetchData() {
      try {
        setStatus(0);
        
        const res = await axios.get("http://localhost:3001/")
              // const displayData = data.filter((value) => value.title === );

              const abc = res.data
              abc.map((getcate) => (
                console.log("this is name",getcate.name)
                
              ))
              setInformation(abc)

              
      setStatus(1);


  }


        
      catch {
        setStatus(2);
      }
      // here use the comparator to get the specific package id
    }
    fetchData();
  }, []);

  const donatefunction = async() => {
    try {
        await donor(DonAddress,parseInt(DonAmount));
        alert("Transaction succesful!");
      } catch (err) {
        alert(err.message);
      }

    }



  return (
    <div className='browsing'>

        
      {status === 0 ? <p>"Loading data"</p> : null}
      {status === 1 && information &&  information.map((details,index) => (


        <div className='browsing-block'>
        <div className='browse-title' >{details.title}</div>
        <div className='browse-details'>
            <div className="browse-image" ><img className='image-image' src={details.image_url} alt='Brain'/></div>
            <div className='browse-story'  >{details.matter}</div>
        </div>
        <div className='browse-address'  >Fund Raiser wallet : <span className="address-style">{details.id}</span></div>
        <div className='funds-needed' >Funds needed ( in TEZ ) : <span className="address-style">{details.amount_needed}</span></div>
        <div className='funds-raised' >Funds raised ( in TEZ ) : <span className="address-style">{details.amount_raised}</span></div>
        <div className='funds-need-to-be-raised' >Funds need to be raised ( in TEZ ) : <span className="address-style">{details.amount_need_to_be_raised}</span></div>

        
            {/* <div className='browse-buttons'>
            <div className='browse-donate-title'>Enter amount and click below to donate</div>
                <input  className="counter-input" onChange={(e) => setDonAmount(e.target.value)}type='number' min="1" ></input>
                
            
            </div>
            
            <div className='donate-button'>
                <button className='donate-button-original'>Donate</button>
            </div> */}
        
        </div>
               


              ))}
      {status === 2 ? <p className='NoInformation'>No FundRaisers Till Now</p> : null}
      
      <div className='side-donate'>
      <div className='browse-buttons'>

              <div className='browse-donate-title'>Enter Address and click below to donate</div>
                <input  className="address-input" onChange={(e) => setDonAddress(e.target.value)}type='text' min="1" ></input>
                
            
            </div>
            <div className='browse-buttons'>
            <div className='browse-donate-title'>Enter Amount and click below to donate ( in TEZ )</div>
                <input  className="counter-input" onChange={(e) => setDonAmount(e.target.value)}type='number' min="1" ></input>
                
            
         </div>
            
            
      <div className='donate-button'>
                <button onClick={donatefunction} className='donate-button-original'>Donate</button>
            </div>
            </div>
    </div>
  )
}

export default Browse;