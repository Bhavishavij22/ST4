import React,{useEffect, useState} from 'react'

 function Form(){

 const data={
    name:"",
    email:"",
    password:""

 }
 const[inputData, setInputData] = useState(data)
 function handleData(e){
    setInputData({...inputData,[e.target.name]:e.target.value})}
    console.log(inputData)
const[flag, setFlag]=useState(false)

useEffect(()=>{
    console.log("Registered")
},[flag])
function handleSubmit(e){
    e.preventDefault();
    if(!inputData.name || !inputData.email || !inputData.password){
        alert("All input fields are mandatory!!")
    }
    else{
        setFlag(true)
    }
}
 
 


    return(
        <>
        <pre>{(flag)?<h2 className='ui-define'>Hello {inputData.name},You've Registered Successfully</h2>:""}</pre>
        <form className="container" onSubmit={handleSubmit}>
            <div class="header">
                Registration Form
            </div>
            <div>
                <input type="text" name="name" onChange={handleData} placeholder="Enter Your Name" value={inputData.name}/>
            </div>
            <div>
                <input type="text" name="email" onChange={handleData} placeholder="Enter Your Email" value={inputData.email}/>
            </div>
            <div>
                <input type="text" name="password" onChange={handleData} placeholder="Enter Your Password" value={inputData.password}/>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
        </>
    )
}

export default Form;