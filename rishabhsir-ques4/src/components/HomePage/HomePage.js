import {useNavigate} from 'react-router-dom'

const HomePage=()=>{
    const navigate=useNavigate();

    const handleClick=()=>{
        navigate('/contact-us')
    }
    return(
        <div>
            <h1>I am on HomePage</h1>
            <button onClick={handleClick}>Go to contact us Page</button>
        </div>

    )
}
export default HomePage;