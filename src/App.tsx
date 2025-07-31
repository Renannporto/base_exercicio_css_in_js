import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Header />
        <Hero />
        <main>
          <ListaVagas />
        </main>
      </Container>
    </>
  )
}

export default App
