//React.js
//Product by SuperConsole®.

var title = React.createClass({
    render: function(){
        return(
            <h1>Home</h1>
        );
    }
});

var sideMenu = React.createClass({
    render: function(){
        return(
            <table>
                <tr>
                    <td><a href="./">Home　　　</a></td>
                </tr>
                <tr>
                    <td><a href="#profile">Profile　　　</a></td>
                </tr>
                <tr>
                    <td><a href="#blog">Blog　　　</a></td>
                </tr>
                <tr>
                    <td><a href="#contact">Contact　　　</a></td>
                </tr>
            </table>
        );
    }
});

var reactMain = React.createClass({
    render: function(){
        return(
            <div>
                <header>
                    <span className="avatar"><img src="images/avatar.jpg" style={{height:"150px"}}/></span>
                    <h1>SuperConsole</h1>
                    <div style={{marginTop:"3em"}}></div>
                </header>
                <footer>
                    <ul className="icons">
                        <li><a href="https://twitter.com/_superconsole" className="fa-twitter"></a></li>
                        <li><a href="https://soundcloud.com/superconsole" className="fa-soundcloud"></a></li>
                        <li><a href="https://www.youtube.com/channel/UCtfFkG9H7xVMiPCcmGdpN_A" className="fa-youtube"></a></li>
                        <li><a href="https://github.com/SuperConsole" className="fa-github"></a></li>
                    </ul>
                </footer>
            </div>
        );
    }
});

var menuButton = React.createClass({
    render: function(){
        return(
            <h1>≡</h1>
        );
    }
});

ReactDOM.render(
    React.createElement(menuButton),
    document.getElementById('side-button')
);

ReactDOM.render(
    React.createElement(title),
    document.getElementById('main_header')
);

ReactDOM.render(
    React.createElement(sideMenu),
    document.getElementById('side-menu')
);

ReactDOM.render(
    React.createElement(reactMain),
    document.getElementById('main')
);
