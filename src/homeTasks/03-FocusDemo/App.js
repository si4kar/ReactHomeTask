
import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class FocusDemo extends React.Component {
    state = {
        items: [
            {id: 'a', value: 'apple'},
            {id: 'o', value: 'orange'},
            {id: 'g', value: 'grape'},
            {id: 'p', value: 'pear'},
        ],
    };

    componentDidMount() {
        setInterval(this.randomizeItems, 1000)
    }

    randomizeItems = () => {
        this.setState(({items}) => ({
            items: shuffle(items),
        }))
    }

    render() {
        return (
            <div>
                {this.state.items.map(item => (
                    <span
                        key={item.id}
                        children={`${item.value} `}
                    />

                ))}
            </div>
        )
    }
}

function shuffle(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;

}


const App = props => (
    <Router basename={props.path}>
        <div>
            <FocusDemo/>
        </div>
    </Router>
);

export default App;
