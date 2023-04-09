import React,{useState} from "react";
import {gsap} from "gsap";
import {useDispatch,useSelector} from "react-redux";
import {setUsername, setCity} from "../redux";
import {FcSettings} from "react-icons/fc";
import './Setting.css';

const Setting = () => {
    const [rotate, setRotate] = useState(false);
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();
    const username = useSelector(state => state.username);
    const city = useSelector(state => state.city);
    const handleUsername = (event) => {
        localStorage.setItem('username', event.target.value);
        dispatch(setUsername(event.target.value));
    }

    const handleCity = (event) => {
        localStorage.setItem('city', event.target.value);
        dispatch(setCity(event.target.value));
    }

    const handleClick = () => {
        setRotate(!rotate);
        setShow(!show);
        if (show === false) {
            gsap.fromTo('#setting', {opacity:0 ,scaleY:0, display:'block'}, {opacity: 1, scaleY:1,transformOrigin:'bottom' , duration: 0.4});
        }else {
            gsap.fromTo('#setting', {opacity: 1, scaleY:1 , duration: 0.4}, {opacity:0 ,scaleY:0,transformOrigin:'bottom', display:'none'} );
        }
    }

    return (
        <>
            <div id='setting' className='position-fixed card border-light bg-dark c-setting p-2'>
                <div className='card position-absolute c-setting-arrow bg-dark rounded-0 border-light border-start-0 border-top-0'>
                </div>
                <div className='card-body pt-1'>
                    <h4 className='text-light'>Setting</h4>
                    <label className='form-label text-light w-100 text-start'>Username</label>
                    <input type='text' className='form-control bg-dark border-light text-light mb-2' placeholder='Username' onChange={handleUsername} value={username}/>
                    <label className='form-label text-light w-100 text-start'>City</label>
                    <input type='text' className='form-control bg-dark border-light text-light' placeholder='City' onChange={handleCity} value={city}/>
                </div>
            </div>

            <div className='position-fixed' style={{
                bottom: 20,
                right: 35,
            }}>
                <button className='btn btn-dark border-light py-2' onClick={handleClick}>
                    <FcSettings className={`c-setting-btn ${rotate ? 'c-rotate' : ''}`} style={{fontSize: '20pt'}}/>
                </button>
            </div>
        </>
    );
}

export default Setting;