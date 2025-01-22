import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext.jsx';

// Function to toggle background
const setupBackgroundToggle = () => {
    const button = document.getElementById('bgToggleButton');
    if (button) {
        button.addEventListener('click', () => {
            const body = document.body;
            const currentBg = getComputedStyle(body).backgroundImage;

            if (currentBg.includes('bg3.jpg')) {
                body.style.backgroundImage = `url('/bg2.png')`;
            } else {
                body.style.backgroundImage = `url('/bg3.jpg')`;
            }
        });
    }
};

// Initialize React app and setup background toggle
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <AuthContextProvider>
                <App />
            </AuthContextProvider>
        </BrowserRouter>
    </StrictMode>
);

setupBackgroundToggle(); // Initialize the toggle functionality
