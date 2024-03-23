
const InfoPopover = ({ title, message, show }) => {
    return (
        <div className={`popover popover-info ${show && "show"}`}>
            <div className="popover-header">
                <span>{title}</span>
            </div>
            <div className="popover-body">
                <span>{message}</span>
            </div>
        </div>
    )
}

export default InfoPopover