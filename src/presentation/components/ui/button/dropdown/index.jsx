import React, { useState } from 'react'
import "./dropdown.scss"


const Dropdown = ({ name, options, value, className, onChange }) => {
    const [open, setOpen] = useState(false)
    
    const handleChange = (item) => {
        setOpen(false)
        onChange(item)
    }
    
    return (
        <div className={`dropdown-btn ${open && "open"} ${className}`}>
            <button 
                onClick={() => { setOpen(!open) }}
            >
                <div> 
                    <span className='name'>{name}</span> : <span>{value}</span>
                </div>
                <i className='fa fa-chevron-down'></i>
            </button>
            <div className='dropdown-list'>
                {options.map(
                    (item, key) =>
                        <div
                            key={key}
                            onClick={() =>{ handleChange(item) } }
                            className='dropdown-item'
                        >
                            {item}
                        </div>)}
            </div>
        </div>
    )
}

export default Dropdown