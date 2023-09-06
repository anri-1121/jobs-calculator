import "./App.css";
import Form from "./components/Form/Form";
import { JobProvider } from "./context/JobContext";

function App() {
  return (
    <JobProvider>
      <div className="App">
        <div className="title_place">
          <h1 className="title">ფასების კალკულატორი</h1>
          <a href="https://www.facebook.com/saagentobaia1" target="_">
            <div className="logo"></div>
          </a>
        </div>
        <Form />
      </div>
    </JobProvider>
  );
}

export default App;
