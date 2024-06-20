import { BrowserRouter } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import AppRoutes from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <AppRoutes />
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
