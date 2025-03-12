import './App.css'
 
import NavBar from './components/layout/NavBar'
import Container from './components/layout/Container'
 
function App() {
 
  return (
    <>
      <div>
 
        <NavBar />
 
        <Container>
          <img className='book_home' src="./book_home.jpg" alt="" />
        </Container>
 
      </div>
    </>
  )
}
 
export default App