import React from 'react';
import './Blocks.css';
function Blocks(){
    return(
        <div className='blocks'>
            <div className='blocks-heading'>Why Blockchain based fundraiser?</div>
            <div className='blocks-blocks'>
                <div className='blocks-one'>
                    <div className='blocks-one-one'>DECENTRALIZED</div>
                    <div className='blocks-one-two'>Ensures that the control and decision making are not in one individual or group hand but is evenly distributed in a network to eliminate the chance of bias or misjudgement</div>
                </div>
                <div className='blocks-two'>
                <div className='blocks-two-one'>TAMPERED PROOF</div>
                <div className='blocks-two-two'>Once a transaction is confirmed and entered, the entry cannot be modified.It enables participants to audit one another in a decentralized manner.</div>
                </div>
                    
                <div className='blocks-three'>
                <div className='blocks-three-one'>TRANSPARENCY</div>
                <div className='blocks-three-two'>Blockchain is supposed to be a transparency machine in which anyone can join the network & can view all information on that network.</div>
                </div>
            </div>
        </div>
    )
}

export default Blocks;