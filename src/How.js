import React from 'react';
import './How.css';
import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined';
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined';
import Looks3OutlinedIcon from '@mui/icons-material/Looks3Outlined';
import Looks4OutlinedIcon from '@mui/icons-material/Looks4Outlined';
import Looks5OutlinedIcon from '@mui/icons-material/Looks5Outlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
function How(){
    return(
        <div className='How'>
            <div className='Heading'><span className="heading-underline">Fundraising was very easy by these 5 steps on Tezos Blockchain.</span></div>
            <div className='Matter'>
                <div className='matter-one'><LooksOneOutlinedIcon className='icons' fontSize='medium'/>Connect your <AccountBalanceWalletOutlinedIcon className='icons'/>.</div>
                <div className='matter-two'><LooksTwoOutlinedIcon className='icons' fontSize='medium'/>Create <AccountBoxOutlinedIcon className='icons'/>Profile if you are a new user.</div>
                <div className='matter-three'><Looks3OutlinedIcon className='icons' fontSize='medium'/>Click on Start Fund button and give the patients details to raise request</div>
                <div className='matter-four'><Looks4OutlinedIcon className='icons' fontSize='medium'/>Get verified, if machine predicts brain tumor then your request will be raised.</div>
                <div className='matter-five'><Looks5OutlinedIcon className='icons' fontSize='medium'/>Share link through Social Media to get funds in TEZ.</div>
            </div>
            <div className='how-works'>
                <div className='Heading'><span className="heading-underline">How it works?</span></div>
                <div className='how-sections'>
                    <div className='how-sections1'>
                        <div className='section-one'>
                            <div className='one-one'><span>Heading</span></div>
                            <div className='two-two'>Matter</div>
                        </div>
                        <div className='section-two'>
                            <div className='one-one'><span>Heading</span></div>
                            <div className='two-two'>Matter</div>
                        </div>
                        <div className='section-three'>
                        <div className='one-one'><span>Heading</span></div>
                            <div className='two-two'>Matter</div>
                        </div>
                    </div>
                    <div className='how-sections1'>
                        <div className='section-one'>
                            <div className='one-one'><span>Heading</span></div>
                            <div className='two-two'>Matter</div>
                        </div>
                        <div className='section-two'>
                            <div className='one-one'><span>Heading</span></div>
                            <div className='two-two'>Matter</div>
                        </div>
                        <div className='section-three'>
                            <div className='one-one'><span>Heading</span></div>
                            <div className='two-two'>Matter</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default How;