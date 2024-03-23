import React, { useState } from 'react'

const Input = ({ value, placeholder, onChange, readOnly }) => {
    return (
        <div className=''>
            <input value={value} onChange={onChange} readOnly={readOnly || false} type="text" className='input-form' placeholder={placeholder} />
        </div>
    )
}

export default Input