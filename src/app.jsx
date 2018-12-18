import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from "./screens/loginScreen/loginScreen.jsx";
import UserScreen from "./screens/userScreen/userScreen.jsx";
import Wrapper from "./components/wrapper/wrapper.jsx";
import "./normalize.css";
import "./style.css";
import AppContext from "./appProvider.jsx";
import { AppProvider } from "./appProvider.jsx";

class App extends React.Component {
  render() {
    return (
      <AppProvider>
        <Wrapper>
          <AppContext.Consumer>
            {context => {
              console.log(context);
              return (
                <Router>
                  <Switch>
                    {!context.state.user.photo &&
                      !context.state.user.userName && (
                        <Route
                          component={() => (
                            <LoginScreen setUser={context.setUser} />
                          )}
                        />
                      )}
                    {context.state.user.photo &&
                      context.state.user.userName && (
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
