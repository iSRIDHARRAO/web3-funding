import "./Main.css";
import { Link } from "react-router-dom";
import React from "react";
function Main(){

    return(
        <div className="main">
            <div className="left"><img src="http://www.fahmirahmanfoundation.org/wp-content/uploads/2018/04/Fundraising-Tree.jpg" alt="Fundraising"/></div>
            <div className="right">
                <div className="main-heading">Need Funds To Pay For a Medical Emergency ?</div>
                <div className="percentages">
                    <div className="one">
                    <div className="i">0%</div>
                    <div className="j">PLATFORM FEE</div>
                    </div>
                    <div className="two">
                    <div className="i">100%</div>
                    <div className="j">SECURE TRANSACTIONS</div>
                    </div>
                    <div className="three">
                    <div className="i">100%</div>
                    <div className="j">TRANSPARENT</div>
                    </div>
                </div>
                <div className="second-heading">A.I enabled , Fundraiser platform on Tezos Platform.</div>
                <div className="buttons">
                    <div className="start-fr"><Link to='/raise'>Start a Fundraiser</Link></div>
                    <div className="start-know"><a href="https://tezos.com/" target="_blank" rel="noopener noreferrer">Know more about Tezos</a></div>                    
                </div>
            </div>

        </div>
    )
}
export default Main;