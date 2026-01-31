import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { HowWeWork } from "./pages/HowWeWork";
import { Thinking } from "./pages/Thinking";
import { About } from "./pages/About";
import { Manifesto } from "./pages/Manifesto";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/thinking" element={<Thinking />} />
          <Route path="/about" element={<About />} />
          <Route path="/manifesto" element={<Manifesto />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
