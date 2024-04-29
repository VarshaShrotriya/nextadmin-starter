"use client"
import styles from "@/app/ui/login/login.module.css";
import axios from "axios";
import { useState } from "react";
const Login = () => {
  const[username , setUsername] = useState("");
  const[password , setpassword] = useState("");
  const[data , setdata] =  useState();

  const usernmaelisten = (e)=>{
    const text = e.target.value;
    setUsername(text)
  }
  const passlisten = (e)=>{
    const text = e.target.value;
    setpassword(text)
  }

  const login = ()=>{
    axios.post('http://localhost:8080/adminlogin',{
      UserName:username,
      Password:password
    })
    .then((response)=>{
      if(response.message=="Sucess"){
        setdata(response)
      }
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder="Username" onChange={usernmaelisten}/>
        <input type="password" placeholder="Password" onChange={passlisten}/>
        <button onClick={login()}>Login</button>
      </form>
    </div>
  );
};

export default Login;
