import style from "./ListBtn.module.css"

const Bacheca = ({ title, text, open }) => {

    return (
    
    <>
        {open && <div className={style.bachecaItem}>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>}
    </>
    
)

}

export default Bacheca