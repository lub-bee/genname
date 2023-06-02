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
        use_junction_particule: true,

        //particules used between core particules, generaly vowel, group of vowels or special char
        junction_particules: ["a","i","u","e","o","ou","oe","oë","ū"],        

        //particules used to start the name
        start_particules: [
            "b",
            "d","dw",
            "gr","g","gl",
            "o",
            "thr","th",
            "u",
            "w",
        ],

        //main particules of the name
        core_particules: [
            "dr",
            "f",
            "mb",
            "l","lr",
            "thr",
            "v",
        ],
        
        //particule used to the end of the name
        end_particules: [
            "i",
            "n","nd",
            "r","rh",
        ],

        iteration: 30,
    });


    return (
        <div className="mx-auto max-w-2xl flex flex-col gap-6">

            <Header/>

            {/* Preset list here */}

            {/* form */}
            <Form data={data} setData={setData} />

            {/* display */}
            <Display data={data}/>

        </div>
    );
}

export default App;
