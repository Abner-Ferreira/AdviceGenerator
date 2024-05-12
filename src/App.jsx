import { useContext } from 'react'
import './App.css'
import dividerDesktop from './assets/pattern-divider-desktop.svg'
import Box from './components/Box/Box'
import Dice from './components/Dice/Dice'
import Quotes from './components/Quotes/Quotes'
import Title from './components/Title/Title'
import { ContextAdvice } from './context/ContextAdvice'

function App() {

  const { quote, loading } = useContext(ContextAdvice)


  return (
    <>
      <Box>
        <Title title={quote ? quote.id : ""} />
        {
          loading ? <div className='loading'></div> : <Quotes quote={quote ? quote.advice : ""} />
        }
        
        <img src={dividerDesktop} alt="divider" />
      </Box>
      <div className="dice">
        <Dice />
      </div>
    </>
  )
}

export default App
