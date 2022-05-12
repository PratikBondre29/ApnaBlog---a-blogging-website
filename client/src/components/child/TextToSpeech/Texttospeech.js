import React, {useState} from 'react';
import { Button } from "@material-ui/core";
import ArrowUpwardTwoToneIcon from "@material-ui/icons/ArrowUpwardTwoTone";
import {  useSpeechSynthesis } from "react-speech-kit";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';


const Texttospeech = ({name}) => {
  const { speak, voices, speaking, cancel } = useSpeechSynthesis();
  const [transcript, setTranscript] = useState(name);

  const handleSpeech = (title) => {
    if (title !== "") {
      speak({ text: title, voice: voices[2] });
    //  setIsOn(true);
      console.log(title);
    }
  };
  const handleMuteSpeech = () => {
    cancel();
  }
  return (

      speaking ? <Button>
      <VolumeOffIcon onClick={() => handleMuteSpeech()} />
    </Button> : <Button>
      <VolumeUpIcon onClick={() => handleSpeech(name)} />
    </Button>

  )
};

export default Texttospeech;
