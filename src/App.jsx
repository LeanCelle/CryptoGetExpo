
import Body from './components/body';
import Navbar from './components/navbar';
import './styles/pages.css'; // Importa los estilos CSS

function Home() {

  return (
    <>
      <div className='body'>
        <Navbar/>
        <Body/>
      </div>
    </>
  );
}

export default Home;
