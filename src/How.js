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
                            <div className='one-one'><span>1.User Raises Request</span></div>
                            <div className='two-two'>User needs to click on the Start FundRaiser button to be a fundraiser,  user have to fill the form with patient details.Name, Age , Gender , How much he wants to raise , Brain Scanning Image are the required fields in order for further verification.</div>
                        </div>
                        <div className='section-two'>
                            <div className='one-one'><span>2.Machine verifies request</span></div>
                            <div className='two-two'>After submitting details image will be analyzed and by using Machine Learning, system predicts Brain Tumor and if patient really affected with Brain Tumor request will be approved.</div>
                        </div>
                        <div className='section-three'>
                        <div className='one-one'><span>3.Image saves on IPFS</span></div>
                            <div className='two-two'>After prediction, on Successful Approval the brain tumor image will be uploaded onto I.P.F.S ( InterPlanetary File System  ) which is a web3 static storage database</div>
                        </div>
                    </div>
                    <div className='how-sections1'>
                        <div className='section-one'>
                            <div className='one-one'><span>4.Approved request</span></div>
                            <div className='two-two'>Finally after completing previous steps user data will be saved on to the database which will be used to display in the website.So that everyone who visits Confero will be able to donate funds.</div>
                        </div>
                        <div className='section-two'>
                            <div className='one-one'><span>5.Share your fundraiser</span></div>
                            <div className='two-two'>All the users are able to visit the fundraiser requests but let others about their fundraiser one can share their approved request anywhere in order to get more funds.</div>
                        </div>
                        <div className='section-three'>
                            <div className='one-one'><span>6.Check Profile Section</span></div>
                            <div className='two-two'>Users </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default How;