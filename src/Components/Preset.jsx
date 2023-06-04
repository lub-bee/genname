import React from 'react';

const Preset = ({preset, data, setData}) => {
    
    const is_active = (data.name == preset.name)

    const handleCLick = () => {
        const new_preset = {...preset, iteration: data.iteration}
        setData(new_preset)
    }

    return (
        <div className={'py-2 px-4 hover:bg-slate-500 transition cursor-pointer flex justify-between items-center'}
            onClick={handleCLick}>

            {is_active && <i className='fa-solid fa-caret-right'></i>}

            {preset.name}

            {is_active && <i className='fa-solid fa-caret-left'></i>}

        </div>
    );
}

export default Preset;
