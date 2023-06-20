import { BrowserRouter } from "react-router-dom";
import { RoutesApp } from "./routes";
import { GlobalTheme } from "./styles/global";
import { AppProvider } from "./hooks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />
        <RoutesApp />
      </AppProvider>
      <GlobalTheme />
    </BrowserRouter>
  );
}

export default App;
