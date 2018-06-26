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
                    <td><a href="#profile" id="menuButton">Profile　　　</a></td>
                </tr>
                <tr>
                    <td><a href="#blog" id="menuButton">Blog　　　</a></td>
                </tr>
                <tr>
                    <td><a href="#contact" id="menuButton">Contact　　　</a></td>
                </tr>
            </table>
        );
    }
});

var reactMain = React.createClass({
    getInitialState: function(){
        return{
            wrapID:'0'
        };
    },
    setState: function(n){
        this.setState({
            wrapID:n
        });
    },
    render: function(){
        return(
            <div>
                <header>
                    <span className="avatar"><img src="images/avatar.png" style={{height:"150px"}}/></span>
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

var reactProfile = React.createClass({
    getInitialState: function(){
        return{
            wrapID:'1'
        };
    },
    setState: function(n){
        this.setState({
            wrapID:n
        });
    },
    render: function(){
        return(
            <div>
                <table style={{textAlign:"left"}}>
                    <tr>
                        <td>- NAME</td>
                    </tr>
                    <tr>
                        <td>　　SuperConsole</td>
                    </tr>
                    <tr>
                        <td>- WHOIS</td>
                    </tr>
                    <tr>
                        <td>　　Music Composer, Web Designer</td>
                    </tr>
                    <tr>
                        <td>- AGE</td>
                    </tr>
                    <tr>
                        <td>　　{age()}</td>
                    </tr>
                    <tr>
                        <td>- SCHOOL</td>
                    </tr>
                    <tr>
                        <td>　　Chiba Institute of Technology</td>
                    </tr>
                    <tr>
                        <td>- PLATFORM</td>
                    </tr>
                    <tr>
                        <td>　　SW: Atom, Terapad</td>
                    </tr>
                    <tr>
                        <td>　　lang: Java</td>
                    </tr>
                    <tr>
                        <td>　　FW: jQuery</td>
                    </tr>
                    <tr>
                        <td>- BEGINNER</td>
                    </tr>
                    <tr>
                        <td>　　lang: C/C#, Python, </td>
                    </tr>
                    <tr>
                        <td>　　FW: React</td>
                    </tr>
                </table>
            </div>
        );
    }
});

var reactWrap = React.createClass({
    render: function(){
        var tmp;
        switch(location.hash){
            case "#profile":
                tmp = reactProfile;
                break;
            default:
                tmp = reactMain;
                break;
        }
        return(
            React.createElement(tmp)
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
    React.createElement(reactWrap),
    document.getElementById('main')
);

function age() {
    var _birth = 19980323;
    var  today = new Date();
    var _today = parseInt("" + today.getFullYear() + affixZero(today.getMonth() + 1) + affixZero(today.getDate()));
    return parseInt((_today - _birth) / 10000);
}

function affixZero(int) {
    if (int < 10) int = "0" + int;
    return "" + int;
}
