import Selector from "../Selector/Selector";
import "./AppContainer.css";

function AppContainer() {
  return (
    <div className="AppContainer">
      <header className="AppContainer-header">
        <Selector />
      </header>
    </div>
  );
}

export default AppContainer;
