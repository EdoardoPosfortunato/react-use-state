const AppButton = ({ text, funzione }) => {

    return (

        <button
            onClick={funzione} >
            {text}
        </button>)

}

export default AppButton