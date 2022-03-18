import "./App.css";
import { ProspectPage } from "./pages/Prospects";
import { ProspectsScreenProvider } from "./providers/ProspectsScreenProvider";

const App = () => {
  return (
    <ProspectsScreenProvider>
      <ProspectPage />
    </ProspectsScreenProvider>
  );
};

export default App;
