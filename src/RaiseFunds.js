import React, {useState,useEffect} from 'react';
import './RaiseFunds.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { getAccount } from './utils/wallet';
import {donor, fundraiser} from './utils/operation';


function RaiseFunds(){
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [matter, setMatter] = useState("");
    const [image_url,setImage_url] = useState(null);
    const [tumor, setTumor] = useState(null);
    const [amount_needed,setAmount_needed] = useState("");
    const [id5,setId5] = useState("");
    const [amount_raised,setAmount_raised] = useState(500000000);
    const [amount_need_to_be_raised,setAmount_need_to_be_raised] = useState("0");
    useEffect(() => {
        
        async function fetchData() {
          
              const account3 = await getAccount();
              setId5(account3);


          }
        
          fetchData();}
        
          ,[]);

    const calledfunction = async() => {
        try {

            await fundraiser(amount_raised);
            alert("Transaction succesful!");
          } catch (err) {
            alert(err.message);
          }

        // alert(amount_raised)
        }



    let submitdetails = async (e) => {
      
        e.preventDefault();

        const formData = new FormData();
        formData.append("file", image_url);
 

        const res = await fetch("http://localhost:5000/predict", {
            method: "POST",
            body: formData,
        }).then((res) => res.json());
        const a=res.status
        console.log(res.status)
        setTumor(a)

        if(a==="yes"){
        axios({
           method: 'post',
           url: 'http://localhost:3001/fundraisers',
           data: {
             "title":title,
             "matter":matter,
             "image_url":image_url,
             "amount_needed":amount_needed,
             "amount_raised":amount_raised,
             "id":id5,
             "amount_need_to_be_raised":amount_need_to_be_raised,
           }
         }).then(function (response) {
              if(response.data==="Success"){
                    
                calledfunction();
              
                 navigate("/success");
              }
              else{
                 navigate("/failure")
              }
            })}
            else{
                navigate("/failure")
            }
        console.log(id5,title,matter,amount_raised,image_url)
    }

            

    return(
        <div className='raise-funds'>
            <div className='raise-form'>
                <div className='raise-heading'>Enter the following details</div>
                <div className='input-fields'>

                        <form onSubmit={submitdetails}>
                        <div ><label className="raise-one-one" htmlFor="fname">Title :</label><br/>
                        <input type="text" id="fname"  onChange={(e) => setTitle(e.target.value)} placeholder='Your fundraiser title goes here...'/><br/></div>

                        <div ><label className="raise-one-two" htmlFor="mail">Matter :</label><br/>
                        <textarea type="text" id="mail" onChange={(e) => setMatter(e.target.value)} placeholder='Tell to people about your fundraiser...' name="mail"/><br/></div>

                        <div ><label className="raise-one-three" htmlFor="mobile">Image Url:</label><br/>
                        <input type="file" id="mobile" onChange={(e) => setImage_url(e.target.files[0])} placeholder='give image url...' name="mobile"/><br/></div>

                        <div ><label className="raise-one-four" htmlFor="address">Amount Needed :</label><br/>
                        <input type="Number" id="address" onChange={(e) => setAmount_raised(e.target.value)} placeholder='Amount in ( MUTEZ )' name="address"/><br/>

                        </div>
                        
                        <div className='submit-button'>
                        <button className="button" type="submit" >Submit</button>
                        </div>
                        </form>


</div>
            </div>
        </div>
    )
    }
export default RaiseFunds;