"use strict";

class ReactList extends React.Component {
    render() {
        return React.createElement(
            "table",
            null,
            React.createElement(
                "tbody",
                null,
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        null,
                        React.createElement(
                            "a",
                            { href: "#home", id: "menuButton" },
                            "Home\u3000\u3000\u3000"
                        )
                    )
                ),
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        null,
                        React.createElement(
                            "a",
                            { href: "#profile", id: "menuButton" },
                            "Profile\u3000\u3000\u3000"
                        )
                    )
                ),
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        null,
                        React.createElement(
                            "a",
                            { href: "#blog", id: "menuButton" },
                            "Blog\u3000\u3000\u3000"
                        )
                    )
                ),
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        null,
                        React.createElement(
                            "a",
                            { href: "#diary", id: "menuButton" },
                            "Diary\u3000\u3000\u3000"
                        )
                    )
                ),
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        null,
                        React.createElement(
                            "a",
                            { href: "#contact", id: "menuButton" },
                            "Contact\u3000\u3000\u3000"
                        )
                    )
                )
            )
        );
    }
}

class ReactMain extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "header",
                null,
                React.createElement(
                    "span",
                    { className: "avatar" },
                    React.createElement("img", { src: "images/avatar.svg", id: "logoPic" })
                ),
                React.createElement(
                    "h1",
                    null,
                    "SuperConsole"
                ),
                React.createElement("div", { className: "avatar_margin" })
            ),
            React.createElement(
                "footer",
                null,
                React.createElement(
                    "ul",
                    { className: "icons" },
                    React.createElement(
                        "li",
                        null,
                        React.createElement("a", { href: "https://twitter.com/_superconsole", className: "fa-twitter" })
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement("a", { href: "https://soundcloud.com/superconsole", className: "fa-soundcloud" })
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement("a", { href: "https://www.youtube.com/channel/UCtfFkG9H7xVMiPCcmGdpN_A", className: "fa-youtube" })
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement("a", { href: "https://github.com/SuperConsole", className: "fa-github" })
                    )
                )
            )
        );
    }
}

var toggle = true; //MenuButton<=>ReactWrap
class MenuButton extends React.Component {
    constructor(props) {
        super(props);
    }
    changeToggle() {}
    onClick() {
        if (toggle) {
            $("#main").fadeOut(75);
            setTimeout(() => {
                $(".menu").fadeIn(75);$("#main").hide();
            }, 75);
        } else {
            $(".menu").fadeOut(75);
            setTimeout(() => {
                $("#main").fadeIn(75);$(".menu").hide();
            }, 75);
        }
        toggle = !toggle;
    }
    render() {
        return React.createElement(
            "h1",
            { onClick: () => this.onClick() },
            "\u2261"
        );
    }
}

class ReactProfile extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "table",
                { className: "message", style: { textAlign: "left" } },
                React.createElement(
                    "tbody",
                    null,
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            "-name"
                        )
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            "\u3000\u3000SuperConsole (SpCn / _spxn)"
                        )
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            "-jobs"
                        )
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            "\u3000\u3000Composer, Designer, White hat"
                        )
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            "-age"
                        )
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            "\u3000\u3000",
                            age()
                        )
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            "-job"
                        )
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            "\u3000\u3000Chiba Institute of Technology"
                        )
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            "-skillset"
                        )
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            "\u3000\u3000VSCode / Atom /"
                        )
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            "\u3000\u3000KaliLinux / TailsLinux / ArchLinux /"
                        )
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            "\u3000\u3000Metasploit / OWASP ZAP / Exploit-db /"
                        )
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            "\u3000\u3000\u60C5\u5831\u51E6\u7406\u5B89\u5168\u78BA\u4FDD\u652F\u63F4\u58EB\u8A66\u9A13\u5408\u683C /"
                        )
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            "\u3000\u3000MS Office / Evetnote /"
                        )
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            "\u3000\u3000Git / bash / Docker /"
                        )
                    )
                )
            )
        );
    }
}

class ReactBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article: null
        };
        (async () => {
            try {
                var response = await fetch("https://raw.githubusercontent.com/SuperConsole/SpCn-Diary/master/Blog.md", { method: "GET" });
                var responseText = await response.text();
                var md = responseText;
                var parseMd = marked(md);
                this.setState({ article: parseMd });
            } catch (e) {
                console.log("failured");
            }
        })();
    }
    render() {
        return React.createElement("div", { id: "article", dangerouslySetInnerHTML: { __html: this.state.article } });
    }
}
class ReactDiary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article: null
        };
        (async () => {
            try {
                var response = await fetch("https://raw.githubusercontent.com/SuperConsole/SpCn-Diary/master/Diary.md", { method: "GET" });
                var responseText = await response.text();
                var md = responseText;
                var parseMd = marked(md);
                this.setState({ article: parseMd });
            } catch (e) {
                console.log("failured");
            }
        })();
    }
    render() {
        return React.createElement("div", { id: "article", dangerouslySetInnerHTML: { __html: this.state.article } });
    }
}
class ReactContact extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "table",
                { className: "message", style: { textAlign: "left" } },
                React.createElement(
                    "tbody",
                    null,
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            "\u66F2\u3084\u30C7\u30B6\u30A4\u30F3\u306E\u5236\u4F5C\u4F9D\u983C\u306FGmail\u304BTwitter\u306EDM\u3078\u304A\u9858\u3044\u3057\u307E\u3059\u3002"
                        )
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement("td", { style: { height: "1em" } })
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement("td", { style: { height: "1em" } })
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            "-Gmail"
                        )
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            "\u3000\u3000SuperConsoleDJEM[at]gmail.com"
                        )
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            "-Outlook"
                        )
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            "\u3000\u3000superconsole.work[at]outlook.com"
                        )
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            "-Other"
                        )
                    ),
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            "\u3000\u3000Twitter/DM @_SuperConsole or @_spxn"
                        )
                    )
                )
            )
        );
    }
}

class ReactWrap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wrapTmp: null
        };
        this.hashChangeHandler = this.hashChangeHandler.bind(this);
    }
    componentWillMount() {
        var tmp;
        switch (location.hash) {
            case "#profile":
                tmp = ReactProfile;
                break;
            case "#contact":
                tmp = ReactContact;
                break;
            case "#blog":
                tmp = ReactBlog;
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
        this.setState({ wrapTmp: tmp });
    }
    shouldComponentUpdate() {
        $(".menu").fadeOut(75);
        setTimeout(() => {
            $("#main").fadeIn(75);$(".menu").hide();
        }, 75);
        toggle = !toggle;
        return true;
    }
    hashChangeHandler() {
        var tmp;
        switch (location.hash) {
            case '#profile':
                tmp = ReactProfile;
                break;
            case '#contact':
                tmp = ReactContact;
                break;
            case '#diary':
                tmp = ReactDiary;
                break;
            case '#blog':
                tmp = ReactBlog;
                break;
            case '#home':
                tmp = ReactMain;
                break;
            default:
                tmp = ReactMain;
                break;
        }
        this.setState({ wrapTmp: tmp });
    }
    render() {
        window.onhashchange = this.hashChangeHandler;
        return React.createElement(this.state.wrapTmp, null);
    }
}

ReactDOM.render(React.createElement(MenuButton, null), document.getElementById("side-button"));

ReactDOM.render(React.createElement(ReactList, null), document.getElementById("list"));

ReactDOM.render(React.createElement(ReactWrap, null), document.getElementById("main"));

function age() {
    var _birth = 19980323;
    var today = new Date();
    var _today = parseInt("" + today.getFullYear() + affixZero(today.getMonth() + 1) + affixZero(today.getDate()));
    return parseInt((_today - _birth) / 10000);
}

function affixZero(int) {
    if (int < 10) int = "0" + int;
    return "" + int;
}
