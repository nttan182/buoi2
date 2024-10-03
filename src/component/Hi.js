function Hi(){
    return(
        <span>
            <button onClick={hiAll}>Hi All</button>
            <button onClick={()=>{hiYou('You')}}>Hi you</button>
        </span>
    )
   
} 
        const hiAll=()=>{
            alert("hello everyone")
        }
        const hiYou=(name)=>{
            alert("Hello "+name)
        }      
export {Hi}