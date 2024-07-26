import React, { useRef } from 'react';
import { Galleria } from 'primereact/galleria';
import useOutsideClick from '../hooks/useOutsideClick'; 

const GalleriaModal = ({ images, responsiveOptions, itemTemplate, thumbnailTemplate, onClose }) => {
    const galleryRef = useRef(null);
    
    useOutsideClick(galleryRef, onClose);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div ref={galleryRef} className="relative bg-transparent p-4 rounded-lg">
                <Galleria
                    style={{ maxWidth: '480px', maxHeight: '480px' }}
                    value={images}
                    responsiveOptions={responsiveOptions}
                    numVisible={5}
                    item={itemTemplate}
                    thumbnailsPosition="bottom"
                    thumbnail={thumbnailTemplate}
                    itemClassName="m-0" //
                />
                <button className="absolute top-[-40px] right-2 text-white text-3xl p-2 rounded-full" onClick={onClose}>&times;</button>
            </div>
        </div>
    );
};

export default GalleriaModal;
