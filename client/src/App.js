import { Navbar } from "./components/navbar";
import { Body } from "./components/body";
import { Services } from "./components/services";
import { Transactions } from "./components/transactions";
function App() {
  return (
    <div className="gradient-bg-welcome min-w-[520px]">
		  <Navbar/>
      <Body/>
      <Services/>
      <Transactions/>
    </div>
  );
}

export default App;
