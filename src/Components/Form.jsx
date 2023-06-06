import dayjs from 'dayjs';
import { saveAs } from 'file-saver';
import React, { useState } from 'react';
import FileInput from './FileInput';

const Form = ({data, setData, t}) => {
    

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
        setData(jsonData)
    };



    const [open, setOpen] = useState(true);

    return (
        <div className='-mt-6 md:-mt-0 min-w-[290px] bg-white sm:rounded-lg border border-t-0 border-slate-800 overflow-hidden lg:self-start '>

            <div className='border-b border-slate-800 bg-slate-700 text-gray-300 h1 px-6 py-1 flex items-center'
                onClick={()=>setOpen(!open)}>
                <div className='flex-1'>
                    {t("Settings")}
                </div>
                <div className='p-2'>
                    <i className='fa-solid fa-chevron-down'></i>
                </div>
            </div>

            {open &&<div className='px-6 py-4 flex flex-col gap-4'>

                <div className='flex gap-4 text-slate-700'>
 
                    <FileInput onFileRead={handleImport} t={t}/>
                    
                    <div className='btn flex-1' onClick={handleExport}>
                        <i className='fa-solid fa-file-export text-base'></i>
                        {t("export")}
                    </div>
                    

                </div>

                {/* start */}
                <div className='flex flex-col sm:flex-row lg:flex-col gap-x-6'>
                    <div className='h1 w-[12rem]'>
                        {t("Start Particules")}
                    </div>
                    <textarea 
                        value={data.start_particules}
                        className='flex-1'
                        onChange={e=>{handleParticuleUpdate("start_particules", e)}}></textarea>
                </div>

                {/* junction */}
                <div className='flex flex-col sm:flex-row lg:flex-col gap-x-6'>
                    <div className='w-[12rem]'>
                        <div className='h1'>
                            {t("Junction Particules")}
                        </div>
                        <div className='flex gap-4 items-center'>
                            <input
                                type="checkbox"
                                value={true}
                                checked={data.use_junction_particule}
                                onChange={e=>setData({...data, use_junction_particule: e.target.checked})}/>
                            <label className='text-xs'>{t("Enable the particules")}</label>
                        </div>
                    </div>

                    <textarea 
                        value={data.junction_particules} 
                        onChange={e=>{handleParticuleUpdate("junction_particules", e)}}
                        className={(!data.use_junction_particule?"hidden":"" ) + " flex-1"}></textarea>
                </div>

                {/* core */}
                <div className='flex flex-col sm:flex-row lg:flex-col gap-x-6'>
                    <div className='w-[12rem]'>
                        <div className='h1'>
                            {t("Core Particules")}
                        </div>
                        <div className='flex gap-4 items-center'>
                            <input
                                type="checkbox"
                                value={true}
                                checked={data.use_core_particule}
                                onChange={e=>setData({...data, use_core_particule: e.target.checked})}/>
                            <label className='text-xs'>{t("Enable the particules")}</label>
                        </div>
                    </div>

                    {data.use_core_particule && <div className='flex-1'>
                        
                        <textarea 
                            value={data.core_particules}
                            className='w-full'
                            onChange={e=>{handleParticuleUpdate("core_particules", e)}}></textarea>

                        
                        <div className='flex items-center w-[12rem] justify-between'>
                            <div className='w-40 text-xs'>
                                {t("Min Repetitions")}
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

                        <div className='flex items-center w-[12rem] justify-between'>
                            <div className='text-xs'>
                                {t("Max Repetitions")}
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
                <div className='flex flex-col sm:flex-row lg:flex-col gap-x-6'>
                    <div className='h1 w-[12rem]'>
                        {t("End Particules")}
                    </div>
                    <textarea 
                        value={data.end_particules}
                        className='flex-1'
                        onChange={e=>{handleParticuleUpdate("end_particules", e)}}></textarea>
                </div>

                {/* iteration */}
                <div className='flex flex-col sm:flex-row lg:flex-col gap-x-6 items-center'>
                    <div className='h1 w-[12rem]'>
                        {t("Number of name generated")}
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
