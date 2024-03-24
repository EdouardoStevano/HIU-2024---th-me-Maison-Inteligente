import React, { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import axios from 'axios';

import ImageToFind from '../../../assets/image/lucasTraining/Lucas.jpeg'
import ImageToFind1 from '../../../assets/image/lucasTraining/01.jpg'
import ImageToFind2 from '../../../assets/image/lucasTraining/02.jpg'
import ImageToFind3 from '../../../assets/image/lucasTraining/03.jpg'
import ImageToFind4 from '../../../assets/image/lucasTraining/04.jpg'
import ImageToFind5 from '../../../assets/image/lucasTraining/05.jpg'
import { toast } from 'react-toastify';

const imageTranings = [
    ImageToFind, ImageToFind1, ImageToFind2, ImageToFind3, ImageToFind4, ImageToFind5
]


const CameraComponent = () => {
    const videoRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if(!isLoading){
            const constraints = { video: true };
    
            navigator.mediaDevices.getUserMedia(constraints)
                .then((stream) => {
                    videoRef.current.srcObject = stream;
                })
                .catch((err) => {
                    console.error('Error accessing camera:', err);
                });
    
            return () => {
                // Clean up - stop video stream when component unmounts
                if (videoRef.current?.srcObject) {
                    const stream = videoRef.current.srcObject;
                    const tracks = stream.getTracks();
                    tracks.forEach(track => track.stop());
                    videoRef.current.srcObject = null;
                }
            };
        }
    }, [isLoading]); // Run effect only once on component mount

    const handleCapture = () => {
        setIsLoading(true)
        // Obtenir l'élément vidéo
        const videoElement = videoRef.current;

        // Capture de l'image à partir de la vidéo
        html2canvas(videoElement)
            .then(canvas => {
                // Convertir le canvas en blob
                return new Promise((resolve, reject) => {
                    canvas.toBlob(blob => {
                        if (blob) {
                            resolve(blob);
                        } else {
                            reject(new Error('Échec de la création du blob'));
                        }
                    }, 'image/png');
                });
            })
            .then(async (blob) => {
                const apiKey = "RDzPjbz6GeJ4ho-x0ItJcuhAl2_Dgrfn";
                const apiSecret = "i_7-2_vthKsD5Rg22mSWqEcs9GEKlpdW";
                let traningData = []

                // Utilisation de map pour créer un tableau de promesses
                const promises = imageTranings.map(async (img, index) => {
                    try {
                        const response = await fetch(img);
                        const blob = await response.blob();
                        const newFile = new File([blob], 'imgTrained' + index + '.png', { type: 'image/png' });
                        return newFile;
                    } catch (error) {
                        console.error('Erreur lors du chargement de l\'image :', error);
                        return null;
                    }
                });

                // Utilisation de Promise.all pour attendre que toutes les promesses soient résolues
                Promise.all(promises)
                    .then(files => {
                        // Filtrez les fichiers null (s'ils existent) et affectez les fichiers restants à traningData
                        traningData = files.filter(file => file !== null);

                        if (traningData.length > 0) {
                            const formData = new FormData();
                            formData.append('api_key', apiKey);
                            formData.append('api_secret', apiSecret);
                            formData.append('faces1', traningData);
                            formData.append('image_file1', traningData[0]);
                            formData.append('image_file2', blob);

                            axios.post('https://api-us.faceplusplus.com/facepp/v3/compare', formData, {
                                headers: {
                                    'Content-Type': 'multipart/form-data',
                                },
                            })
                                .then(response => {
                                    console.log(response.data);
                                    if(response.data.confidence >= 70){
                                        console.log("Il est là !");
                                        toast.info("Il est là !")
                                    }
                                    else{
                                        console.log("Il est introuvable");
                                        toast.info("Il est introuvable")
                                    }
                                })
                                .catch(error => {
                                    console.error("formData ", formData);
                                    console.error(error);
                                })
                                .finally(()=>{
                                    setIsLoading(false)
                                })
                        }
                    })
                    .catch(error => {
                        console.error('Erreur lors de la récupération des données d\'entraînement :', error);
                    });



            })
            .catch(error => {
                console.error('Erreur lors de la capture de la photo :', error);
            });
    };

    return (
        <div>
            <h2>Qui est-ce que vous cherchez</h2>
            {
                isLoading ?
                <div>... en cours de recherche</div>
                :
            <video ref={videoRef} width="640" height="480" autoPlay></video>
            }
            <br />
            <button className='btn-submit' onClick={handleCapture}>Retrouver maintenant</button>
        </div>
    );
};

export default CameraComponent;