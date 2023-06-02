import React, { useState } from 'react';

const Form = ({data, setData}) => {

    const handleParticuleUpdate = (type, e) => {
        const arr = e.target.value.split(",")

        let new_data = {...data};
        new_data[type] = arr

        setData(new_data)
    }

    const [open, setOpen] = useState(true);

    return (
        <div className='bg-white rounded-lg border border-t-0 border-slate-800 overflow-hidden'>

            <div className='border-b border-slate-800 bg-slate-700 text-gray-300 h1 px-4 py-1 flex items-center'
                onClick={()=>setOpen(!open)}>
                <div className='flex-1'>
                    Settings
                </div>
                <div className='p-2'>
                    <i className='fa-solid fa-chevron-down'></i>
                </div>
            </div>

            {open &&<div className='p-4 flex flex-col gap-4'>
            
                <div className=''>
                    <div className='h1'>
                        Junction Particules
                    </div>
                    <div className=''>
                        <input
                            type="checkbox"
                            value={true}
                            checked={data.use_junction_particule}
                            onChange={e=>setData({...data, use_junction_particule: e.target.checked})}/>
                        <label>Enable Junction ponctuation</label>
                    </div>
                    <textarea 
                        value={data.junction_particules} 
                        onChange={e=>{handleParticuleUpdate("junction_particules", e)}}
                        className={!data.use_junction_particule?"hidden":""}></textarea>
                </div>

                <div className=''>
                    <div className='h1'>
                        Start Particules
                    </div>
                    <textarea 
                        value={data.start_particules}
                        onChange={e=>{handleParticuleUpdate("start_particules", e)}}></textarea>
                </div>

                <div className=''>
                    <div className='h1'>
                        Core Particules
                    </div>
                    <textarea 
                        value={data.core_particules}
                        onChange={e=>{handleParticuleUpdate("core_particules", e)}}></textarea>
                </div>

                <div className=''>
                    <div className='h1'>
                        End Particules
                    </div>
                    <textarea 
                        value={data.end_particules}
                        onChange={e=>{handleParticuleUpdate("end_particules", e)}}></textarea>
                </div>

                <div className=''>
                    <div className='h1'>
                        Min Length (core-particule)
                    </div>
                    <input type="number" placeholder="min" value={data.min_lenght}
                        onChange={e=>setData({...data, min_lenght: e.target.value})}/>
                    
                </div>

                <div className=''>
                    <div className='h1'>
                        Min Length (core-particule)
                    </div>
                    <input 
                        type="number" 
                        placeholder="max" 
                        value={data.max_lenght}
                        onChange={e=>setData({...data, max_lenght: e.target.value})}/>
                    
                </div>

                <div className=''>
                    <div className='h1'>
                        Number of name generated
                    </div>
                    <input 
                        type="number" 
                        placeholder="max" 
                        value={data.iteration} 
                        onChange={e=>setData({...data, iteration: e.target.value})}/>
                </div>
            </div>}

        </div>
    );
}

export default Form;
