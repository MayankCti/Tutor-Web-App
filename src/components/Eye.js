import React from 'react'

const Eye = ({ isEye, onClick }) => {
    return (
        <div>
            <i className={`fa-regular ${!isEye ? 'fa-eye-slash' : 'fa-eye'} ct_eye_top`} onClick={onClick}></i>
        </div>
    )
}

export default Eye;