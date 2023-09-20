import React, { useState, useEffect } from 'react';

const Modal = ({isVisible, onClose, children}) => {
if (!isVisible) return null

const handleClose = (e) => {
    if(e.target.id === 'wrapper' ) onClose();
}


    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id="wrapper" onClick={handleClose}>
        <div className="w-[600px] flex flex-col">
          <div className="bg-[#bee2b1] p-3 flex justify-between">
            <div>More Info</div>
            <button className="text-black text-xl" onClick={() => onClose(false)}>
              X
            </button>
          </div>
          <div className="bg-white p-4 rounded">
            {children}
          </div>
        </div>
      </div>

    )
}

export default Modal