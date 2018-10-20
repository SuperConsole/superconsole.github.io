class Title extends React.Component{
    render(){
        return <h1>Home</h1>;
    }
}

class SideMenu extends React.Component{
    onClick(){
        setTimeout(location.reload(),5);
    }
    render(){
        return(
            <table>
                <tr>
                    <td><a href="./">Home　　　</a></td>
                </tr>
                <tr>
                    <td><a href="#profile" id="menuButton" onClick={()=>this.onClick()}>Profile　　　</a></td>
                </tr>
                <tr>
                    <td><a href="#blog" id="menuButton" onClick={()=>this.onClick()}>Diary　　　</a></td>
                </tr>
                <tr>
                    <td><a href="#contact" id="menuButton" onClick={()=>this.onClick()}>Contact　　　</a></td>
                </tr>
            </table>
        );
    }
}

class ReactMain extends React.Component{
    render(){
        return(
            <div>
                <header>
                    <span className="avatar"><img src="images/avatar.png" id="logoPic"/></span>
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
}

let tgl=true;
class MenuButton extends React.Component{
    constructor(props){
        super(props);
    }
    onClick(){
        if(tgl){
            $("#main").fadeOut(100);
            setTimeout(function(){$(".menu").fadeIn(100);$("#main").hide()},100);
        }else{
            $(".menu").fadeOut(100);
            setTimeout(function(){$("#main").fadeIn(100);$(".menu").hide()},100);
        }
        tgl=!tgl;
    }
    render(){
        return<h1 onClick={()=>this.onClick()}>≡</h1>
    }
}

class ReactProfile extends React.Component{
    render(){
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
}

class ReactContact extends React.Component{
    render(){
        return(
            <div>
                <table style={{textAlign:"left"}}>
                    <tr>
                        <td>[仕事(曲の制作やデザイン)の依頼はGmailからお願いします)]</td>
                    </tr>
                    <tr>
                        <td style={{height:"1em"}}></td>
                    </tr>
                    <tr>
                        <td style={{height:"1em"}}></td>
                    </tr>
                    <tr>
                        <td>/- - -</td>
                    </tr>
                    <tr>
                        <td>- Gmail</td>
                    </tr>
                    <tr>
                        <td>　　SuperConsoleDJEM[at]gmail.com ※[at] -> @</td>
                    </tr>
                    <tr>
                        <td>- Instant-mail</td>
                    </tr>
                    <tr>
                        <td>　　SuperConsole[at]via.tokyo.jp</td>
                    </tr>
                    <tr>
                        <td>- Other</td>
                    </tr>
                    <tr>
                        <td>　　Twitter/DM (<a href="https://twitter.com/_superconsole">@_SuperConsole</a>)</td>
                    </tr>
                    <tr>
                        <td>/- - -</td>
                    </tr>
                </table>
            </div>
        );
    }
}

class ReactWrap extends React.Component{
    render(){
        var tmp;
        switch(location.hash){
            case "#profile":
                tmp = ReactProfile;
                break;
            case "#contact":
                tmp = ReactContact;
                break;
            case "#blog":
                tmp="";
                location.href="https://github.com/SuperConsole/SpCn-Diary/blob/master/Diary.md";
                break;
            default:
                tmp = ReactMain;
                break;
        }
        return(
            React.createElement(tmp)
        );
    }
}

ReactDOM.render(
    <MenuButton />,
    document.getElementById("side-button"));

ReactDOM.render(
    <Title />,
    document.getElementById("main_header")
);

ReactDOM.render(
    <SideMenu />,
    document.getElementById("side-menu")
);

ReactDOM.render(
    <ReactWrap />,
    document.getElementById("main")
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
