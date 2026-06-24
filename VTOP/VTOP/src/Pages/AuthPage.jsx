import { useState } from "react";
// import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useNavigate } from "react-router-dom";
import VITLogo from "../assets/VIT.png";
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const AuthPage = ({ mode, role}) =>{
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({username: '', password:'', reg:'', dob:'', contact:'', email:''});
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);

    function handleChange(e){
        const { name, value} = e.target;
        setError('');
        setFormData((prev) => ({
            ...prev,
            [name]:value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        let payload = {};
        if(role === 'parent')
        {
            payload = {
            regNumber: formData.reg,
            dob: formData.dob,
            contact: formData.contact
            };
        } else if(role === 'alumni')
        {
            payload = {
                regNumber: formData.reg,
                alumniEmail: formData.email,
                dob: formData.dob
            };
        }
        else{
            payload = {
                username: formData.username,
                password: formData.password
            };
        }
        try{
            const response = await axios.post(`${API_URL}/auth/${mode}/${role}`, payload);

            if(response.data.token){
                localStorage.setItem("token",response.data.token);
                localStorage.setItem("User", JSON.stringify(response.data.user || { role }));
            }
        } catch(err) {
            const msg = err.response?.data?.message || "Invalid credentials or server connection drop.";
            setError(msg);
        } finally {
            setLoading(false);
        }
    };

    return(<div>
        <div className='bg-blue-500 pb-3 pt-3 w-full'>
            <img src={VITLogo} alt="Error" className='w-55'/>
        </div>
        <div className="flex flex-grow justify-center items-center p-5">
            <form onSubmit={handleSubmit} className="w-full max-w-[500px] bg-white border-t-4 border-t-blue-500 rounded-md shadow-xl p-6 flex flex-col gap-4">
                { role === 'parent' ? ( <>
                <h4 className="font-medium text-2xl text-gray-800 border-b border-gray-100 pb-3">VTOP Parent Login</h4>
                <input type="text" name="reg" value={formData.reg} onChange={handleChange} placeholder="Enter Student's Register Number" className="w-full font-light border rounded-md p-1 mt-5 m-2"/>
                <input type="text" name="dob" value={formData.dob} onChange={handleChange} placeholder="Enter Student's Date Of Birth" className="w-full font-light border rounded-md p-1 mt-5 m-2"/>
                <input type="text" name="contact" value={formData.contact} onChange={handleChange} placeholder="Enter Parent Mobile Number/Email ID" className="w-full font-light border rounded-md p-1 m-2"/>
                
                {error && <p className="text-red-600 hover:bg-blue-700 text-white rounded-sm font-medium px-6 py-2 text-sm transition-colors cursor-pointer diabled:opacctiy-60">{error}</p>}
                
                <div className="flex justify-end ">
                    <button className="bg-blue-600 p-1 rounded-md text-white hover:bg-blue-700 cursor-pointer" disabled={loading}>{loading? 'processing...' : 'SignIn As Parent'}</button>
                </div>
            <div className="flex justify-end p-5 flex-row border-t border-gray-100">
                <button type="button" onClick={() => navigate('/')} className="text-red-600/90 underline hover:no-underline cursor-pointer">Go to Home Page</button>
            </div> 
       </>) : role === 'alumni' ? ( <>
                <h4 className="font-medium text-2xl text-gray-800 border-b border-gray-100 pb-3">VTOP Alumni Login</h4>
                <input type="text" name="reg" value={formData.reg} onChange={handleChange} placeholder="Enter Register Number" className="w-full font-light border rounded-md p-1 mt-5 m-2"/>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Alumni Email" className="w-full font-light border rounded-md p-1 m-2"/>
                <input type="text" name="dob" value={formData.dob} onChange={handleChange} placeholder="Enter Date Of Birth" className="w-full font-light border rounded-md p-1 m-2"/>
                
                {error && <p className="text-red-600 hover:bg-blue-700 text-white rounded-sm font-medium px-6 py-2 text-sm transition-colors cursor-pointer diabled:opacctiy-60">{error}</p>}
                
                <div className="flex justify-end ">
                    <button className="bg-blue-600 p-1 rounded-md text-white hover:bg-blue-700 cursor-pointer" disabled={loading}>{loading? 'processing...' : 'SignIn'}</button>
                </div>
                <div className="flex justify-end p-5 flex-row border-t border-gray-100">
                    <button type="button" onClick={() => navigate('/')} className="text-red-500 underline hover:no-underline cursor-pointer">Go to Home Page</button>
                </div> 
            </>) :<><h4 className="font-medium text-2xl text-gray-800 border-b border-gray-100 pb-3">VTOP Login</h4>
                <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" className="w-full font-light border rounded-md p-1 mt-5 m-2"/>
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="w-full font-light border rounded-md p-1 m-2"/>
                
                {error && <p className="text-red-600 hover:bg-blue-700 text-white rounded-sm font-medium px-6 py-2 text-sm transition-colors cursor-pointer diabled:opacctiy-60">{error}</p>}
                
                <div className="flex justify-end ">
                    <button className="bg-blue-600 p-1 rounded-md text-white hover:bg-blue-700 cursor-pointer" disabled={loading}>{loading? 'processing...' : role === 'parent' ? 'SignIn As Parent' : 'Submit'}</button>
                </div>
                <div className="flex justify-between p-5 flex-row border-t border-gray-100">
                    <div className="flex flex-col">
                        <button type="button" className="text-blue-500 hover:text-blue-700 cursor-pointer">Forgot Password</button>
                        <button type="button" className="text-blue-500 hover:text-blue-700 cursor-pointer">Forgot LoginId</button>
                    </div>
                    <button type="button" onClick={() => navigate('/')} className="text-green-600/90 underline hover:no-underline cursor-pointer">Go to Home Page</button>
                </div>
            </> }
        </form>
        </div>
        <Footer/>
    </div>);
}

export default AuthPage;