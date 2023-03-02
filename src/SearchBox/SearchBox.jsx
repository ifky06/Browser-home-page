import React,{useState,useEffect} from "react"
// import { faGoogle} from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';


const SearchBox = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInput = (event) => {
        // event.preventDefault();
        setInputValue(event.target.value);
        // window.location.href = `https://www.google.com/search?q=${inputValue}`;
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        window.location.href = `https://www.google.com/search?q=${inputValue.replace(/\s+/g, "+")}`;
    }


    return (
        <>
                <form onSubmit={handleSubmit}>
            <div className="input-group mb-3 mt-5">
                <span className="input-group-text bg-dark rounded-0 bg-opacity-75" id="basic-addon1">
                    <img src={'/images/googleIcon.png'} alt="G" width={20}/>
                </span>
                <input type="text" className="form-control bg-dark text-light rounded-0 bg-opacity-75" placeholder="Ketikkan Sesuatu" aria-label="Username"
                       value={inputValue} onChange={handleInput} />
            </div>
                </form>
        </>

    );

}

export default SearchBox;