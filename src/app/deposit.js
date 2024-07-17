import React, {useRef, useEffect} from 'react'
import './globals.css'
import { X } from 'lucide-react';

function deposit({onClose}) {
    const modalRef = useRef();

    const closeModal = (e) => {
        if(modalRef.current === e.target){
            onClose();
        }
    }


  return (
    <div ref={modalRef} onClick={closeModal} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <div className='mt-10 flex flex-col gap-5 text-white'>
            <button onClick={onClose} className='place-self-end'>
                <X size={30}/>
            </button>
            <div className='bg-orange-600 rounded-xl px-20 py-20 flex flex-col gap-5 items-center mx-4'>
                <h1 className='text-3xl font-extrabold text-white'>DEPOSIT YOUR FUNDS</h1>
                <p className='text-3xl font-bold max-w-md text-center'></p>
                <form>
                    <input className='w-full px-4 py-3 text-black border-black rounded-md'></input>
                    <button className='mt-4 w-full flex item-center justify-center gap-2 px-5 py-3 font-medium rounded-md bg-black' >Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default deposit