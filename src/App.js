import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const homeTasks = [
  { id: "01-Button" },
  { id: "02-Accardeon" },
  { id: "03-FocusDemo" },
 /* { id: "03-NavLink" },
  { id: "04-URL-Params" },
  { id: "05-URL-Regex" },
  { id: "06-Query-Params" },
  { id: "07-Catch-All" },
  { id: "08-Conditional" },
  { id: "09-Multiple" },
  { id: "10-Nested" },
  { id: "11-Redirect" },
  { id: "12-Prompt" },
  { id: "13-Routers" }*/
];

homeTasks.forEach(l => (l.Component = require(`./homeTasks/${l.id}/App`).default));

const Links = () => (
  <ol className="tasks-nav">
    {homeTasks.map((l, i) => (
      <li key={l.id}>
        <Link to={`/homeTasks/${l.id}`}>{l.id}</Link>
      </li>
    ))}
  </ol>
);

const Back = () => (
  <div style={{ marginBottom: 64 }}>
    <Link to="/">&larr;Back to homeTasks</Link>
  </div>
);

const Home = () => <h1>This is Sergii Sichkar React home tasks </h1>;

class App extends React.Component {
  render() {
    return (
      <Router>

        <div>
          <Home/>
          <Route exact path="/" component={Links} />
          <Route path="/homeTasks" component={Back} />
          {homeTasks.map(({ id, Component }) => (
            <Route
              key={id}
              path={`/homeTasks/${id}`}
              render={({ match }) => {
                return <Component {...match} />;
              }}
            />
          ))}
        </div>
      </Router>
    );
  }
}

export default App;
