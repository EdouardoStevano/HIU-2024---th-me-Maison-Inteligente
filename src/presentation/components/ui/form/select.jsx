import React, { useState } from 'react'


const DropdownButton = ({ title, value, onChange, options }) => {
    const [open, setOpen] = useState(false)

    const handleChange = (value) => {
        onChange(value)
        setOpen(false)
    }

    return (
        <div className={`dropdown-button ${open ? 'open' : ''}`}>
            <div onClick={() => { setOpen(!open) }} className='dropdown-title'>
                <div className='dropdown-body'>
                    <span className=''>{title}: </span>
                    <span className='selected'> {value.name}</span>
                </div>
                <div className='dropdown-icon'>
                    <i className='fa fa-sort-desc'></i>
                </div>
            </div>
            <div className='dropdown-list'>
                {
                    options.map(
                        (item, key) => <div key={key} onClick={() => {handleChange(item)}} className='dropdown-item'>{item.name}</div>)
                }
            </div>
        </div>
    )
}


export const DropdownButtonSimple = ({ title, value, onChange, options }) => {
    const [open, setOpen] = useState(false)

    const handleChange = (value) => {
        onChange(value)
        setOpen(false)
    }

    return (
        <div className={`dropdown-button ${open ? 'open' : ''}`}>
            <div onClick={() => { setOpen(!open) }} className='dropdown-title'>
                <div className='dropdown-body'>
                    <span className=''>{title}: </span>
                    <span className='selected'> {value}</span>
                </div>
                <div className='dropdown-icon'>
                    <i className='fa fa-sort-desc'></i>
                </div>
            </div>
            <div className='dropdown-list'>
                {
                    options.map(
                        (item, key) => <div key={key} onClick={() => {handleChange(item)}} className='dropdown-item'>{item}</div>)
                }
            </div>
        </div>
    )
}

export default DropdownButton