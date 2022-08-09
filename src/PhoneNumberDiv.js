
import PhoneNumber from './PhoneNumberInput'
import Title from './Title'
import SubTitle from './SubTitle'

function PhoneNumberDiv(){
    return <div className="phoneNumberDiv">
        <div className="TitleDiv">
            <Title/>
            <SubTitle/>
        </div>
        <PhoneNumber/>
    </div>
}

export default PhoneNumberDiv