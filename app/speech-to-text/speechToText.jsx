"use client";
import { useEffect, useState } from "react";
import styles from "./speechToText.module.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import useClipboard from "react-use-clipboard";

const SpeechToText = () => {
  const [transcription, setTranscription] = useState("");
  const [isCopied, setCopied] = useClipboard(transcription);
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    let recognition;
    const startListening = () => {
      recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();

      recognition.language = "bn-IN";

      recognition.onstart = () => {
        console.log("Listening...");
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setTranscription(transcript);
      };

      recognition.onend = () => {
        console.log("Stopped listening");
        setIsListening(false);
      };

      recognition.start();
    };

    const stopListening = () => {
      if (recognition) {
        recognition.stop();
      }
    };

    if (isListening) {
      startListening();
    } else {
      stopListening();
    }

    return () => {
      stopListening();
    };
  }, [isListening]);

  const toggleListening = () => {
    setIsListening(!isListening);
  };

  return (
    <div className={styles.container}>
      <div className={styles.text_box}>
        <h1 className={styles.heading}>Speech to Text</h1>
        <p>Transcription: </p>
        <div className={styles.transcript}>{transcription}</div>
      </div>

      <div className={styles.button_box}>
        <button onClick={toggleListening} className={styles.btn}>
          {isListening ? "Stop Listening" : "Start Listening"}
        </button>

        <button className={styles.btn} onClick={setCopied}>
          Copy
        </button>
      </div>
    </div>
  );
};

export default SpeechToText;
