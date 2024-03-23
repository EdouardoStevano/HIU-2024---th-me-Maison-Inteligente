import React, { useState } from 'react';

// Modal Imporation
import MyModal from './myModal';
import MyModalLarge from './myModalLarge';



function HowToUse() {

    const [showSmallModal, setShowSmallModal] = useState(false);
    const [showLargeModal, setShowLargeModal] = useState(false);

    // For small modal
    const openSmallModal = () => {
        setShowSmallModal(true);
    };

    const closeSmallModal = () => {
        setShowSmallModal(false);
    };

    // For large modal
    const openLargeModal = () => {
        setShowLargeModal(true);
    };

    const closeLargelModal = () => {
        setShowLargeModal(false);
    };

    return (
        <div>
            <h1>Exemple d'utilisation de MyModal et MyModalLarge</h1>

            <div className="btn-container">
                <button type="button" onClick={() => openSmallModal()}>Show small modal</button>
                <button type="button" onClick={() => openLargeModal()}>Show large modal</button>
            </div>

            <MyModal isOpen={showSmallModal} onClose={closeSmallModal}>
                <p>Contenu de la modal standard...</p>
            </MyModal>

            <MyModalLarge isOpen={showLargeModal} onClose={closeLargelModal}>
                <p>Contenu de la modal large...</p>
            </MyModalLarge>
        </div>
    );
}

export default HowToUse;