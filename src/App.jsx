import ListBtn from "./components/ListBtn.jsx"
import lenguages from "./data/languages.js"
import style from "./App.module.css"


function App() {

  return (
    <>

        <h1 className={style.titolo}>Learn Web Developer</h1>
      <div className={style.container}>

        <ListBtn
          ArrayLeng={lenguages} />

      </div>

    </>
  )
}


export default App
