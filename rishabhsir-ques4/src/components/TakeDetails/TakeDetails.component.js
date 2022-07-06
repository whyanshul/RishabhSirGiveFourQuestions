import {useNavigate} from 'react-router-dom'

const TakeDetails=()=>{
    const navigate=useNavigate();

    const handleClick=()=>{
        navigate('/')
    }
    return(
        <div>
            <h1>I am on TakeDetails</h1>
            <button onClick={handleClick}>Go to HomePage</button>
        </div>

    )
}
export default TakeDetails;