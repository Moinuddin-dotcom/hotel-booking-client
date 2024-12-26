import React, { useEffect, useState } from 'react';
import Modal from 'react-modal'; // Use this if you are using react-modal
import specialOfferImage from '../assets/images/coursel-2.webp'; // Example image
import { Link } from 'react-router-dom';

const SpecialOffersModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setIsModalOpen(true);
    }, []);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            className="flex items-center justify-center h-screen"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            ariaHideApp={false}
        >
            <div className="relative bg-white rounded-lg shadow-lg w-full max-w-lg p-6 z-60">

                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-xl text-gray-500 hover:text-gray-700"
                >
                    &times;
                </button>


                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Special Offers & Promotions
                    </h2>
                    <img
                        src={specialOfferImage}
                        alt="Special Offer"
                        className="rounded-lg w-full mb-4"
                    />
                    <p className="text-gray-600 mb-6">
                        Enjoy exclusive discounts on our rooms and services. Don't miss out on this opportunity!
                    </p>
                    <Link to={'/rooms'} >
                    <button
                        onClick={closeModal}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Explore Now
                    </button></Link>
                </div>
            </div>
        </Modal>
    );
};

export default SpecialOffersModal;