import React, { useEffect, useState } from 'react';
import NameItem from './NameItem';
import Clipboard from './Clipboard';
import dayjs from 'dayjs';

const Display = ({data}) => {

    const [names, setNames] = useState([])

    // generate the name list at first load and data modif
    useEffect(() => {
        setNames(generateName(data.iteration))
    }, [data]);

    /**
     * 
     * @param {*} num 
     * @returns 
     */
    function generateName(num = 1){
        let name = null;
        let collection = [];

        /* format : 

            a: start_particule
            j: junction_particule
            c: core_particule
            z: end_particule

            (a?)( (j?)(c){0,n}) (z?)
         */
        
        //generate required number of names
        for(let i = 0; i < num; i++){
            name = "";

            //pick a random length in the range
            const rand_length = getRandom(data.min_lenght, data.max_lenght-1)

            
            //pick the starter particule
            const starter = collectionPick(data.start_particules);
         
        
            //pick the finish joiner
            const finish_joiner = (data.use_junction_particule)
                                ? collectionPick(data.junction_particules)
                                : ""

            //pick the finisher particule
            const finisher = collectionPick(data.end_particules)

            //generate the core
            let body = ""
            for(let j = 0; j < rand_length; j++){

                //picked joiner
                const joiner    = (data.use_junction_particule)
                                ? collectionPick(data.junction_particules)//[join_picker]
                                : ""

                //pick the core
                const core = collectionPick(data.core_particules)//[core_picker]

                //add the section to the name
                body += joiner + core

            }


            // name += data.junction_particules[getRandom(0,data.junction_particules.length-1)] + finisher
            name += starter + body + finish_joiner + finisher


            collection.push(name)

        }
        
        return collection
    }

    function collectionPick(collection){
        const rand = getRandom(0,collection.length-1);
        return collection[rand];
    }

    /**
     * 
     * @param {*} min 
     * @param {*} max 
     * @returns 
     */
    function getRandom(min = 0, max = 1) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    //
    const handleRegen = (e, key=false) => {
        console.log(key)
        
        if(key){
            const updatedNames = [...names];

            updatedNames[key] = generateName()
            setNames(updatedNames)

        } else {
            setNames(generateName(data.iteration))
        }
        
    }

    // to display all the name in a NameItem
    const name_list = names.map( (item, index)=>{
        return <NameItem name={item} key={index} id={index} handleRegen={handleRegen}/>
    })


    return (
        <div className=''>

            {/* header */}
            <div className='sm:rounded-t-xl bg-slate-700 text-gray-300 flex items-center px-4 py-1 sm:border border-slate-800'>

                <div className='flex-1 h1'>
                    Name generated ({names.length})
                </div>

                <div className='p-2'>
                    <i className='fa-solid fa-arrow-down-a-z hover:animate-spin-once'></i>
                </div>

                <div className='p-2' onClick={handleRegen}>
                    <i className='fa-solid fa-arrows-rotate hover:animate-spin'></i>
                </div>

                <Clipboard text={names.join(",")}>
                    <div 
                        className='group transition px-2 relative flex' 
                        title="Copy to clipboard" 
                        >
                        <i className='fa-solid fa-clipboard group-hover:animate-ping relative inline-flex opacity-75'></i>
                        <i className='fa-solid fa-clipboard absolute inline-flex'></i>
                    </div>
                </Clipboard>

            </div>

            <div className='grid grid-cols-3 px-4 py-2 bg-white sm:border-x border-slate-800'>
                {name_list}
            </div>

            <div className='bg-slate-500 text-white px-4 py-1 sm:rounded-b-xl sm:border border-slate-800 text-right text-2xs uppercase tracking-widest'>
                Something here...
            </div>
        </div>
    );
}

export default Display;
