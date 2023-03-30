import React,{useState} from "react";
import './SearchBox.css';

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

    const handleGoogle = () => {
        window.location.href = `https://www.google.com/`;
    }


    return (
        <>
                <form onSubmit={handleSubmit}>
            <div className="input-group mb-3 mt-5 px-3">
                <span className="input-group-text bg-dark rounded-0 bg-opacity-75" id="basic-addon1" onClick={handleGoogle}>
                    <img src={'/images/googleIcon.png'} alt="G" width={20}/>
                    {/*<FaGoogle/>*/}
                </span>
                <input type="text" className="form-control bg-dark text-light  rounded-0 bg-opacity-75" placeholder="Ketikkan Sesuatu" aria-label="Username"
                       value={inputValue} onChange={handleInput} data-bs-toggle="dropdown" aria-expanded="true" />

                    <ul className="position-absolute bg-dark text-light" style={{
                        zIndex: 1,
                        width: '580px',
                        listStyle: 'none',
                        marginTop:'38px',
                        marginLeft:'46px',
                        padding: '0px',
                    }}>
                        <li className="mx-3 c-hover"><a className="dropdown-item p-1 border-bottom border-light text-start" href="#">Action</a></li>
                        <li className="mx-3 c-hover"><a className="dropdown-item p-1 border-bottom border-light text-start" href="#">Another action</a></li>
                        <li className="mx-3 c-hover"><a className="dropdown-item p-1 border-bottom border-light text-start" href="#">Something else here</a></li>
                        <li className="mx-3 c-hover"><a className="dropdown-item p-1 text-danger" href="#">Clear All</a></li>
                    </ul>
            </div>
                </form>
        </>

    );

}

export default SearchBox;