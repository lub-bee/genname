import React, { useState } from 'react';

const Clipboard = ({children, text, t}) => {

    const [copied, setCopied] = useState(false);
    const [click, setClick] = useState(0);

    const handleCopyClick = () => {
        setClick(click+1)
        navigator.clipboard.writeText(text)
            .then(() => {
                setCopied(true)
                setTimeout(() => setCopied(false),500)
            })
            .catch(()=>{
                console.error('Copy Failed')
            })
    }

    return (
        <div className='cursor-pointer' onClick={handleCopyClick} title={t("Copy to clipboard")}>
            
            <div className=''>{children}</div>

            <div className='clipboard relative'>
                {copied && <div className='absolute z-10 left-[120%] bottom-0 bg-slate-500 w-20 text-transparent px-2 rounded animate-ping'>c</div>}
                {copied && <div className='absolute z-10 left-[120%] bottom-0 bg-slate-500 w-20 text-white px-2 rounded normal-case text-center'>
                    {t("Copied")}
                </div>}
            </div>

        </div>
    );
}

export default Clipboard;
