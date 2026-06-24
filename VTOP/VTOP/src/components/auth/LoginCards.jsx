import React, { useState } from "react";
import { VscDebugLineByLine } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

function LoginCards() {

    const navigate = useNavigate();

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 p-4 gap-5 max-w-8xl mx-auto">
            <div className="flex sm:flex-row justify-between items-center text-center border-t-4 border-t-blue-700 rounded-sm shadow-md p-3 w-full bg-white">
                <img src="src/assets/StudentCard.png" alt="Error" className="object-contain mb-2"/>
                <div className="flex flex-col items-center gap-2">
                    <p className="text-blue-600 text-3xl max-[500px]:text-2xl">Student</p>
                    <button type="button" onClick={() => navigate('/login/student')}>
                        <VscDebugLineByLine className="bg-blue-700/85 p-0.5 text-white text-3xl rounded-sm hover:bg-blue-800 cursor-pointer" />
                    </button>
                </div>
            </div>
            <div className="flex justify-between items-center text-center border-t-4 border-t-amber-400 rounded-sm shadow-md p-3 w-full bg-white">
                <img src="src/assets/EmployeeCard.png" alt="Error" className="object-contain mb-2 w-50"/>
                <div className="flex flex-col items-center gap-2">
                    <p className="text-amber-400 text-3xl max-[500px]:text-2xl">Employee</p>
                    <button type="button" onClick={() => navigate('/login/employee')}>
                        <VscDebugLineByLine className="bg-amber-400/85 p-0.5 rounded-sm text-3xl hover:bg-amber-500 cursor-pointer" />
                    </button>
                </div>
            </div>
            <div className="flex justify-between items-center text-center border-t-4 border-t-green-600 rounded-sm shadow-md p-4 w-full bg-white">
                <img src="src/assets/ParentCard.png" alt="Error" className="object-contain mb-2"/>
                <div className="flex flex-col items-center gap-2">
                    <p className="text-green-600 text-3xl max-[500px]:text-2xl">Parent</p>
                    <button type="button" onClick={() => navigate('/login/parent')}>
                        <VscDebugLineByLine className="bg-green-600/85 p-0.5 text-3xl text-white rounded-sm hover:bg-green-700 cursor-pointer"/>
                    </button>
                </div>
            </div>
            <div className="flex justify-between border-t-4 items-center text-center border-t-cyan-500 rounded-sm shadow-md p-4 w-full bg-white">
                <img src="src/assets/AlumniCard.png" alt="Error" className="object-contain mb-2"/>
                <div className="flex flex-col items-center gap-2">
                    <p className="text-cyan-500 text-3xl max-[500px]:text-2xl">Alumni</p>
                    <button type="button" onClick={() => navigate('/login/alumni')}>
                        <VscDebugLineByLine className="bg-cyan-500/85 p-0.5 text-3xl rounded-sm hover:bg-cyan-600 cursor-pointer"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginCards;