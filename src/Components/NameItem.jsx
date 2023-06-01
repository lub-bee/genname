import React from 'react';

const NameItem = ({name}) => {

    const handleCopy = (e) => {
        alert("todo copy")
    }

    const handleRegen = (e) => {
        alert("todo regen")
    }

    return (
        <div className="capitalize hover:bg-gray-100 text-white hover:text-gray-400 transition cursor-pointer flex justify-between items-center p-2">
            
            <div className='flex-1 text-gray-700'>
                {name} 
            </div>

            <div className='group transition px-2' title="Regenerate" onClick={handleRegen}>
                <i className='fa-solid fa-arrows-rotate group-hover:animate-spin'></i>
            </div>

            <div className='group transition px-2 relative flex' title="Copy to clipboard" onClick={handleCopy}>
                <i className='fa-solid fa-clipboard group-hover:animate-ping relative inline-flex opacity-75'></i>
                <i className='fa-solid fa-clipboard absolute inline-flex'></i>
            </div>
        </div>
    );
}

export default NameItem;
