import React, { useState } from 'react';

const HelpModal = ({setOpenHelp, t}) => {

    const [particuleMode, setParticuleMode] = useState("composition");
    const [particule, setParticule] = useState(false);

    const handleShow = (selected) => {
        setParticule(selected)
    }

    return (
        <div className='h-screen w-full absolute left-0 top-0 flex justify-center items-center' >

            <div className='fixed h-screen bg-black/40 w-full z-40' onClick={()=>setOpenHelp(false)}></div>

            <div className='fixed max-h-full overflow-y-scroll sm:overflow-hidden flex flex-col w-full sm:w-fit z-50'>
                <div className='mx-auto border border-slate-600 sm:rounded-lg overflow-hidden min-w-[300px] sm:max-w-md'>

                    <header className='border-b border-slate-600 bg-slate-700 text-white px-4 py-2 flex justify-between'>
                        <div className=''>
                            {t("Help")}
                        </div>
                        <div className='cursor-pointer' onClick={()=>setOpenHelp(false)}>
                            <i className='fa-solid fa-times'></i> {t("Close")}
                        </div>
                    </header>

                    <main className='p-4 bg-white'>
                        <div className='text-justify mb-4'>
                            {t("help_content_1")}
                        </div>
                        <div className=' mb-4'>
                            {t('help_content_2')}
                        </div>
                        <div className='flex gap-2'>
                            <div className='flex flex-col gap-2'>
                                <div className='h-10 w-2'>
                                    
                                </div>
                                <div className={'px-2 py-1 cursor-pointer hover:bg-slate-600 hover:text-white' + (particuleMode == "composition" ? " bg-slate-700 text-white" : " bg-gray-300")}
                                    onClick={()=>setParticuleMode("composition")}>
                                    Composition
                                </div>
                                <div className={'px-2 py-1 cursor-pointer hover:bg-slate-600 hover:text-white' + (particuleMode == "association" ? " bg-slate-700 text-white" : " bg-gray-300")}
                                 onClick={()=>setParticuleMode("association")}>
                                    Association
                                </div>
                            </div>

                            <div className='flex flex-col'>
                                <div className='flex sm:gap-2'>
                                    <button className='bg-blue-100 px-2 py-1' onMouseEnter={()=>handleShow("start")}><span className='text-blue-500 font-bold'>{t("S_tart")}</span>{t("s_TART")}</button>
                                    <button className='bg-purple-100 px-2 py-1' onMouseEnter={()=>handleShow("junction")}><span className='text-purple-500 font-bold'>{t("J_unction")}</span>{t("j_UNCTION")}</button>
                                    <button className='bg-green-100 px-2 py-1' onMouseEnter={()=>handleShow("core")}><span className='text-green-500 font-bold'>{t("C_ore")}</span>{t("c_ORE")}</button>
                                    <button className='bg-red-100 px-2 py-1' onMouseEnter={()=>handleShow("end")}><span className='text-red-500 font-bold'>{t("E_nd")}</span>{t("e_ND")}</button>
                                </div>
                                {particuleMode == "composition" && <div className='flex h-20 mt-2 p-4 text-xl justify-center items-center border rounded-lg'>
                                    <div className={(particule=="start"?"text-blue-500 bg-blue-100 font-bold px-1":"")}>G</div>
                                    <div className={(particule=="junction"?"text-purple-500 bg-purple-100 font-bold px-1":"")}>a</div>
                                    <div className={(particule=="core"?"text-green-500 bg-green-100 font-bold px-1":"")}>l</div>
                                    <div className={(particule=="junction"?"text-purple-500 bg-purple-100 font-bold px-1":"")}>a</div>
                                    <div className={(particule=="core"?"text-green-500 bg-green-100 font-bold px-1":"")}>dr</div>
                                    <div className={(particule=="end"?"text-red-500 bg-red-100 font-bold px-1":"")}>ielle</div>
                                </div>}
                                {particuleMode == "association" && <div className='flex h-20 mt-2 p-4 text-xl justify-center items-center border rounded-lg'>
                                    <div className={(particule=="start"?"text-blue-500 bg-blue-100 font-bold px-1":"")}>Black</div>
                                    <div className={(particule=="end"?"text-red-500 bg-red-100 font-bold px-1":"")}>Widow</div>
                                </div>}

                            </div>
                        </div>
                        <div className='mt-8 border rounded-lg overflow-hidden'>
                            {particuleMode == "composition" && <div className=''>
                                <div className='bg-gray-200 py-2 px-4'>{t("pros")}</div>
                                <div className='px-4 py-2 flex flex-col gap-1'>
                                    <div className=''>
                                        {t("pro_1_1")}
                                    </div>
                                    <div className=''>
                                        {t("pro_1_2")}
                                    </div>
                                </div>
                                <div className='bg-gray-200 py-2 px-4'>{t("cons")}</div>
                                <div className='px-4 py-2 '>
                                    {t("con_1_1")}
                                </div>
                                    
                            </div>}
                            {particuleMode == "association" && <div className=''>
                                <div className='bg-gray-200 py-2 px-4'>
                                    {t("pros")}
                                </div>
                                <div className='px-4 py-2 '>
                                    {t("pro_2_1")}
                                </div>
                                <div className='bg-gray-200 py-2 px-4'>
                                    {t("cons")}
                                </div>
                                <div className='px-4 py-2 flex flex-col gap-1'>
                                    <div className=''>
                                        {t("con_2_1")}
                                    </div>
                                    <div className=''>
                                        {t("con_2_2")}
                                    </div>
                                </div>
                            </div>}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default HelpModal;
