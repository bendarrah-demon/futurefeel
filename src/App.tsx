import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { Home } from "./pages/Home";
import { Kin } from "./pages/Kin";
import { Apps } from "./pages/Apps";
import { Notes, Note } from "./pages/Notes";
import { Privacy } from "./pages/Privacy";
import { NotFound } from "./pages/NotFound";

// Pages that cite sources carry the full reference list, so they load on demand.
const Purpose = lazy(() => import("./pages/Purpose").then((m) => ({ default: m.Purpose })));
const Sources = lazy(() => import("./pages/Sources").then((m) => ({ default: m.Sources })));
const About = lazy(() => import("./pages/About").then((m) => ({ default: m.About })));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div className="min-h-[60vh]" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kin" element={<Kin />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/:slug" element={<Note />} />
          <Route path="/purpose" element={<Purpose />} />
          <Route path="/sources" element={<Sources />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          {/* Old addresses (also redirected in vercel.json) */}
          <Route path="/products" element={<Navigate to="/apps" replace />} />
          <Route path="/how-we-work" element={<Navigate to="/about#how-we-work" replace />} />
          <Route path="/thinking" element={<Navigate to="/purpose" replace />} />
          <Route path="/manifesto" element={<Navigate to="/purpose" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
