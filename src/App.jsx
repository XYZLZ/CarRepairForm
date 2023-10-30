import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const RepairForm = lazy(() => import("./components/LayoutForm"));
const PDF = lazy(() => import("./components/DocPDF"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-screen">
            <h2>Cargando...</h2>
          </div>
        }
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={RepairForm} />
            <Route path="/pdf" Component={PDF} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
