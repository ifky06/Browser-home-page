import React, {useEffect, useState} from "react";
import {gsap} from "gsap";
import './AskGPT.css'

const AskGPT = () => {
    const [pic, setPic] = useState('/images/AskGPT/Unactive.png');
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(false);

    const changePic = () => {
        setPic('/images/AskGPT/Active.png');
        gsap.fromTo('#dialogue', {opacity: 0, display: 'block'}, {opacity: 1, duration: 0.4});
    }
    const changePicBack = () => {
        setPic('/images/AskGPT/Unactive.png');
        gsap.fromTo('#dialogue', {opacity: 1}, {opacity: 0, display: 'none', duration: 0.4});
    }

    useEffect(() => {
        const date = new Date();
        const day = date.getDate();
        const savedDate = localStorage.getItem('date');
        if (savedDate === day.toString() || savedDate === null) {
            const savedCount = localStorage.getItem('count');
            if (savedCount) {
                setCount(parseInt(savedCount));
            }
        }
    }, []);

    useEffect(() => {
        if (count % 5 === 0 && show === true) {
            // console.log('PPPPPP');
            gsap.fromTo('#popup', {opacity: 0, y: '-100%', display: 'flex'}, {opacity: 1, y: '0', duration: 0.4});
            return;
        }

    }, [count, show]);

    const handleClick = () => {
        setCount(count + 1);
        localStorage.setItem('count', (count + 1).toString());
        localStorage.setItem('date', new Date().getDate().toString());
        if (count % 5 === 4 && count !== 0) {
            setShow(true);
            // return;
        } else {
            window.open('https://chat.openai.com/chat/', '_blank');
            // console.log('PPPPPP');
        }
    }

    const handlePopup = () => {
        setShow(false);
        gsap.fromTo('#popup', {opacity: 1, y: '0', duration: 0.4}, {opacity: 0, y: '-100%', display: 'none'});
        setTimeout(() => {
            window.open('https://chat.openai.com/chat/', '_blank');
        }, 500);
    }

    return (
        <>
            <div id='dialogue' className='position-fixed card border-light bg-dark c-dialogue p-2'>
                <div
                    className='card position-absolute c-dialogue-arrow bg-dark rounded-0 border-light border-start-0 border-top-0'>
                </div>
                Sepertinya kamu ingin bertanya sesuatu
            </div>

            <div className='text-start'>
                <img src={pic} width={200} alt='AskGPT' onMouseOver={changePic} onMouseOut={changePicBack}
                     onClick={handleClick}/>
            </div>

            <div
                className='position-fixed top-0 start-0 bg-dark bg-opacity-50 justify-content-center align-items-center'
                id='popup'
                style={{display: 'none', zIndex: 3, width: '100%', height: '100%'}}>
                <div className='card text-start bg-dark rounded-0 border-light'
                     style={{
                         width: '80%',
                         height: '80%',
                     }}>
                    <div className='card-body h-100 d-flex justify-content-center align-items-center flex-column'>
                        <img src={'/images/AskGPT/FAQ.png'} width={400} alt='AskGPT' onClick={handlePopup}/>
                        <h5 className='card-title align-middle'>Tanya Mulu Bang, udah {count} kali lo Hari Ini</h5>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AskGPT;