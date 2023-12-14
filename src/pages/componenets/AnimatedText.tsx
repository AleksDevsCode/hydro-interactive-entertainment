// components/AnimatedText.tsx
import { useEffect, useState } from 'react';

const AnimatedText = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="relative bg-[#020202] rounded-full w-[100px] h-[100px] shadow-[#090909] shadow-lg pulse"></div>
            <p className="text-white mt-4 text-7xl font-medium">Hydro Interactive Entertainment</p>
            <p className="text-white mt-4 font-light">15 December 2023</p>
        </div>
    );
};

export default AnimatedText;
