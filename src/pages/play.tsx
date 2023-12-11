import React, { useState, useEffect } from 'react';

export default function Home() {
    const [gradientText, setGradientText] = useState(false);

    useEffect(() => {
        // Change the text color to gradient after 3 seconds
        const timeoutId = setTimeout(() => {
            setGradientText(true);
        }, 3000);

        // Reset the text color to white after 6 seconds
        const resetTimeoutId = setTimeout(() => {
            setGradientText(false);
        }, 6000);

        // Clear timeouts to avoid memory leaks
        return () => {
            clearTimeout(timeoutId);
            clearTimeout(resetTimeoutId);
        };
    }, []);

    return (
        <div className={`flex flex-col items-center justify-center h-screen ${gradientText ? 'gradient-text' : ''}`}>
            <title>Hydro Interactive Entertainment</title>
            <p className={gradientText ? 'gradient-text-p' : ''}>
                Impossible is just a word people use to make themselves feel better when they give up.
            </p>
        </div>
    );
}
