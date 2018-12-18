import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from "./screens/loginScreen/loginScreen.jsx";
import UserScreen from "./screens/userScreen/userScreen.jsx";
import Wrapper from "./components/wrapper/wrapper.jsx";
import "./normalize.css";
import "./style.css";
import AppContext from "./appContext.jsx";
import { AppProvider } from "./appContext.jsx";

class App extends React.Component {
  render() {
    return (
      <AppProvider>
        <Wrapper>
          <AppContext.Consumer>
            {context => {
              return (
                <Router>
                  <Switch>
                    {!context.state.user && (
                      <Route component={() => <LoginScreen />} />
                    )}
                    {context.state.user && (
                      <Route component={() => <UserScreen />} />
                    )}
                  </Switch>
                </Router>
              );
            }}
          </AppContext.Consumer>
        </Wrapper>
      </AppProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
