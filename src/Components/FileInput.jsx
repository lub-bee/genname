import React, { useRef } from 'react';

function FileInput({ onFileRead, t }) {
    const fileInputRef = useRef(null);
    
  
    const handleClick = () => {
        fileInputRef.current.click();
    };
  
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
    
        reader.onload = (e) => {
            const fileContent = e.target.result;
            const jsonData = JSON.parse(fileContent);
    
            // Pass the parsed JSON data to the callback function
            onFileRead(jsonData);
        };
    
        reader.readAsText(file);
    };
  
    return (
        <div onClick={handleClick} className='btn flex-1'>
            <i className='fa-solid fa-file-import text-base'></i> {t("Import")}
            <input
                type="file"
                accept=".json"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }}
                />
        </div>
    );
}

export default FileInput;
