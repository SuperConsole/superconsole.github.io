//class Wrap extends React.Component{

//}

class SideMenu extends React.Component{
    onClick(){
        setTimeout(()=>{location.reload()},300);
        setTimeout(()=>{location.reload()},300);
    }
    render(){
        return(
            <table>
                <tr>
                    <td><a href="./" onClick={()=>{this.onClick()}}>Home　　　</a></td>
                </tr>
                <tr>
                    <td><a href="#profile" id="menuButton" onClick={()=>{this.onClick()()}}>Profile　　　</a></td>
                </tr>
                <tr>
                    <td><a href="#diary" id="menuButton" onClick={()=>{this.onClick()}}>Diary　　　</a></td>
                </tr>
                <tr>
                    <td><a href="#contact" id="menuButton" onClick={()=>{this.onClick()}}>Contact　　　</a></td>
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
                    <span className="avatar"><img src="images/avatar.svg" id="logoPic"/></span>
                    <h1>SuperConsole</h1>
                    <div className="avatar_margin"></div>
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

class MenuButton extends React.Component{
    constructor(props){
        super(props);
        this.state={
            toggle: true,
        }
    }
    onClick(){
        if(this.state.toggle){
            $("#main").fadeOut(100);
            setTimeout( ()=>{$(".menu").fadeIn(100);$("#main").hide()},100);
        }else{
            $(".menu").fadeOut(100);
            setTimeout( ()=>{$("#main").fadeIn(100);$(".menu").hide()},100);
        }
        this.setState({toggle: !this.state.toggle});
    }
    render(){
        return<h1 onClick={()=>this.onClick()}>≡</h1>
    }
}

class ReactProfile extends React.Component{
    render(){
        return(
            <div>
                <table className="message" style={{textAlign:"left"}}>
                    <tr>
                        <td>-name</td>
                    </tr>
                    <tr>
                        <td>　　"SuperConsole"</td>
                    </tr>
                    <tr>
                        <td>-whois</td>
                    </tr>
                    <tr>
                        <td>　　"Music Composer, Web Designer"</td>
                    </tr>
                    <tr>
                        <td>-age</td>
                    </tr>
                    <tr>
                        <td>　　"{age()}"</td>
                    </tr>
                    <tr>
                        <td>-job</td>
                    </tr>
                    <tr>
                        <td>　　"Chiba Institute of Technology"</td>
                    </tr>
                    <tr>
                        <td>-skillset</td>
                    </tr>
                    <tr>
                        <td>　　Atom / Terapad / Brackets /</td>
                    </tr>
                    <tr>
                        <td>　　JavaScript / Python /  Java /</td>
                    </tr>
                    <tr>
                        <td>　　jQuery / React / Node.js /</td>
                    </tr>
                    <tr>
                        <td>　　KaliLinux / Ubuntu / Debian /</td>
                    </tr>
                    <tr>
                        <td>　　情報処理安全確保支援士 / FE / AP /</td>
                    </tr>
                    <tr>
                        <td>　　Chrome DevTools / Kindle /</td>
                    </tr>
                    <tr>
                        <td>　　MS Office / Evetnote /</td>
                    </tr>
                    <tr>
                        <td>　　Git / GitHub / bash / </td>
                    </tr>
                </table>
            </div>
        );
    }
}



class ReactMarkdown extends React.Component{
    constructor(props){
        super(props);
        this.state={
          article: null,
        };
        (async () =>{
            try{
                var response = await fetch("https://raw.githubusercontent.com/SuperConsole/SpCn-Diary/master/Diary.md", {method: "GET"});
                var responseText = await response.text();
                var md = responseText;
                var parseMd = marked(md);
                this.setState({article:parseMd});
            }catch(e){
                console.log("failured");
            }
        })();
    }
    render(){
        return(
            <div id="article" dangerouslySetInnerHTML={{__html: this.state.article}}></div>
        );
    }
}
class ReactContact extends React.Component{
    render(){
        return(
            <div>
                <table className="message" style={{textAlign:"left"}}>
                    <tr>
                        <td>曲やデザインの制作依頼はGmailかTwitterのDMへお願いします。</td>
                    </tr>
                    <tr>
                        <td style={{height:"1em"}}></td>
                    </tr>
                    <tr>
                        <td style={{height:"1em"}}></td>
                    </tr>
                    <tr>
                        <td>-Gmail</td>
                    </tr>
                    <tr>
                        <td>　　"SuperConsoleDJEM[at]gmail.com"</td>
                    </tr>
                    <tr>
                        <td>-Instant-mail</td>
                    </tr>
                    <tr>
                        <td>　　"SuperConsole[at]via.tokyo.jp"</td>
                    </tr>
                    <tr>
                        <td>-Other</td>
                    </tr>
                    <tr>
                        <td>　　"Twitter/DM (<a href="https://twitter.com/_superconsole">@_SuperConsole</a>)"</td>
                    </tr>
                </table>
            </div>
        );
    }
}

class ReactWrap extends React.Component{
    constructor(props){
        super(props);
        this.state={
            wrapTmp:ReactMain,
        }
    }
    componentWillMount(){
        var tmp;
        switch(location.hash){
            case "#profile":
                tmp = ReactProfile;
                break;
            case "#contact":
                tmp = ReactContact;
                break;
            case "#diary":
                tmp = ReactMarkdown;
                break;
            default:
                tmp = ReactMain;
                break;
        }
        this.setState({wrapTmp:tmp});
    }

    render(){
        return <this.state.wrapTmp />
    }
}

//ReactDOM.render(
//    <Wrap />,
//    document.getElementById("wrap")
//);

ReactDOM.render(
    <MenuButton />,
    document.getElementById("side-button"));


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
