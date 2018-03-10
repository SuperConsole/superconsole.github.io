//React.js
//Product by SuperConsole®.

var TestClass = React.createClass({
    render: function(){
        return <h1>{this.props.text}</h1>;
    }
});

ReactDOM.render(
    React.createElement(
        TestClass,
        {
            text:"Home"
        }
    ),
    document.getElementById('top_header')
);
