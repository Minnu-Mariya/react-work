import { useState } from "react";

function Login(){

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch("https://worksheet-auth.mashupstack.com/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email:email,
        password:password
      })
    });

    const data = await response.json();

    if(response.ok){
      alert("Successfully Logged In");
      console.log("Token:",data.token);
    }else{
      alert(data.message);
    }
  }

  return(

    <div className="form-container">

      <h2>Login</h2>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

      </form>

    </div>
  );
}

export default Login;