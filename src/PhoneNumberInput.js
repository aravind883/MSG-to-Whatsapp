import {ReactComponent as WhatsappLogo} from './icons/whatsapp.svg';
import CountriesDDList from './Countries'

import { useState } from 'react';

function PhoneNumber(){
    function goToWhatsapp(){
        let number = document.getElementById("phoneNumber").value;
        window.location = "https://wa.me/" + number
    }

    function showCountriesDD(){
        document.getElementById("phoneNoDropDownDiv").classList.add("show");
    }
    
    function hideCountriesDD(){
        document.getElementById("phoneNoDropDownDiv").classList.remove("show");
    }
    
    function searchCountry(e){    
        setSearchTerm(e.target.value);
        document.getElementById("phoneNoDropDownDiv").classList.add("show");
    }

    let [searchTerm, setSearchTerm] = useState(null);

    return <div className="phoneNumberInnerDiv">
        <div id="phoneNoDropDownDiv">
            <input type="text" id="phoneNumber" className="phoneNumberInputs" placeholder="Enter Country Name or Code" onFocus={showCountriesDD} onBlur={hideCountriesDD} onChange={searchCountry}/>
            {searchTerm != null && (
                <CountriesDDList searchTerm={searchTerm}/>
            )}
        </div>
        <button onClick={goToWhatsapp} id="phoneNoButton" className="phoneNumberInputs">
            <span>
                <WhatsappLogo/>
            </span>
            Chat
        </button>
    </div>
}

export default PhoneNumber