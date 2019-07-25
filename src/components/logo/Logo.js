import React from 'react';
import Tilt from 'react-tilt';
import logoOnCreators from './logoOnCreators.png';

const Logo = () =>{
    return(
        <div>   
            <Tilt className="Tilt ma5 pa0" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner"> 
                    <img alt = '' src = {logoOnCreators}/>
                </div>
            </Tilt>
        </div>    
    );
}

export default Logo;