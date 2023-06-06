import React, { useEffect, useRef, useState } from 'react';
import presets_data from '../Preset.json';
import PresetGroup from './PresetGroup';




const PresetMenu = ({data, setData, t}) => {

    const [open, setOpen] = useState(false);
    const menuRef = useRef(null)
    


    const preset_group_list = presets_data.map((item,index)=>{
        return <PresetGroup 
            group={item.group} 
            presets={item.presets} 
            data={data} 
            setData={setData}
            key={index}/>
    })

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if(open && menuRef.current && !menuRef.current.contains(event.target)){
                setOpen(false);
            }
        }

        document.body.addEventListener('click', handleOutsideClick);
        
        return () => {
            document.body.removeEventListener('click', handleOutsideClick);
        }
    },[])
    

    //render
    return (
        <div className='absolute w-60 rounded-r-lg overflow-hidden shadow-lg'>
            <div className='bg-slate-700 py-2 px-4 text-gray-300 flex justify-between items-center' ref={menuRef} onClick={()=>setOpen(!open)}>
                {t("preset")}
                <i className='fa-solid fa-bars'></i>
            </div>
            {open && <div className='bg-slate-600 w-60 text-white'>
                {preset_group_list}
            </div>}
        </div>
    );
}

export default PresetMenu;
