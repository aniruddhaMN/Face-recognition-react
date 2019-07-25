import React from 'react';
import './imageLinkform.css';

const ImageLinkForm = ({onInputChange,onButtonSubmit}) =>{
    return(
        <div> 
            <p className='f3'>
                {'This application detects the faces in your picture'}
            </p>  
            <div className = 'centre'>
                <div className = 'form centre pa4 br3 shadow-1'>                
                    <input className = 'centre f4 pa2 w-70 centre' type = 'text' onChange = {onInputChange}/>
                    <button 
                        className = 'w-30 grow f4 ph3 pv2 dib white bg-orange' 
                        onClick = {onButtonSubmit}    
                    >Upload</button>
                </div>
            </div>    
        </div>
    );
}

export default ImageLinkForm;