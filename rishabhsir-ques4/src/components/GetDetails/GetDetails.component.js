import {useNavigate} from 'react-router-dom'

const GetDetails=()=>{
    const navigate=useNavigate();

    const handleClick=()=>{
        navigate('/TakeDetails')
    }
    return(
        <div>
            <h1>I am on GetDetails</h1>
            <button onClick={handleClick}>Go to TakeDetails </button>
        </div>

    )
}
export default GetDetails;