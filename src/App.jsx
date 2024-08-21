function App() {
  const isColorBlue = true;

  console.log(isColorBlue ? "Es color Azul - ternario" : "No es color azul");
    

  return (
    isColorBlue ? <div>
      Es color Azul
    </div> : <div>No es color azul</div>
  )
}

export default App
