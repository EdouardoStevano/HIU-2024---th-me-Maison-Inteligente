
import { FilesetResolver, HandLandmarker, GestureRecognizer } from "@mediapipe/tasks-vision";
import hand_landmarker_task from "../models/hand_landmarker.task";
import gesture_recognizer_task from "../models/gesture_recognizer.task";
import { useRef, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function HandDetection() {

    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [handPresence, setHandPresence] = useState(null);
    const [categoryName, setcategoryName] = useState("...");
    const [displayName, setdisplayName] = useState(null);
    const [index, setindex] = useState(null);
    const [handscore, setscore] = useState(null);



    useEffect(() => {
        let handLandmarker;
        let animationFrameId;
        let gestureRecognizer;
        let runningMode = "IMAGE";

        const initializeHandDetection = async () => {
            try {
                const vision = await FilesetResolver.forVisionTasks(
                    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm",
                );
                gestureRecognizer = await GestureRecognizer.createFromOptions(vision, {
                    baseOptions: {
                        modelAssetPath: gesture_recognizer_task,
                        // "https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task",

                        delegate: "GPU",
                    },
                    runningMode: runningMode,
                    // cannedGesturesClassifierOptions: {
                    //     modelAssetPath:
                    //         "https://storage.googleapis.com/mediapipe-models/gesture_recognizer/canned_models/float16/1/gestures_classifier.tflite",
                    // },

                });
                handLandmarker = await HandLandmarker.createFromOptions(
                    vision, {
                    baseOptions: { modelAssetPath: hand_landmarker_task, delegate: "gpu" },
                    numHands: 2,
                    runningMode: "video"
                }
                );
                console.log(gestureRecognizer)
                detectHands();
            } catch (error) {
                console.error("Error initializing hand detection:", error);
            }
        };

        const drawLandmarks = (landmarksArray) => {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'white';

            landmarksArray.forEach(landmarks => {
                landmarks.forEach(landmark => {
                    const x = landmark.x * canvas.width;
                    const y = landmark.y * canvas.height;

                    ctx.beginPath();
                    ctx.arc(x, y, 5, 0, 2 * Math.PI); // Draw a circle for each landmark
                    ctx.fill();
                });
            });
        };

        const detectHands = async () => {
            // if (videoRef.current && videoRef.current.readyState >= 2) {
            //     const detections = handLandmarker.detectForVideo(videoRef.current, performance.now());
            //     setHandPresence(detections.handednesses.length > 0);

            //     // Assuming detections.landmarks is an array of landmark objects
            //     if (detections.landmarks) {
            //         drawLandmarks(detections.landmarks);
            //     }
            // }
            // requestAnimationFrame(detectHands);
            if (videoRef.current && videoRef.current.readyState >= 2) {
                const detections = handLandmarker.detectForVideo(videoRef.current, performance.now());
                setHandPresence(detections.handednesses.length > 0);

                // const results = gestureRecognizer.recognize(detections.multiHandLandmarks);
                // // Use results.gestures to identify gestures (thumb_up, thumb_down, etc.)
                // console.log("HEEREEE IT IS: ", results); 

                if (detections.handednesses && detections.handednesses.length > 0) {
                    const handedness = detections.handednesses[0][0]; // Assuming only one hand is detected
                    const score = handedness.score;
                    const index = handedness.index;
                    const displayName = handedness.displayName;
                    const categoryName = handedness.label;
                    setscore(score);
                    setindex(index);
                    setdisplayName(displayName);
                    setcategoryName(categoryName);
                }

                if (detections.landmarks) {
                    drawLandmarks(detections.landmarks);
                }

                if (detections.multiHandLandmarks) {
                    console.log("MULTHANDS: ")
                    const results = gestureRecognizer.recognize(detections.multiHandLandmarks);

                    console.log("HEEEEETO IT IS: ", results); // For now, log the results to the console
                }
            }
            requestAnimationFrame(detectHands);
        };

        const startWebcam = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                videoRef.current.srcObject = stream;
                await initializeHandDetection();
            } catch (error) {
                console.error("Error accessing webcam:", error);
            }
        };

        startWebcam();
        /*
        const fetchData = async () => {
            try {
                const response = await fetch(IP_API + 'item', {
                    method: 'GET',
                    mode: 'cors', // Assurez-vous d'ajouter cette option
                    headers: {
                        'Content-Type': 'application/json',
                        // Autres en-têtes si nécessaire
                    },
                })
                const data = await response.json();
                console.log("items ", data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
            }
        };

        // Appeler fetchData initialement
        // fetchData();
        */
        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                videoRef.current.srcObject.getTracks().forEach(track => track.stop());
            }

            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };


        // Mettre en place l'intervalle pour actualiser les données toutes les 5 secondes
        // const interval = setInterval(fetchData, 5000);

        // Nettoyer l'intervalle lors du démontage du composant
        //return () => clearInterval(interval);

    }, []);

    return (
        <>
            {/* <h1>Is there a Hand? {handPresence ? "Yes" : "No"}, categoryName : { categoryName }, hande: { displayName }, Confidence : { handscore }, Handedness : { index }</h1> */}
            <h1>Geste: {displayName === "Right" ? "Geste pour allumer la lampe 1 detecter" : (displayName === "Left" ? "Geste pour ouvrir la porte 1 detecter" : "Pas de gestes")}</h1>
            <div style={{ position: "relative" }}>
                <video ref={videoRef} autoPlay playsInline ></video>
                <canvas ref={canvasRef} style={{ backgroundColor: "black", width: "600px", height: "480px" }}></canvas>
            </div>
        </>
    );
};

export default HandDetection;