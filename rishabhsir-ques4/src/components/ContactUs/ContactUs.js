import {useNavigate} from 'react-router-dom'

const ContactUsPage=()=>{
    const navigate=useNavigate();

    const handleClick=()=>{
        navigate('/GetDetails')
    }
    return(
        <div>
            <h1>I am on ContactUsPage</h1>
            <button onClick={handleClick}>Go to GetDails Page </button>
        </div>

    )
}
export default ContactUsPage;