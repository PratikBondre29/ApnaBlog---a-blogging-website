import React, { useState } from "react";
import { useSpeechRecognition, useSpeechSynthesis } from "react-speech-kit";
import MicIcon from "@material-ui/icons/Mic";
import MicOffIcon from "@material-ui/icons/MicOff";
import { handleSubmit } from "../../../helper/Helper";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";

import { Modal, Button, Form } from "react-bootstrap";
import "./Speech.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="modal-container">
        <button id="speech" className="btn">
          <MicIcon fontSize="large" style={{ marginTop: "20px" }} />
        </button>
        <h3 className="mt-3">Speak now...</h3>
      </div>
    </Modal>
  );
}
const Speech = () => {
  const [transcript, setTranscript] = useState("");
  const { speak, voices } = useSpeechSynthesis();
  const [isOn, setIsOn] = useState(false);
  const { listen, stop } = useSpeechRecognition({
    onResult: (value) => {
      setTranscript(value);
    },
  });
  const voiceSearch = (data) => {
    if (data !== "") {
      speak({ text: `Searching for ${data}`, voice: voices[2] });
      console.log(data);
      handleSubmit(data);
    }
  };
  const handleToggle = () => {
    setIsOn(!isOn);
    if (isOn) {
      stop();
      voiceSearch(transcript);
    } else {
      speak({ text: "Welcome to Apna blog", voice: voices[2] });
      setTimeout(() => {
        listen();
        setTranscript("");
      }, 2000);
    }
    console.log(isOn);
    console.log(transcript);
  };
  return (
    <>
      <Button onClick={handleToggle} className="mic">
        <MicIcon />
      </Button>
      <MyVerticallyCenteredModal show={isOn} onHide={handleToggle} />
    </>
  );
};

export default Speech;
