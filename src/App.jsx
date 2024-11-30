import chatgpt from "./props/chatgpt.svg";
import chat from "./props/chat.svg";
import plus from "./props/plus.svg";
import home from "./props/home.svg";
import saved from "./props/save.svg";
import rocket from "./props/rocket.svg";
import profile from './props/profile.png'
import gpt from './props/gpt.png';
import send from './props/send.svg';
import "./App.css";

const App = () => {



  return (
    <div className="App">
      <div className="Left">
        <div className="Header">
          <div className="Logo">
            <img src={chatgpt} alt="chatgpt_logo" />
            <span>ChatGPT</span>
          </div>
          <button className="ChatPlus">
            <img style={{background : 'inherit'}} height={"40px"} src={plus} alt="new Chat" />
            <span style={{background : 'inherit'}}>New Chat</span>
          </button>
          <div className="BtnChats">
            <button>
              <img
                height={"40px"}
                className="chatImg"
                src={chat}
                alt="what is programming"
              />
              <span>What is Programming ?</span>
            </button>
            <button>
              <img
                height={"40px"}
                className="chatImg"
                src={chat}
                alt="How to use API ?"
              />
              <span>How to use API ?</span>
            </button>
          </div>
        </div>

        <div className="Footer">
          <button>
            <img height={"40px"} src={home} alt="Home" />
            <span>Home</span>
          </button>
          <button>
            <img height={"40px"} src={saved} alt="Saved" />
            <span>Saved</span>
          </button>
          <button>
            <img height={"40px"} src={rocket} alt="Upgrade to Pro" />
            <span>Upgrade to Pro</span>
          </button>
        </div>
      </div>
      <div className="Right">
        <div className="Chats">
          <img src={profile} alt="profiile" />
          <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt sequi dolorum odit aliquam dolor voluptas fugiat. Quaerat repudiandae tempore, voluptates, explicabo et, dignissimos molestias quos placeat consequuntur laboriosam libero necessitatibus!</p>
        </div>
        <div className="Chats">
          <img src={gpt} alt="profiile" />
          <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt sequi dolorum odit aliquam dolor voluptas fugiat. Quaerat repudiandae tempore, voluptates, explicabo et, dignissimos molestias quos placeat consequuntur laboriosam libero necessitatibus!</p>
        </div>

        <div className="InputFooter">
          <div className="Input">
            <input placeholder="send a message" type="text" />
            <button> <img style={{background : 'rgba(0,0,1,.2', borderRadius : '5px'}}  height={'40px'} width={'40px'} src={send} alt="sehd" /></button> 
          </div>
          <p>ChatGPT may produce inaccurate information about people, of facts. ChatGPT August 10 version</p>
        </div>
      </div>
    </div>
  );
};

export default App;
