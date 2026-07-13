import { use, useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash(){
    const location = useLocation();

    useEffect(()=>{
        if ("scrollRestoration" in window.history){
            window.history.scrollRestoration = "manual";
        }

        if(location.hash){
            const timer = setTimeout(()=>{
                const element = document.querySelector(location.hash);
            if(element){
                element.scrollIntoView({behavior: "smooth"});
            }
            }, 50);
        }
            else{
                window.scrollTo(0,0);
            }
        
    }, [location]);
    
    return null;
}
export default ScrollToHash;