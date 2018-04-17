import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";


const Home = props => {
  return <h1>Home</h1>;
};

const Button = ({
    children,
    size,
    theme = 'orange',
    typeButton = 'submit',
    ...rest
    }) => {
        const sizeClassName = size ? `button--${size}` : '';
        return (
            <button
                className={`button ${sizeClassName} theme-${theme}`}
                type = {typeButton}
                {...rest}
                >{children}</button>
    )
};

function Element() {

    return (
        <div>
            <Button size="small" theme = "blue">
                small button
            </Button>

            <Button size="medium" theme = "blue">
                medium button
            </Button>

            <Button size="large" theme = "orange">
                large button
            </Button>
        </div>
    );
}

const App = props => (
  <Router basename={props.path}>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" render={() => <h1>About</h1>} />
      <Element/>
    </div>
  </Router>
);

export default App;
