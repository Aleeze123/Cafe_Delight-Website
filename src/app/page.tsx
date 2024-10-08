import Navbar from '../components/Navbar';
import Link from 'next/link';
import './home.css'; 
import About from './about/page';
import Menu from './menu/page';
import Contact from './contact/page';
const Home = () => {
  return (
    <>
      <Navbar />
      <main className="home-container">
        <div className="content">
          <h1>Welcome to Café Delight!</h1>
          <p>Your cozy spot for delightful coffee.</p>
          <Link href="/menu">
            <button className="explore-button">Explore Our Menu</button>
          </Link>
        </div>
     
      </main>
      <About/>
      <Menu/>
      <Contact/>
    </>
  );
};

export default Home;
