import React from 'react';

const Form = ({data, setData}) => {
    return (
        <div className='bg-white overflow-hidden rounded-lg shadow p-4'>
                <div className=''>
                    <div className='h1'>
                        Junction Particules
                    </div>
                    <textarea value={data.junction_particules}></textarea>
                    
                </div>

                <div className=''>
                    <div className='h1'>
                        Core Particules
                    </div>
                    <textarea value={data.core_particules}></textarea>
                    
                </div>

                <div className=''>
                    <div className='h1'>
                        End Particules
                    </div>
                    <textarea value={data.end_particules}></textarea>
                    
                </div>

                <div className=''>
                    <div className='h1'>
                        Junction Particules
                    </div>
                    <input type="number" placeholder="min" value={data.min_lenght}/>
                    
                </div>
                <div className=''>
                    <div className='h1'>
                        Junction Particules
                    </div>
                    <input type="number" placeholder="max" value={data.max_lenght}/>
                    
                </div>
                <div className=''>
                    <div className='h1'>
                        Number of name generated
                    </div>
                    <input type="number" placeholder="max" value={data.iteration}/>
                    
                </div>
            </div>
    );
}

export default Form;
