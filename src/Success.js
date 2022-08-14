import React from 'react';
import {useNavigate} from 'react-router-dom';
function Success(){
    const navigate = useNavigate();

    function tohome(){
       

                navigate("/");

    }
    return(
        <div className='success'>
            <div className='one'>Refresh Page once and Click on Below button</div>
            <div className='button'><button className='button' onClick={tohome}>Home</button></div>
        </div>
    );
}
export default Success;