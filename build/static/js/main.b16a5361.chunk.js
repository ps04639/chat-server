(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},35:function(e,t,a){e.exports=a(63)},40:function(e,t,a){},41:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(30),r=a.n(o),i=a(14),l=(a(40),a(6)),c=a(7),m=a(9),u=a(8),d=a(10),h=a(11),f=(a(41),a(15)),g=a.n(f),p=a(31),v=a.n(p),b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).el=null,a.el1=null,a.componentDidMount=function(){a.el=document.getElementsByClassName("login-box-visible")[0],a.el1=document.getElementsByClassName("chat-popup")[0]},a.onSubmit=function(e){a.validateUser()&&a.validateEmail()?(e.preventDefault(),a.login()):(e.preventDefault(),a.showErrorMessage("please enter a valid email id"))},a.validateUser=function(){return""!==a.state.username},a.validateEmail=function(){var e=a.state.email;return!!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},a.showErrorMessage=function(e){a.setState({errorMessage:e}),a.removeErrorMessage()},a.removeErrorMessage=function(){var e=setTimeout(function(){a.setState({errorMessage:""}),clearTimeout(e)},3e3)},a.removeErrorMessageImmediate=function(){return a.setState({errorMessage:""})},a.login=function(){a.toggleIsSubmitting(),a.removeErrorMessageImmediate();var e={nameInput:a.state.username,emailIdInput:a.state.email};new Promise(function(t,a){g.a.post("http://prashantkpc:3001/user/register",e,function(e,a,n){t(e)})}).then(function(e){console.log(e[0].UserId);var t=setTimeout(function(){a.setState({isAuthenticated:!0,returnedUserId:e[0].UserId}),clearTimeout(t)},2e3)})},a.toggleIsSubmitting=function(){a.setState(function(e){return{isSubmitting:!e.isSubmitting}})},a.handleInputChange=function(e){return a.setState({username:e.target.value})},a.handleInputChangeEmail=function(e){return a.setState({email:e.target.value})},a.closeChatWindow=function(){a.el.style.transform="scale(0)",a.el1.style.transform="scale(1)"},a.openChatWindow=function(){a.el.style.transform="scale(1)",a.el1.style.transform="scale(0)"},a.state={username:"",email:"",returnedUserId:"",isAuthenticated:!1,isSubmitting:!1,errorMessage:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.state.isAuthenticated?s.a.createElement(h.a,{to:{pathname:"/chat",state:{username:this.state.username,userId:this.state.returnedUserId}}}):s.a.createElement("div",null,s.a.createElement("a",{className:"chat-popup",onClick:this.openChatWindow},s.a.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"}),s.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),s.a.createElement("div",{className:"App login-box-visible"},s.a.createElement("div",{className:"chat-header"},s.a.createElement("h2",{className:"chat-header-h2"},"Auto Bot(ATA)"),s.a.createElement("a",{className:"chat-header-close-button",onClick:this.closeChatWindow},s.a.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),s.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})))),s.a.createElement("form",{className:"form",onSubmit:this.onSubmit},s.a.createElement("input",{placeholder:"Enter Your Name",onChange:this.handleInputChange,type:"text"}),s.a.createElement("input",{placeholder:"Enter Your Email",onChange:this.handleInputChangeEmail,type:"text"}),s.a.createElement("span",{className:"error"},this.state.errorMessage),this.state.isSubmitting?s.a.createElement("img",{src:v.a,alt:"Spinner component",className:"App-logo"}):s.a.createElement("input",{type:"submit",disabled:""===this.state.username,value:"Submit"}))))}}]),t}(s.a.Component),E=a(34),w=a.n(E),y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).generateClasses=function(e){return"bot"===e.from?"bot-message":"bot-auto"===e.from?"bot-master-message":"user-message"},a.questionClick=function(e){a.props.sendMessage({message:e.message,questionId:e.messageId,from:"you"})},a.imageClick=function(){document.getElementsByClassName("modal")[0].style.display="block"},a.closePopUp=function(){document.getElementsByClassName("modal")[0].style.display="none"},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"chat-output chat-output-content"},s.a.createElement("div",{className:"chat-output-inner"},this.props.messages.map(function(t,a){return s.a.createElement("div",{key:a,className:e.generateClasses(t)},"bot-auto"===t.from?s.a.createElement("div",{className:"message",onClick:e.questionClick.bind(null,t)},t.message):void 0!==t.video?s.a.createElement("video",{controls:!0},s.a.createElement("source",{src:t.video,type:"video/mp4"})):void 0!==t.image?s.a.createElement("div",null,s.a.createElement("img",{className:"respImg",src:t.image,alt:"Coffee",onClick:e.imageClick}),s.a.createElement("div",{className:"modal"},s.a.createElement("span",{className:"close",onClick:e.closePopUp},"\xd7"),s.a.createElement("img",{src:t.image,className:"modal-content",alt:"Coffee"}))):s.a.createElement("div",{className:"message"},t.message))})))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).onKeyPress=function(e){"Enter"!==e.key||a.state.inputValue.trim().length<=0||a.postMessageToScreen()},a.postMessageToScreen=function(){a.state.inputValue.trim().length<=0||(a.props.sendMessage({message:a.state.inputValue.trim(),from:"you"}),a.setState({inputValue:""}))},a.handleChange=function(e){a.setState({inputValue:e.target.value})},a.state={inputValue:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"chat-input"},s.a.createElement("input",{placeholder:"Provide your input here",className:"user-input user-input-text",type:"text",value:this.state.inputValue,onChange:this.handleChange,onKeyPress:this.onKeyPress}),s.a.createElement("button",{className:"submit-button",onClick:this.postMessageToScreen},s.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 500 500"},s.a.createElement("g",null,s.a.createElement("g",null,s.a.createElement("polygon",{points:"0,497.25 535.5,267.75 0,38.25 0,216.75 382.5,267.75 0,318.75"}))))))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).el=null,a.el1=null,a.componentDidMount=function(){a.el=document.getElementsByClassName("chat-box-visible")[0],a.el1=document.getElementsByClassName("chat-popup-hide")[0],w.a.get("./data/data.json").then(function(e){a.setState({greetings:e.data})}).catch(function(e){console.log(e)});var e=a.props.location.state.username;a.setState({chatUserID:a.props.location.state.userId}),a.welcomeGreetings(e)},a.welcomeGreetings=function(e){if(""!==e&&void 0!==e){var t="Hello "+e+".I\u2019m Cody, the Chatbot!  Welcome to the Coffee World.  How can i assist you ?";a.recieveMessage({message:t,sender:"bot"})}},a.addMessage=function(e){a.setState(function(t){return t.messages.push(e),{messages:t.messages}})},a.recieveMessage=function(e){a.setState(function(t){return t.messages.push({message:e.message,from:e.sender,video:e.video,image:e.image,messageId:e.messageId}),{messages:t.messages}})},a.sendMessage=function(e){(a.addMessage(e),"hi"!==e.message&&"Hi"!==e.message)?new Promise(function(t,n){var s=e.message;s=s.replace(/[^a-zA-Z ]/g,"");var o=a.state.chatUserID;console.log(o),0===s.length&&(s="abc"),g.a.get("http://prashantkpc:3001/response?inputText="+s+"&questionId=0&userId="+o+"&ipAddress=2342",function(e,a,n){t(e)})}).then(function(e){var t=e;console.info("Receied mesages---\x3e   ",t),t.length>1?a.addMessageToList(t):t[0].ResponseText?a.recieveMessage(a.checkVidImgTxt(t[0])):a.addMessageToList(t)}):a.recieveMessage({message:"Hello "+a.props.location.state.username,sender:"bot"});a.scrollToBottom()},a.checkVidImgTxt=function(e){switch(e.ResponseType){case"V":return{video:e.ResponseText,sender:"bot"};case"I":return{image:e.ResponseText,sender:"bot"};default:return{message:e.ResponseText,sender:"bot"}}},a.addMessageToList=function(e){var t=a.state.greetings.automated_messages.partialMatched;e[0].IsMaster&&(t=a.state.greetings.automated_messages.unmatched_words);var n=t[Math.floor(Math.random()*t.length)],s=setTimeout(function(){a.recieveMessage({message:n,sender:"bot"}),clearTimeout(s)},800),o=setTimeout(function(){e.forEach(function(e){a.recieveMessage({message:e.QuestionText,sender:"bot-auto",messageId:e.QuestionId})}),clearTimeout(o)},1500)},a.closeChatWindow=function(){a.el.style.transform="scale(0)",a.el1.style.transform="scale(1)"},a.openChatWindow=function(){a.el.style.transform="scale(1)",a.el1.style.transform="scale(0)"},a.scrollToBottom=function(){var e=document.getElementsByClassName("chat-output");e.scrollTop=e.scrollHeight},a.state={messages:[],greetings:null,chatUserID:null},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("a",{className:"chat-popup-hide",onClick:this.openChatWindow},s.a.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"}),s.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))),s.a.createElement("div",{className:"chat-box-visible"},s.a.createElement("div",{className:"chat-header"},s.a.createElement("h2",{className:"chat-header-h2"},"Auto Bot(ATA)"),s.a.createElement("a",{className:"chat-header-close-button",onClick:this.closeChatWindow},s.a.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),s.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})))),s.a.createElement(y,{sendMessage:this.sendMessage,messages:this.state.messages}),s.a.createElement(C,{sendMessage:this.sendMessage})))}}]),t}(n.Component),I=function(){return s.a.createElement("div",{className:"static-body"},s.a.createElement("h1",{className:"static-title"},"Coffee"),s.a.createElement("div",{className:"static-content"},s.a.createElement("div",{className:"static-text"},s.a.createElement("p",null,"Coffee is a brewed drink prepared from roasted coffee beans, which are the seeds of berries from the Coffea plant. The genus Coffea is native to tropical Africa, and Madagascar, The plant was exported from Africa to countries around the world and coffee plants are now cultivated in over 70 countries, primarily in the equatorial regions of the Americas, Southeast Asia, India, and Africa. "),s.a.createElement("p",null,"The two most commonly grown are the highly regarded arabica, and the less sophisticated but stronger and more hardy robusta. Once ripe, coffee berries are picked, processed, and dried. Dried coffee seeds (referred to as beans) are roasted to varying degrees, depending on the desired flavor. Roasted beans are ground and brewed with near boiling water to produce coffee as a beverage."),s.a.createElement("p",null,"Coffee is slightly acidic and can have a stimulating effect on humans because of its caffeine content. Coffee is one of the most popular drinks in the world.Americano is a style of coffee prepared by brewing espresso with added hot water, giving it a similar strength to, but different flavor from drip coffee. The strength of an Americano varies with the number of shots of espresso and the amount of water added."),s.a.createElement("p",null,'Latte means "milk coffee". In northern Europe and Scandinavia the term caf\xe9 au lait has traditionally been used for the combination of espresso and milk. In France, caff\xe8 latte is mostly known from the original Italian name of the drink (caff\xe8 latte or caffelatte).'),s.a.createElement("p",null,"Cappuchino is an Italian coffee drink that is traditionally prepared with double espresso, hot milk, and steamed milk foam. Cream may be used instead of milk and is often topped with cinnamon."),s.a.createElement("p",null,'Macchiato is an espresso coffee drink with a small amount of milk, usually foamed. In Italian, macchiato means "stained" or "spotted" so the literal translation of caff\xe8 macchiato is "stained coffee", or coffee with a spot of milk.'),s.a.createElement("p",null,"Coffee beans must be ground and brewed to create a beverage. The criteria for choosing a method include flavor and economy. Almost all methods of preparing coffee require that the beans be ground and then mixed with hot water long enough to allow the flavor to emerge but not so long as to draw out bitter compounds."),s.a.createElement("p",null,"In 2012, the National Institutes of Health\u2013AARP Diet and Health Study analysed the relationship between coffee drinking and mortality."),s.a.createElement("p",null,"Coffee is no longer thought to be a risk factor for coronary heart disease. A 2012 meta-analysis concluded that people who drank moderate amounts of coffee had a lower rate of heart failure, with the biggest effect found for those who drank more than four cups a day. Moreover, in one preliminary study, habitual coffee consumption was associated with improved vascular function."),s.a.createElement("p",null,"One review published in 2004 indicated a negative correlation between suicide rates and coffee consumption,[  but this effect has not been confirmed in larger studies.Long-term studies of both risk and potential benefit of coffee consumption by elderly people, including assessment on symptoms of Alzheimer's disease and cognitive impairment, are not conclusive."))))},k=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(I,null),s.a.createElement(h.d,null,s.a.createElement(h.a,{exact:!0,from:"/",to:"/login"}),s.a.createElement(h.b,{path:"/login",component:b}),s.a.createElement(h.b,{path:"/chat",component:M})))}}]),t}(n.Component);r.a.render(s.a.createElement(i.a,null,s.a.createElement(k,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.b16a5361.chunk.js.map