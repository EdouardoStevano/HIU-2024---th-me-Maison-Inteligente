import React, { useEffect, useState } from "react";
import VoiceVisualizer from "./voiceVisualizer";
import "./speechTotexte.scss";
import axios from "axios";
import { IP_API } from "presentation/utils/config";

const SpeechTotexte = () => {
  const voiceVisualizer = new VoiceVisualizer();
  const [result, setResult] = useState("");
  const [recording, isrecording] = useState(false);
  let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition,
    recognition;

  const recordbtn = () => {
    if (!recording) {
      setResult("");
      speechToText();
      isrecording(true);
    } else {
      setResult("");
      stopRecording();
      voiceVisualizer.stopVisualization();
    }
  };

  function speechToText() {
    try {
      recognition = new SpeechRecognition();
      recognition.lang = "fr-FR";
      recognition.interimResults = true;

      recognition.start();
      voiceVisualizer.startVisualization();

      function test() {
        console.log("Mety")
      }

      recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript;

        if (event.results[0].isFinal) {
          setResult(result + " " + speechResult);

          if (speechResult.toLowerCase().includes("salut")) {
            isrecording(false);
            stopRecording();
            speak("salut comment ça vas");
          } else if (speechResult.toLowerCase().includes("météo")) {
            isrecording(false);
            stopRecording();
            speak("vous voulez le meteo d'aujourd'huis");
          } else if (speechResult.toLowerCase().includes("aide.")) {
            isrecording(false);
            stopRecording();
            speak(
              "Notre plateforme s'engage à simplifier votre exploration urbaine en vous offrant une assistance inégalée. Grâce à notre technologie innovante, vous pouvez naviguer dans la ville avec facilité, découvrant chaque coin et recoin sans tracas. Parcourez la ville en toute confiance, guidé par notre engagement envers votre expérience sans souci"
            );
          }
        } else if (speechResult.toLowerCase().includes("carte.")) {
          isrecording(false);
          stopRecording();
          speak(
            "vous voulez voir la carte ok je vais vous rediriger vers la carte"
          );

        } else if (speechResult.toLowerCase().includes("porte") && speechResult.toLowerCase().includes("ouvrir")) {
          console.log("Tafiditra")
          isrecording(false);
          stopRecording();
          axios.get(IP_API + "item/status/65ff5141213a60d5c342255e").then((res) => {
            speak(
              "Votre porte a été ouvert avec succès"
            );
          }).catch(err => {
            console.log(err)
            speak(
              "echec d'ouverture de la porte"
            );
          })
        }
        else if (speechResult.toLowerCase().includes("télécommande")) {
          isrecording(false);
          stopRecording();
          speak("La télécommande se trouve sur la table de nuit.");
        }


        else {
          setResult(" " + result + " " + speechResult);
        }
      };
      recognition.onspeechend = () => {
        speechToText();
      };


      recognition.onerror = (event) => {
        isrecording(false);
        recognition.stop();
        if (event.error === "no-speech") {
          // speak("JE DETECTE PAS DES MOTS");
        } else if (event.error === "audio-capture") {
          // alert(
          //   "No microphone was found. Ensure that a microphone is installed."
          // );
        } else if (event.error === "not-allowed") {
          // alert("Permission to use microphone is blocked.");
        } else if (event.error === "aborted") {
          // alert("Listening Stopped.");
        } else {
          // alert("Error occurred in recognition: " + event.error);
          speak("salut  il ya une erreur " + event.error);
          isrecording(false);
        }
      };
    } catch (error) {
      isrecording(false);

      console.log(error);
    }
  }

  const speak = async (texte) => {
    if ("speechSynthesis" in window) {
      const message = new SpeechSynthesisUtterance();
      // Définir le texte à lire
      message.text = texte;

      window.speechSynthesis.speak(message);
    } else {
      console.error(
        "La synthèse vocale n'est pas supportée par ce navigateur."
      );
    }
  };
  function stopRecording() {
    isrecording(false);
    recognition.stop();
  }
  return (
    <div className="vocal-assistance">
      <div
        className="speech-bloc"
      >
        <h1>Assistante Vocale</h1>
        <div id="visualizer-container">
          <canvas id="output" width="250" height="200"></canvas>
        </div>
        <button onClick={recordbtn} className="btn-voice">
          <div className={`container-svg-btn ${recording ? "active" : ""}`}>
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11V8Z"
                stroke="#1C274C"
                stroke-width="1.5"
              />
              <path
                opacity="0.5"
                d="M13.5 8L17 8"
                stroke="#1C274C"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                opacity="0.5"
                d="M13.5 11L17 11"
                stroke="#1C274C"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                opacity="0.5"
                d="M7 8L9 8"
                stroke="#1C274C"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                opacity="0.5"
                d="M7 11L9 11"
                stroke="#1C274C"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                opacity="0.5"
                d="M20 10V11C20 15.4183 16.4183 19 12 19M4 10V11C4 15.4183 7.58172 19 12 19M12 19V22"
                stroke="#1C274C"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </div>
          {recording ? "Arreter" : "Parler"}
        </button>
        <p className="rqt">Votre requête : {result}</p>
      </div>
    </div>
  );
};

export default SpeechTotexte;
