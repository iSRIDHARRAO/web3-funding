import axios from 'axios';

export const frontend = async (address)=>{
    var url="http://localhost:3001/"
        url = url.concat(address)
        var profile2= await axios.get(url)
        console.log(url)
        console.log(profile2.data)
        return (profile2.data)

}

