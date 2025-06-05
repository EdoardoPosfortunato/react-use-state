const Bacheca = ({ title, text, open }) => {

    return (
    
    <div>
    <div>
        {open && <div className="singolaBacheca">
            <h2>{title}</h2>
            <p>{text}</p>
        </div>}
    </div>
    </div>
)

}

export default Bacheca