import React,{useState} from "react";
import './SearchBox.css';

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

        if (getHistory().find(item => item === inputValue.toLowerCase()) === undefined) {
            if (getHistory()===null) {
                localStorage.setItem('history', JSON.stringify([inputValue.toLowerCase()]));
            }else {
                localStorage.setItem('history', JSON.stringify([...getHistory(), inputValue.toLowerCase()]));
            }
        }

        window.location.href = `https://www.google.com/search?q=${inputValue.replace(/\s+/g, "+")}`;
    }

    const handleGoogle = () => {
        window.location.href = `https://www.google.com/`;
    }
    //
    const suggestions = () => {
        if (getHistory() != null && inputValue !== '') {
            let count = 0;
            return getHistory().map((item, index) => {
                let list = [];
                if (item.includes(inputValue.toLowerCase()) || inputValue === '') {
                    list.push(<li className="mx-3 c-hover" key={index} onClick={setInputValue.bind(this, item)}><a
                        className="dropdown-item p-1 border-bottom border-light text-start">{item}</a></li>)
                    // list.push(<li className='cursor-pointer' key={index} onClick={setInputValue.bind(this, item)}>{item}</li>);
                    count++;
                }
                if (index === getHistory().length - 1 && count > 0) {
                    list.push(<li key={index + 1} className="mx-3 c-hover" onClick={() => {
                        localStorage.setItem('history', null)
                        setInputValue('')
                    }}><a className="dropdown-item p-1 text-danger" href="#">Clear All</a></li>);
                }
                console.log(count)
                return (<>{list}</>);
            })
        }else {
            return null
        }
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