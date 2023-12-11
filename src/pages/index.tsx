import React from 'react';

export default function Home() {
    return (
        <div className="flex flex-col items-center pt-[260px] h-screen">
            <title>Hydro Interactive Entertainment</title>
            <div className="relative">
                <div className="outer-container text-center">
                    <div className="gradient-border">
                        <img src="./logo.png" alt="Hydro Interactive Entertainment Logo" className="w-full h-full" />
                    </div>
                    <br />
                </div>
            </div>
            <h1 className="text-6xl font-medium mt-4">Hydro Interactive Entertainment</h1>
            <br />
            <a href="/play">            <button className="text-black text-2xl bg-white rounded-full w-[300px] h-[50px] hover:translate-y-[-10px] transition duration-300 ease-in-out">Play</button>
            </a>
        </div>
    );
}
