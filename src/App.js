import { useState } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Display from "./Components/Display";
import Footer from "./Components/Footer";
import PresetMenu from "./Components/PresetMenu";
import presets_data from './Preset.json';
import useLocalization from './Hooks/useLocalization';

function App() {

    const {t, setLocal, language} = useLocalization("fr");
    const [data, setData] = useState({...presets_data[0]["presets"][0], iteration:30});

    return (
        <div className="mx-auto max-w-2xl md:max-w-full flex flex-col gap-6">

            <Header t={t} setLocal={setLocal} language={language}/>

            <div className='relative h-10 -ml-6'>
                <PresetMenu setData={setData} data={data} t={t}/>
            </div>

            <div className='flex flex-col lg:flex-row sm:gap-6'>

                {/* form */}
                <Form data={data} setData={setData} t={t}/>

                {/* display */}
                <Display data={data} t={t}/>
            
            </div>

            <Footer />
        </div>
    );
}

export default App;
