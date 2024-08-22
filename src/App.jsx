import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <ChakraProvider>
      <Navbar />
      <ItemListContainer greeting="Hello Stranger, ¿What are you Buying?"/>
    </ChakraProvider>
  )
}

export default App
