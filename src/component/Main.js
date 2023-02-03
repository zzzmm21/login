
import React, { useEffect } from "react";
import axios from 'axios'
import Footer from "./layout/Footer";
import Header from "./layout/Header";
function Main(){
    
useEffect(()=>{
    axios.get('/api/hello')
    .then(response=> console.log(response.data))
}, [])
    return(
        <div>
                   
            <Header></Header>
            main page
            <Footer></Footer>
        </div>
    )
}

export default Main