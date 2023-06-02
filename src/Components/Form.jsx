import React from 'react';

const Form = ({data, setData}) => {

    const handleParticuleUpdate = (type, e) => {
        const arr = e.target.value.split(",")

        let new_data = {...data};
        new_data[type] = arr

        setData(new_data)
    }

    return (
        <div className='bg-white overflow-hidden rounded-lg shadow p-4 flex flex-col gap-4'>


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
            </div>
    );
}

export default Form;
