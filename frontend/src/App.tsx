import "./App.css";
import FreeShippingBanner from "./components/FreeDeliveryBanner";

import Navbar from "./components/Navbar";

import Hero from "./components/Hero";

function App() {
  return (
   <div className="min-h-screen bg-background text-primary">
  <FreeShippingBanner />
  <Navbar />
  <Hero />

  <main className="pt-12 flex items-center justify-center h-screen">
    <h1 className="text-4xl tracking-widest">
      VINOTHÈQUE
    </h1>
  </main>
</div>

  );
}

export default App;
