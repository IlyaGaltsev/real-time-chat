import "./ChatTools.scss";
import { AiOutlineSend } from "react-icons/ai";

const ChatTools = (props) => {
  const { value, sendMessage, setValue } = props;

  return (
    <div className="bottom-tools">
      <div className="bottom-tools__wrapper">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={sendMessage}>
          <AiOutlineSend size={24} />
        </button>
      </div>
    </div>
  );
};

export { ChatTools };
