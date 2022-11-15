import './global.css'
import  styles from './App.module.css'

import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from './components/Sidebar'

function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>   
        <Sidebar/>  
        <main>
          <Post 
            autor=" Junio Batista da Silva"
            content="O Junio é um viadinho pao com oovo."
          />
        </main>
      </div>
    </div>
  )
}

export default App
