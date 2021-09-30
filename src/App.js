import { Container } from "react-bootstrap";
import "./_app.scss";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import { useState } from "react";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const Layout = ({ children }) => {
    const [toggleSidebar, setToggleSidebar] = useState(false);
    const handleToggleSidebar = () => setToggleSidebar(!toggleSidebar);

    return (
      <>
        <Header handleToggleSidebar={handleToggleSidebar} />
        <div className="app__container">
          <Sidebar
            toggleSidebar={toggleSidebar}
            handleToggleSidebar={handleToggleSidebar}
          />
          <Container fluid className="app__main">
            {children}
          </Container>
        </div>
      </>
    );
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Layout>
            <HomeScreen />
          </Layout>
        </Route>
        <Route path="/auth" component={LoginScreen} />
      </Switch>
    </Router>
  );
}

export default App;
