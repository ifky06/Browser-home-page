import React, {useEffect,useState} from "react";
import {AiTwotoneSave} from "react-icons/ai";
import './Notes.css'

const Notes = () => {
    const [notes, setNotes] = useState('');

    const handleNotesChange = (event) => setNotes(event.target.value)
    const saveNotes = () => {
        localStorage.setItem('notes', notes);
    }

    useEffect(() => {
        const savedNotes = localStorage.getItem('notes');
        if (savedNotes) {
            setNotes(savedNotes);
        }
    }, []);

    return(
        <div className='d-flex flex-column rounded-0 align-middle w-100' >
            <div className="d-flex justify-content-between align-items-center p-2 bg-dark">
                <div className='d-flex align-items-center'>
                    <p className='fs-4 p-0 m-0 ps-2 '>Notes</p>
                </div>
                <div className='d-flex pt-1'>
                    <button id='saveButton' className='btn btn-light rounded-0' onClick={saveNotes}>
                        <AiTwotoneSave className='fs-5m text-black'/>
                    </button>
                    {/*<button className='bg-gray-50 hover:bg-gray-300 p-2 rounded-md' onClick={showNotes}>*/}
                    {/*    {*/}
                    {/*        (show) ? <BiShowAlt className='text-xl text-black'/> : <BiHide className='text-xl text-black'/>*/}
                    {/*    }*/}
                    {/*</button>*/}
                </div>
            </div>
            <textarea id='notesBox' className='c-textarea bg-dark bg-opacity-75 rounded-0 text-light p-2 border-0' rows='7'  spellCheck='false' value={notes}
                      onChange={handleNotesChange}/>
        </div>
    );

}

export default Notes;