import style from "./Main.module.css"
import AppButton from "./AppButtons.jsx"
import Bacheca from "./Bacheca.jsx"
import { useState } from "react"


const ListBtn = ({ ArrayLeng }) => {

    const [activeLeng, setActiveLeng] = useState(null)

    return (
        <>
            <div className="sezioneBottoni">
                {ArrayLeng.map((curLeng) =>
                    <AppButton
                        key={curLeng.id}
                        text={curLeng.title}
                        funzione = {() => 
                            setActiveLeng(curLeng.id)
                            
                        }
                         />
                )}
            </div>
            <div className="sezioneBachca">
                {ArrayLeng.map((curLeng) =>
                    <Bacheca
                        key={curLeng.id}
                        title={curLeng.title}
                        text={curLeng.description}
                        open={curLeng.id === activeLeng} 

                        />
                )}
            </div>
        </>
    )
}

export default ListBtn
