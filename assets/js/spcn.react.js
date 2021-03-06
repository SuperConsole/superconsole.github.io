class ReactList extends React.Component{
    render(){
        return(
            <table>
                <tbody>
                    <tr>
                        <td><a href="#home" id="menuButton">Home　　　</a></td>
                    </tr>
                    <tr>
                        <td><a href="#profile" id="menuButton">Profile　　　</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://blog.superconsole.work" id="menuButton">Blog　　　</a></td>
                    </tr>
                    <tr>
                        <td><a href="https://diary.superconsole.work" id="menuButton">Diary　　　</a></td>
                    </tr>
                    <tr>
                        <td><a href="#contact" id="menuButton">Contact　　　</a></td>
                    </tr>
                </tbody>
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

var toggle=true;//MenuButton<=>ReactWrap
class MenuButton extends React.Component{
    constructor(props){
        super(props);
    }
    changeToggle(){}
    onClick(){
        if(toggle){
            $("#main").fadeOut(75);
            setTimeout( ()=>{$(".menu").fadeIn(75);$("#main").hide()},75);
        }else{
            $(".menu").fadeOut(75);
            setTimeout( ()=>{$("#main").fadeIn(75);$(".menu").hide()},75);
        }
        toggle = !toggle;
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
                    <tbody>
                        <tr>
                            <td>-name</td>
                        </tr>
                        <tr>
                            <td>　　SuperConsole (SpCn / _spxn)</td>
                        </tr>
                        <tr>
                            <td>-jobs</td>
                        </tr>
                        <tr>
                            <td>　　Composer, Designer, White hat</td>
                        </tr>
                        <tr>
                            <td>-age</td>
                        </tr>
                        <tr>
                            <td>　　{age()}</td>
                        </tr>
                        <tr>
                            <td>-job</td>
                        </tr>
                        <tr>
                            <td>　　Chiba Institute of Technology</td>
                        </tr>
                        <tr>
                            <td>-skillset</td>
                        </tr>
                        <tr>
                            <td>　　VSCode / Atom /</td>
                        </tr>
                        <tr>
                            <td>　　KaliLinux / TailsLinux / ArchLinux /</td>
                        </tr>
                        <tr>
                            <td>　　Metasploit / OWASP ZAP / Exploit-db /</td>
                        </tr>
                        <tr>
                            <td>　　情報処理安全確保支援士試験合格 /</td>
                        </tr>
                        <tr>
                            <td>　　MS Office / Evetnote /</td>
                        </tr>
                        <tr>
                            <td>　　Git / bash / Docker /</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

class ReactDiary extends React.Component{
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
                    <tbody>
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
                            <td>　　SuperConsoleDJEM[at]gmail.com</td>
                        </tr>
                        <tr>
                            <td>-Outlook</td>
                        </tr>
                        <tr>
                            <td>　　superconsole.work[at]outlook.com</td>
                        </tr>
                        <tr>
                            <td>-Other</td>
                        </tr>
                        <tr>
                            <td>　　Twitter/DM @_SuperConsole or @_spxn</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

class ReactWrap extends React.Component{
    constructor(props){
        super(props);
        this.state={
            wrapTmp:null,
        }
        this.hashChangeHandler = this.hashChangeHandler.bind(this);
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
                tmp = ReactDiary;
                break;
            case "#home":
                tmp = ReactMain;
                break;
            default:
                tmp = ReactMain;
                break;
        }
        this.setState({wrapTmp:tmp});
    }
    shouldComponentUpdate (){
        $(".menu").fadeOut(75);
        setTimeout( ()=>{$("#main").fadeIn(75);$(".menu").hide()},75);
        toggle = !toggle;
        return true;
    }
    hashChangeHandler(){
        var tmp;
        switch(location.hash){
            case '#profile':
                tmp = ReactProfile;
                break;
            case '#contact':
                tmp = ReactContact;
                break;
            case '#diary':
                tmp = ReactDiary;
                break;
            case '#home':
                tmp = ReactMain;
                break;
            default:
                tmp = ReactMain;
                break;
        }
        this.setState({wrapTmp:tmp});
    }
    render(){
        window.onhashchange = this.hashChangeHandler;
        return <this.state.wrapTmp />
    }
}

ReactDOM.render(
    <MenuButton />,
    document.getElementById("side-button"));


ReactDOM.render(
    <ReactList />,
    document.getElementById("list")
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
