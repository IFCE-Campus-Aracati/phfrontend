import { BrowserRouter } from "react-router-dom";
import { RoutesApp } from "./routes";
import { GlobalTheme } from "./styles/global";
import { AppProvider } from "./hooks";

export function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <RoutesApp />
      </AppProvider>
      <GlobalTheme />
    </BrowserRouter>
  );
}

export default App;
