import { useEffect, useState } from "react";
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

    // const [names, setNames] = useState(generateName(data.iteration));

    

    const handleRegen = (key = false) => {
        if(key){
            //regen one


        } else {
            //regen all
        }
    }



    // console.log(generateName())
    // const names = generateName(data.iteration);

    return (
        <div className="mx-auto max-w-2xl flex flex-col gap-6">

            <Header/>

            {/* Preset list here */}

            {/* form */}
            <Form data={data} setData={setData} />

            {/* display */}
            <Display data={data} handleRegen={handleRegen}/>

        </div>
    );
}

export default App;
