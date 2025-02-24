import { Helmet } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { Banner, NavBar, Footer } from "./components/gen_layout_comps";
import { Router } from "./routes/Router";

function App() {

  return (
    <div className="flex flex-col h-screen">
      <BrowserRouter>
        <header>
          <Banner />
          <NavBar />
        </header>
        <Helmet>
          <title>
            Max Repair - iPhone, Cell Phone and Laptop Repair Store in Port
            Credit Mississauga
          </title>
          <meta
            name="description"
            content="iPhone, Cell Phone, MacBook, and Laptop Repair Store in Port Credit Mississauga"
          />
          <link rel="canonical" href="/" />
        </Helmet>
        <main className="flex-grow mt-[150px] sm:mt-[120px] lg:mt-[100px]">
          <Router />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;