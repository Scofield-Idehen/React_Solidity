import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import services from "./components/Services";


const App = () => {


  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />

      </div>
      <Services />
      <Transactions />
      <Footer />

    </div>
  );
}

export default App
