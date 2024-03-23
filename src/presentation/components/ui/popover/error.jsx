import React from 'react'

const ErrorPopover = ({ title, message, show }) => {
    return (
        <div className={`popover ${show && "show"} popover-error`}>
            <div className="popover-header">
                <span>{title}</span>
            </div>
            <div className="popover-body">
                <span>{message}</span>
            </div>
        </div>
    )
}

export default ErrorPopover