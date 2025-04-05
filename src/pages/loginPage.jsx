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

export default function LoginPage() {
    return (
        <div className="w-full h-screen bg-[url('/login.bg.jpg')] bg-cover bg-center flex">
            <div className="w-[50%] h-full">
                {/* Left side section, you can add something here if needed */}
            </div>

            <div className="w-[50%] h-full flex justify-center items-center">
                <div className="w-[450px] h-[650px] backdrop-blur-xl shadow-xl rounded-xl flex flex-col justify-center items-center p-8">
                    <h2 className="text-2xl font-semibold text-white mb-6">Welcome Back</h2>
                    <input
                        className="w-[400px] h-[50px] border border-white[800] rounded-xl text-center text-white  m-[5px] focus:outline-none focus:ring-2 focus:ring-green-400"
                        type="email"
                        placeholder="Email"
                        aria-label="Email"
                    />
                    <input
                        className="w-[400px] h-[50px] border border-white rounded-xl text-center text-white m-[5px] focus:outline-none focus:ring-2 focus:ring-green-400"
                        type="password"
                        placeholder="Password"
                        aria-label="Password"
                    />
                    <button
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
