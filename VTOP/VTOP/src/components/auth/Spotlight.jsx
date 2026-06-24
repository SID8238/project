import React from 'react';
import { AiFillThunderbolt } from "react-icons/ai";

function Spotlight() {
    return (
        <div className='bg-white border-t-4 border-t-[#dc8a3e] rounded-sm shadow-md max-w-2xl mt-3 ml-3'>
            <h2 className='bg-gray-100 p-4 text-amber-800/95'>Spotlight</h2>
            <ul>
                <li className='flex items-center p-3'>
                    <AiFillThunderbolt className='text-amber-900/95'/>
                    <button type="button" className='underline hover:no-underline cursor-pointer'>
                            BOOK YOUR SLOT THROUGH SAMPLE TESTING THROUGH CRF
                    </button>
                </li>
                <div className='border-t-2 border-gray-200'></div>
                <li className='flex items-center p-3'>
                    <AiFillThunderbolt className='text-amber-900/95'/>
                    <button type="button" className='underline hover:no-underline cursor-pointer'>
                        DAY BOARDER & DAY SCHOLAR APPLICATION</button>
                </li>
                <div className='border-t-2 border-gray-200'></div>
                <li className='flex items-center p-3'>
                    <AiFillThunderbolt className='text-amber-900/95'/>
                    <button type="button" className='underline hover:no-underline cursor-pointer'>HOSTEL VACATING CONSENT FORM FOR PROJECTS/INTERSHIPS</button>
                </li>
                <div className='border-t-2 border-gray-200'></div>
                <li className='flex items-center p-3'>
                    <AiFillThunderbolt className='text-amber-900/95'/>
                    <button type="button" className='underline hover:no-underline cursor-pointer'>
                        HOSTEL VACATING CONSENT FORM AFTER COMPLETION OF THE COURSE</button>
                </li>
                <div className='border-t-2 border-gray-200'></div>
                <li className='flex items-center p-3'>
                    <AiFillThunderbolt className='text-amber-900/95'/>
                    <button type="button" className='underline hover:no-underline cursor-pointer'>
                        EXTERNAL PARTICIPATION FORM</button>
                </li>
            </ul>
        </div>
    );
}

export default Spotlight;