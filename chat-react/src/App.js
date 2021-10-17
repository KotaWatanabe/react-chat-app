import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="afebd063-551f-44ad-828c-d7cc303ca59c"
      userName="Kota"
      userSecret="123456"
      renderChatFeed={chatAppProps => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
