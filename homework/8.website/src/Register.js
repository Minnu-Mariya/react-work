import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(password !== confirmPassword){
      alert("Passwords do not match");
      return;
    }

    try{

      const response = await fetch("https://worksheet-auth.mashupstack.com/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          user_name:name,
          email:email,
          password:password
        })
      });

      const data = await response.json();
      console.log("Server response:",data);

      if(data.status === "success"){
        alert("Registration Successful");
        navigate("/login");
      }else{
        alert(data.message || "Registration failed");
      }

    }catch(error){
      console.log(error);
      alert("Something went wrong");
    }

  };

  return(
    <div className="form-container">

      <h2>Register</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e)=>setConfirmPassword(e.target.value)}
        />

        <button type="submit">Register</button>

      </form>

    </div>
  );
}

export default Register;