
import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";

const Block  = ({id, title, description, className, onClick }) => {
    return (
        <div className="container">
             <h2 id={id} onClick={() => onClick(id)}>
                 {title}
             </h2>
            <div className={`description ${className}`}>{description} </div>
        </div>
    );
};

const date = [
    {
        title: "title1",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },{
        title: "title2",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    },{
        title: "title3",
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem "
    },{
        title: "title4",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn"
    }
];

class Accardeon extends React.Component {
    state = {
        activeID: null
    };
    handleVisibility(id) {
        this.setState({
            activeID: id === this.state.activeID ? null : id
        });
    }

    render() {
        return (
            <div className="main">
                <h1>Accordeon</h1>
                {date.map((item, i) => (
                    <Block
                        key={i}
                        id={i}
                        {...item}
                        onClick={this.handleVisibility.bind(this)}
                        className={this.state.activeID == i ? "visible" : "hidden"}
                    />
                ))}
            </div>
        );
    }
}

const Links = () => (
    <nav>
        <Link to="/TaskButton">Home Task Button</Link>
        <Link to="/">Back</Link>
    </nav>
);
const Home = () => <h1>Home11</h1>;
const Button = require('../01-Button/App').default;
const App = props => (
    <Router basename={props.path}>
        <div>
            <Links />
            <Route exact path="/TaskButton" component={Button} />
            <Route exact path="/"  />
            <Accardeon/>
        </div>
    </Router>
);

export default App;

