
import React, { createContext, useContext } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';

interface CloudinaryContextType {
    cloudinary: Cloudinary;
}

const CloudinaryContext = createContext<CloudinaryContextType | null>(null);

export const CloudinaryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const cloudinary = new Cloudinary({
        cloud: {
            cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
        },
    });

    return (
        <CloudinaryContext.Provider value={{ cloudinary }}>
            {children}
        </CloudinaryContext.Provider>
    );
};

export const useCloudinary = () => {
    const context = useContext(CloudinaryContext);
    if (!context) {
        throw new Error('useCloudinary must be used within a CloudinaryProvider');
    }
    return context;
};
