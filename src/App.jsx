import Hero from './Hero';
import Navbar from './Navbar';
import Catalogo from './Catalogo';
import Nosotros from './Nosotros';
import Contacto from './Contacto';  



export default function App() {
  return (
    <div className="minh-screen bg-zinc-950 text-zinc-100 pt-20">
      <Navbar />
      <Hero />
      <Catalogo />
      <Nosotros />
      <Contacto />
     
    </div>
  );
}
  