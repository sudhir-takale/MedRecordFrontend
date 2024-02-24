import "./App.css";

import { Login } from "./components/Forms/Login";

function App() {
  return (
    <div>
      <switch>
        <Route path="/login">
          <Login />
        </Route>
      </switch>
    </div>
  );
}

export default App;
