import React from 'react';
import {useNavigate} from 'react-router-dom';
function Success(){
    const navigate = useNavigate();

    function tohome(){
       

                navigate("/");

    }
    return(
        <div className='success'>
            <div className='one'>Success</div>
            <div className='button'><button className='button' onClick={tohome}>Home</button></div>
        </div>
    );
}
export default Success;