import React, { useState } from 'react';
import LanguePicker from './LanguePicker';
import HelpModal from './HelpModal';

const Header = ({t, setLocal, language}) => {

    const [openHelp, setOpenHelp] = useState(false);

    return (
        <div className='flex justify-between items-center gap-4 px-4 sm:p-0'>
            <div className='flex items-center gap-4 text-4xl text-slate-700 tracking-widest font-sans '>
                <div className='bg-slate-700 text-gray-200 pl-2 pr-1 py-1 rounded-lg'>
                    <i className='fa-solid fa-dna fa-fw'></i>
                </div>
                {process.env.REACT_APP_NAME}
            </div>

            <div className='flex gap-4'>
                <LanguePicker setLocal={setLocal} language={language}/>

                <div className='bg-slate-500 hover:bg-sky-500 text-mono text-white w-10 h-10 flex justify-center items-center rounded-full text-2xl transition cursor-pointer' onClick={()=>setOpenHelp(!openHelp)}>
                    ?
                </div>

                {openHelp && <HelpModal setOpenHelp={setOpenHelp} t={t}/>}
    
            </div>
        </div>
    );
}

export default Header;
