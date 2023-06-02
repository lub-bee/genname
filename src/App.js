import { useState } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Display from "./Components/Display";
import Footer from "./Components/Footer";

function App() {

    const [data, setData] = useState({
        
        //particules used between core particules, generaly vowel, group of vowels or special char
        use_junction_particule: true,
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

        //central particule(s) of the name
        use_core_particule: true,
        min_core_iteration: 0,
        max_core_iteration: 3,
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
        <div className="mx-auto max-w-2xl md:max-w-full flex flex-col gap-6">

            <Header/>

            {/* Preset list here */}

            <div className='flex flex-col lg:flex-row sm:gap-6'>

                {/* form */}
                <Form data={data} setData={setData} />

                {/* display */}
                <Display data={data}/>
            
            </div>

            <Footer />
        </div>
    );
}

export default App;
