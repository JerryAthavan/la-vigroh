import { useState, useEffect } from "react";

function useTheme(){
    const [isLight, setIsLight] = useState(()=>{
        return localStorage.getItem("theme") === "light";
    });

    useEffect(()=>{
        if(isLight){
            document.documentElement.classList.add("light");
            localStorage.setItem("theme", "light");
        }
        else{
            document.documentElement.classList.remove("light");
            localStorage.setItem("theme", "dark");
        }
    }, [isLight]);

    return[isLight, setIsLight];
}
export default useTheme;