import { useState } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Display from "./Components/Display";

function App() {

    const [data, setData] = useState({
        //nb min of core_particules generated
        min_lenght: 1,

        //nb max of core_particules generated
        max_lenght: 1,

        //
        use_junction_particule: false,

        //particules used between core particules, generaly vowel, group of vowels or special char
        junction_particules: ["a","i","u","e","o","ou","oe","oë","ū"],        
        
        //main particules of the name
        core_particules: ["sylv",
        "gael",
        "blood",
        "chill",
        "demon",],
        
        //particule used for the end of the name, only one used
        end_particules: ["ary", "anna", "estre","esque","elte"],

        iteration: 99,
    });

    function generateName(num = 1){
        let name = null;
        let collection = [];
        
        //generate required number of names
        for(let i = 0; i < num; i++){
            name = "";

            //pick a random length in the range
            const rand_length = getRandom(data.min_lenght, data.max_lenght-1)

            //BUG - should be a core only when junction are enabled
            const start_with_vowel = getRandom()

            //pick the starter particule - BUG
            const starter_picker = getRandom(0,data.junction_particules.length-1);



            //
            const finish_picker = getRandom(0,data.end_particules.length-1);

            //bug wrong collection
            const starter   = start_with_vowel
                            ? data.junction_particules[starter_picker] 
                            : ""
            
                            
            const finisher = data.end_particules[finish_picker]
            
            const finish_join_picker = getRandom(0,data.junction_particules.length-1)

            const finish_joiner = (data.use_junction_particule)
                                ? data.junction_particules[finish_join_picker]
                                : ""


            for(let j = 0; j < rand_length; j++){

                //pick random num in junction
                const join_picker = getRandom(0,data.junction_particules.length-1)
                
                //picked joiner
                const joiner    = (data.use_junction_particule)
                                ? data.junction_particules[join_picker]
                                : ""

                //pick a random num in core
                const core_picker = getRandom(0,data.core_particules.length-1);

                //pick the core
                const core = data.core_particules[core_picker]

                //add the section to the name
                name += joiner + core

            }



            name += data.junction_particules[getRandom(0,data.junction_particules.length-1)] + finisher


            collection.push(name)

        }
        
        return collection
    }

    function getRandom(min = 0, max = 1) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // console.log(generateName())
    const names = generateName(data.iteration);

    

    return (
        <div className="mx-auto max-w-2xl flex flex-col gap-6">

            <Header/>

            {/* Preset list here */}

            {/* form */}
            <Form data={data} setData={setData} />

            {/* display */}
            {/* <div className='border-2 border-sky-600 rounded-lg bg-gray-100 max-h-96 overflow-y-scroll grid grid-cols-3'>
                {name_list}
            </div> */}

            <Display names={names}/>

        </div>
    );
}

export default App;
