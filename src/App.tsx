import { BrowserRouter } from "react-router-dom";
import { RoutesApp } from "./routes";
import { GlobalTheme } from "./styles/global";

export function App() {
  return (
    <BrowserRouter>
      <RoutesApp />
      <GlobalTheme />
    </BrowserRouter>
  );
}

export default App;
