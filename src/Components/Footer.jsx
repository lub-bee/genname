import React from 'react';

const Footer = () => {
    return (
        <div className='flex gap-6 uppercase tracking-widest text-sm justify-center items-center'>
            <a className='' href="https://github.com/lub-bee/genname"> 
                <i className='fa-brands fa-github'></i> Github
            </a>
            <div className=''>
                 <i className='fa-regular fa-copyright'></i> Lubbee 2023
            </div>
            <div className=''>
                Version 1.0
            </div>
        </div>
    );
}

export default Footer;
