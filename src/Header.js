import './Header.css';

function Header(){
    return(
        <div class="header">
            <div class="logo"><a href="#"><img src="https://st.depositphotos.com/1265046/1328/i/600/depositphotos_13281915-stock-photo-human-brain-in-x-ray.jpg" alt="Logo"/><p>CONFERO - An aid for need</p></a></div>            
            <div class="browse"><a href="#">Browser Fund Raisers</a></div>
            <div class="how"><a href="#">How it works ?</a></div>
            <div class="start"><a href="#">Start a Fundraiser</a></div>
            <div class="sign"><a href="#">Connect Walllet</a></div>
        </div>
    )
}
export default Header;