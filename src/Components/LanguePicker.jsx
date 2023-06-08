import React, { useState } from 'react';
import { CircleFlag } from 'react-circle-flags';

const LanguePicker = ({setLocal, language}) => {

    const [open, setOpen] = useState(false);

    const handleClick = (language) => {
        setLocal(language)
        setOpen(false)
    }

    return (
        <div className='cursor-pointer relative'>
            <div className='h-10 w-10 bg-slate-500 hover:bg-sky-500 flex justify-center items-center rounded-full transition'>
                {language == "fr" ? <CircleFlag countryCode="fr" className='h-8' onClick={()=>setOpen(!open)} title="Change language"/>
                                  : <CircleFlag countryCode="uk" className='h-8' onClick={()=>setOpen(!open)} title="Changez de langue"/>}
            </div>

            {open &&<div className='absolute top-full -left-1/2 bg-white w-20 mt-2 flex flex-col shadow z-30 cursor-pointer border border-slate-500 rounded overflow-hidden'>
                <div className='p-2 flex gap-2 items-center hover:bg-slate-200' onClick={()=>handleClick("fr")} title="Français">
                    <CircleFlag countryCode='fr' className='h-8'/>FR
                </div>
                <div className='p-2 flex gap-2 items-center hover:bg-slate-200' onClick={()=>handleClick("en")} title="English">
                    <CircleFlag countryCode='uk' className='h-8'/>UK
                </div>
            </div>}
        </div>
    );
}

export default LanguePicker;
