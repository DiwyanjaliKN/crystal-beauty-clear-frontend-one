/*export default function LoginPage(){
    return(
        <div className="w-full   h-screen bg-[url(/login.bg.jpg)] bg-cover bg-center flex">
            <div className=" w-[50%] h-full">

            </div>

            <div className=" w-[50%] h-full flex justify-center items-center">
                <div className="w-[450px] h-[600px]  backdrop-blur-xl shadow-xl rounded-xl flex flex-col justify-center items-center">
                    <input className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px]" type="email" placeholder="Email"/>
                    <input className="w-[400px] h-[50px] border border-white rounded-xl text-center  m-[5px]" type="password" placeholder="Password"/>
                    <button className="w-[400px] h-[50px] bg-green-200 text-white rounded-xl cursor-pointer">Login</button>

                </div>

            </div>
           
        </div>
    )
}*/

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate()

    function handleLogin() {
        console.log("Email:", email);
        console.log("Password:", password);

        axios.post(import.meta.env.VITE_BACKEND_URL+"/api/user/login",{
            email:email,
            password:password
        }).then(
            (response)=>{
                console.log("Login successful",response.data);
                toast.success("Login successful");
                localStorage.setItem("token",response.data.token);
                
                const user = response.data.user;

                if(user.role=="admin"){
                    navigate("/admin")
                }else{
                    navigate("/")
                }
                
        }).catch(
            (error)=>{
                console.log("Login Failed",error.response.data);
                toast.error(error.response.data.message || "Login Failed");
            }
        )


        console.log("Login button clicked");
    }

    return (
        <div className="w-full h-screen bg-[url('/login.bg.jpg')] bg-cover bg-center flex">
            <div className="w-[50%] h-full">
                {/* Left side section, you can add something here if needed */}
            </div>

            <div className="w-[50%] h-full flex justify-center items-center">
                <div className="w-[450px] h-[650px] backdrop-blur-xl shadow-xl rounded-xl flex flex-col justify-center items-center p-8">
                    <h2 className="text-2xl font-semibold text-white mb-6">Welcome Back</h2>

                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-[400px] h-[50px] border border-white rounded-xl text-center text-white m-[5px] focus:outline-none focus:ring-2 focus:ring-green-400"
                        type="email"
                        placeholder="Email"
                        aria-label="Email"
                    />

                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-[400px] h-[50px] border border-white rounded-xl text-center text-white m-[5px] focus:outline-none focus:ring-2 focus:ring-green-400"
                        type="password"
                        placeholder="Password"
                        aria-label="Password"
                    />

                    <button 
                        onClick={handleLogin} 
                        className="w-[400px] h-[50px] bg-green-200 text-black rounded-xl cursor-pointer mt-5"
                        aria-label="Login Button"
                    >
                        Login
                    </button>

                    <a
                        href="/forgot-password"
                        className="text-green-200 mt-4 text-sm hover:underline"
                    >
                        Forgot Password?
                    </a>
                </div>
            </div>
        </div>
    );
}
