import React, { useEffect, useState } from 'react';
import NameItem from './NameItem';
import Clipboard from './Clipboard';

const Display = ({data, t}) => {

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
        let name = "";
        let collection = [];

        
        //generate required number of names
        for(let i = 0; i < num; i++){
            name = "";

            //pick a random length in the range
            const rand_length = getRandom(data.min_core_iteration, data.max_core_iteration-1)

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
            if(data.use_core_particule){
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
            }


            // name += data.junction_particules[getRandom(0,data.junction_particules.length-1)] + finisher
            name += starter + body + finish_joiner + finisher


            collection.push(name)

        }
        
        return collection
    }

    /**
     * 
     * @param {*} collection 
     * @returns 
     */
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

    const handleSort = (e) => {
        // const sorted = [...names]

        setNames([...names].sort())
    }

    //
    const handleRegen = (e, key=false) => {
        
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
        return <NameItem name={item} key={index} id={index} handleRegen={handleRegen} t={t}/>
    })

    function possibilities(){
        const junction = (data.use_junction_particule ? data.junction_particules.length : 1 )
        const core = (data.use_core_particule ? data.core_particules.length * data.max_core_iteration : 1)
        const start = data.start_particules.length
        const end = data.end_particules.length



        return junction * core * start * end
    }


    return (
        <div className='flex-1'>

            {/* header */}
            <div className='sm:rounded-t-lg bg-slate-700 text-gray-300 flex items-center px-6 py-1 sm:border border-slate-800'>

                <div className='flex-1 h1'>
                    {t("Name generated")}
                </div>

                <div className='p-2' onClick={handleSort} title={t("Order Alphabetically")}>
                    <i className='fa-solid fa-arrow-down-a-z hover:animate-spin-once'></i>
                </div>

                <div className='p-2' onClick={handleRegen} title={t("Regenerate")}>
                    <i className='fa-solid fa-arrows-rotate hover:animate-spin'></i>
                </div>

                <Clipboard text={names.join(",")} t={t}>
                    <div 
                        className='group transition px-2 relative flex' 
                        title={t("Copy to clipboard")} 
                        >
                        <i className='fa-solid fa-clipboard group-hover:animate-ping relative inline-flex opacity-75'></i>
                        <i className='fa-solid fa-clipboard absolute inline-flex'></i>
                    </div>
                </Clipboard>

            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 px-4 py-2 bg-white sm:border-x border-slate-800'>
                {name_list}
            </div>

            <div className='bg-slate-500 text-white px-6 py-1 sm:rounded-b-lg sm:border border-slate-800 text-right text-2xs uppercase tracking-widest'>
                {names.length} {t("over")} {Number(possibilities()).toLocaleString('ja-JA')} {t("possible associations")}
            </div>
        </div>
    );
}

export default Display;
