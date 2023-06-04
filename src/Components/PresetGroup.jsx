import React from 'react';
import Preset from './Preset';

const PresetGroup = ({group, presets, data, setData}) => {
    
    const preset_list = presets.map((item,index)=>{
        return <Preset 
            key={index} 
            preset={item}
            data={data}
            setData={setData} />
    })

    return (
        <div>
            <div className='px-4 py-2 text-gray-400 uppercase tracking-widest'>
                {group}
            </div>
            {preset_list}
        </div>
    );
}

export default PresetGroup;
