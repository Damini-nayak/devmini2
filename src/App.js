import './style/App.css';
import './style/var.css';
import AppRoutes from './Routes'
import { useEffect } from "react";
import { fairyDustCursor } from "cursor-effects";

function App() {

  useEffect(() => {
    new fairyDustCursor({
      colors: ["#FFD710", "#569CD6", "#64C991", "#CE9178", "#FDF8F8"],
    });
  }, []);

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
