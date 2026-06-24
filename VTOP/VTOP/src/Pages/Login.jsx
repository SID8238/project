import React, { useState } from "react";
import LoginCards from "../components/auth/LoginCards";
import Spotlight from "../components/auth/Spotlight";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";


function Login() 
{

    return (<div>
        <Header></Header>
        <h2 className="text-center text-3xl text-blue-600 p-2">VTOP translates to "VIT on TOP"</h2>
        <p className="text-center"><strong>A digital initiative by the institute facilitating Faculty, Staff, Students, Parents and Alumni to access and process Academics, Research, Supporting services at one common platform.</strong></p>
        <LoginCards></LoginCards>
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
            <Spotlight></Spotlight>
            <div className="flex flex-row gap-5 justify-center">
                <div className="flex flex-col gap-4">
                    <h5 className="text-cyan-500 font-medium">Parent App</h5>
                    <div className="flex flex-row bg-black justify-center items-center border-2 border-[#b5b5b5] rounded-md">
                        <img src="src/assets/Playstore.png" alt="error" className="h-12" />
                        <button className="bg-black text-white size-30 h-17 font-medium hover:cursor-pointer">GET IT ON Google Play</button>
                    </div>
                    <div className="flex flex-row bg-black justify-center items-center border-2 border-[#b5b5b5] rounded-md">
                        <img src="src/assets/Apple.png" alt="error" className="h-12" />
                        <button className="bg-black text-white size-35 h-18 font-medium hover:cursor-pointer">Download on the Apple Store</button>
                    </div></div>
                <div className="flex flex-col gap-4">
                    <h5 className="text-cyan-500 font-medium">Student App</h5>
                    <div className="flex flex-row bg-black justify-center items-center border-2 border-[#b5b5b5] rounded-md">
                        <img src="src/assets/Playstore.png" alt="error" className="h-12" />
                        <button className="bg-black text-white size-30 h-17 font-medium hover:cursor-pointer">
                            GET IT ON Google Play
                        </button>
                    </div>
                    <div className="flex flex-row bg-black justify-center items-center border-2 border-[#b5b5b5] rounded-md">
                        <img src="src/assets/Apple.png" alt="error" className="h-12" />
                        <button className="bg-black text-white size-35 h-18 font-medium hover:cursor-pointer">Download on the Apple Store</button>
                    </div></div></div>
        </div><Footer />
    </div>);
}

export default Login;