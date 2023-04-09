import React,{useState} from "react";
import './SearchBox.css';
import googleIcon from './../assets/googleIcon.png';

const SearchBox = () => {
    const [inputValue, setInputValue] = useState('');

    const getHistory = () => JSON.parse(localStorage.getItem('history'));
    const handleInput = (event) => {
        // event.preventDefault();
        setInputValue(event.target.value);
        // window.location.href = `https://www.google.com/search?q=${inputValue}`;

    }
    const handleSubmit = (event) => {
        event.preventDefault();

        if (getHistory()===null) {
            localStorage.setItem('history', JSON.stringify([inputValue.toLowerCase()]));
        }else if (getHistory().find(item => item === inputValue.toLowerCase()) === undefined){
            localStorage.setItem('history', JSON.stringify([inputValue.toLowerCase(), ...getHistory()]));
        }

        window.location.href = `https://www.google.com/search?q=${inputValue.replace(/\s+/g, "+")}`;
    }

    const handleGoogle = () => {
        window.location.href = `https://www.google.com/`;
    }

    const handleKeydown = (event) => {
        if (event.keyCode === 13 && (inputValue !== '')) {
            handleSubmit(event);
        }
    }
    //
    const suggestions = () => {
        if (getHistory() != null && inputValue !== '') {
            let count = 0;
            let list = [];
            for (let i = 0; i < getHistory().length; i++) {
                if (count > 4) break;
                if (getHistory()[i].includes(inputValue.toLowerCase()) || inputValue === '') {
                    list.push(<li className="mx-3 c-hover" key={i} onClick={setInputValue.bind(this, getHistory()[i])}>
                        <a
                            className="dropdown-item p-1 border-bottom border-light text-start">{getHistory()[i]}</a>
                    </li>)
                    // list.push(<li className='cursor-pointer' key={i} onClick={setInputValue.bind(this, item)}>{item}</li>);
                    count++;
                }
            }
            if (count > 0) list.push(<li key={91} className="mx-3 c-hover" onClick={() => {
                localStorage.setItem('history', null)
                setInputValue('')
            }}><a className="dropdown-item p-1 text-danger" href="#">Clear All</a></li>);
            return <>{list}</>
        }
    }

    return (
        <>
                <form onSubmit={handleSubmit}>
            <div className="input-group mb-3 mt-5 px-3">
                <span className="input-group-text bg-dark rounded-start-1 bg-opacity-75" id="basic-addon1" onClick={handleGoogle}>
                    <img src={googleIcon} alt="G" width={20}/>
                    {/*<FaGoogle/>*/}
                </span>
                <input type="text" className="form-control bg-dark text-light rounded-end bg-opacity-75" placeholder="Ketikkan Sesuatu" aria-label="Username"
                       value={inputValue} onChange={handleInput} onKeyDown={handleKeydown} data-bs-toggle="dropdown" aria-expanded="true" />

                    <ul className="position-absolute bg-dark text-light" style={{
                        zIndex: 1,
                        width: '580px',
                        listStyle: 'none',
                        marginTop:'38px',
                        marginLeft:'46px',
                        padding: '0px',
                    }}>
                        {
                            // (getHistory() != null && inputValue !== '')? suggestions() : null
                            suggestions()
                        }
                    </ul>
            </div>
                </form>
        </>

    );

}

export default SearchBox;