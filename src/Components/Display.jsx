import React from 'react';
import NameItem from './NameItem';

const Display = ({names}) => {

    const name_list = names.map( (item, index)=>{
        return <NameItem name={item} key={index}/>
    })

    return (
        <div className='border border-slate-800 rounded-xl overflow-hidden'>
            <div className='bg-slate-700 text-gray-300 flex items-center px-4 py-1 border-b border-slate-700'>
                <div className='flex-1 h1'>
                    Name generated ({names.length})
                </div>
                <div className='p-2'>
                    <i className='fa-solid fa-arrows-rotate hover:animate-spin'></i>
                </div>
                <div className='group transition px-2 relative flex' title="Copy to clipboard" >
                    <i className='fa-solid fa-clipboard group-hover:animate-ping relative inline-flex opacity-75'></i>
                    <i className='fa-solid fa-clipboard absolute inline-flex'></i>
                </div>
                {/* <div className='p-2'>
                    <i className='fas fa-clipboard text-xl'></i>
                </div> */}
            </div>
            <div className='grid grid-cols-3 px-4 py-2 bg-white'>
                {name_list}
            </div>
        </div>
    );
}

export default Display;
