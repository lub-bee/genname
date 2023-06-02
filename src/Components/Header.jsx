import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-between items-center gap-4 px-4 sm:p-0'>
            <div className='flex items-center gap-4 text-4xl text-slate-700 tracking-widest font-sans '>
                <div className='bg-slate-700 text-gray-200 pl-2 pr-1 py-1 rounded-lg'>
                    <i className='fa-solid fa-dna fa-fw'></i>
                </div>
                {process.env.REACT_APP_NAME}
            </div>

            <div className='text-slate-500'>
                <i className='fa-solid fa-circle-info text-4xl hover:text-sky-400 transition cursor-pointer'></i>
            </div>
        </div>
    );
}

export default Header;
