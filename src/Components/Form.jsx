import dayjs from 'dayjs';
import { saveAs } from 'file-saver';
import React, { useState } from 'react';
import FileInput from './FileInput';

const Form = ({data, setData}) => {
    

    const handleParticuleUpdate = (type, e) => {
        const arr = e.target.value.split(",")

        let new_data = {...data};
        new_data[type] = arr

        setData(new_data)
    }

    const handleExport = () => {
        const jsonBlob = new Blob([JSON.stringify(data, null, 4)],{
            type: 'application/json'
        });
        const now = dayjs().format("YYYYMMDDHHmm")
        saveAs(jsonBlob, `genname-${now}`)
    }

    const handleImport = (jsonData) => {
        // Use the parsed JSON data here
        // console.log(jsonData);
        setData(jsonData)
    };



    const [open, setOpen] = useState(true);

    return (
        <div className=' min-w-[290px] bg-white sm:rounded-lg border border-t-0 border-slate-800 overflow-hidden lg:self-start '>

            <div className='border-b border-slate-800 bg-slate-700 text-gray-300 h1 px-6 py-1 flex items-center'
                onClick={()=>setOpen(!open)}>
                <div className='flex-1'>
                    Settings
                </div>
                <div className='p-2'>
                    <i className='fa-solid fa-chevron-down'></i>
                </div>
            </div>

            {open &&<div className='px-6 py-4 flex flex-col gap-4'>

                <div className='flex gap-4 text-slate-700'>
                    {/* <div className='btn flex-1'>
                        <i className='fa-solid fa-file-import text-base'></i>
                        import
                    </div> */}
                    <FileInput onFileRead={handleImport} />
                    
                    <div className='btn flex-1' onClick={handleExport}>
                        <i className='fa-solid fa-file-export text-base'></i>
                        export
                    </div>
                    

                </div>

                {/* start */}
                <div className=''>
                    <div className='h1'>
                        Start Particules
                    </div>
                    <textarea 
                        value={data.start_particules}
                        onChange={e=>{handleParticuleUpdate("start_particules", e)}}></textarea>
                </div>

                {/* junction */}
                <div className=''>
                    <div className='h1'>
                        Junction Particules
                    </div>
                    <div className='flex gap-4 items-center'>
                        <input
                            type="checkbox"
                            value={true}
                            checked={data.use_junction_particule}
                            onChange={e=>setData({...data, use_junction_particule: e.target.checked})}/>
                        <label className='text-xs'>Enable junction particules</label>
                    </div>
                    <textarea 
                        value={data.junction_particules} 
                        onChange={e=>{handleParticuleUpdate("junction_particules", e)}}
                        className={!data.use_junction_particule?"hidden":""}></textarea>
                </div>

                {/* core */}
                <div className=''>
                    <div className='h1'>
                        Core Particules
                    </div>
                    <div className='flex gap-4 items-center'>
                        <input
                            type="checkbox"
                            value={true}
                            checked={data.use_core_particule}
                            onChange={e=>setData({...data, use_core_particule: e.target.checked})}/>
                        <label className='text-xs'>Enable core particules</label>
                    </div>

                    {data.use_core_particule && <div className=''>
                        
                        <textarea 
                            value={data.core_particules}
                            onChange={e=>{handleParticuleUpdate("core_particules", e)}}></textarea>

                        
                        <div className='flex items-center'>
                            <div className='w-40 text-xs'>
                                Min Repetitions
                            </div>
                            <div className=''>
                                <input type="number" 
                                    placeholder="min" 
                                    className='w-20'
                                    min={0}
                                    max={5}
                                    value={data.min_core_iteration}
                                    onChange={e=>setData({...data, min_core_iteration: e.target.value})}/>
                            </div>
                        </div>

                        <div className='flex items-center'>

                            <div className='w-40 text-xs'>
                                Max Repetitions
                            </div>
                            <div className=''>
                                <input 
                                    type="number" 
                                    className='w-20'
                                    placeholder="max" 
                                    min={0}
                                    max={10}
                                    value={data.max_core_iteration}
                                    onChange={e=>setData({...data, max_core_iteration: e.target.value})}/>
                            </div>
                        </div>
                    </div>}
                </div>

                {/* end */}
                <div className=''>
                    <div className='h1'>
                        End Particules
                    </div>
                    <textarea 
                        value={data.end_particules}
                        onChange={e=>{handleParticuleUpdate("end_particules", e)}}></textarea>
                </div>

                {/* iteration */}
                <div className=''>
                    <div className='h1'>
                        Number of name generated
                    </div>
                    <input 
                        type="number" 
                        className='w-20'
                        placeholder="max" 
                        min={0}
                        max={1000}
                        value={data.iteration} 
                        onChange={e=>setData({...data, iteration: e.target.value})}/>
                </div>
            </div>}

        </div>
    );
}

export default Form;
