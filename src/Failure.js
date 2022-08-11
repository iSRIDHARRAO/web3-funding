import React from 'react';
import {useNavigate} from 'react-router-dom';
function Failure(){
    const navigate = useNavigate();

    function tohome(){
       

                navigate("/");

    }
    return(
        <div className='failure'>
            <div className='one'>Failure</div>
            <div className='button'><button className='button' onClick={tohome}>Home</button></div>
        </div>
    );
}
export default Failure;