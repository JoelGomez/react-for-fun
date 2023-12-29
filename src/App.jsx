import {Btn} from './components/Btn'

function App() {
  
  const obj = [{
    nombre: 'David',
    edad: 14
  },
  {
    nombre: 'Alejandra',
    edad: 9
  },
  {
    nombre: 'Nadia',
    edad: 35
  }
]

  return (
    <>
      <Btn data= {obj}/>

    </>
  )
}

export default App
