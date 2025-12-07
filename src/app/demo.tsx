import React from 'react';

/**
 * Page component that handles the /demo route.
 */
export default function DemoPage() { // 👈 FIX: Exported as default function
    return (
        <div className="min-h-screen p-8 md:p-16 bg-gray-50">
            {/* Header and Introduction */}
            <header className="max-w-7xl mx-auto mb-12">
                <h1 className="text-4xl font-extrabold text-[#264653] mb-4">
                    Interactive Design Studio
                </h1>
                <p className="text-xl text-[#6B7280]">
                    Use your mouse or touch controls to rotate, pan, and zoom the 3D room design below.
                </p>
            </header>

            {/* Placeholder for the Interactive 3D Room Embed */}
            <div className="w-full max-w-6xl h-[70vh] mx-auto bg-white border border-gray-300 rounded-xl shadow-2xl flex items-center justify-center overflow-hidden">
                {/* This is the area for your Spline embed */}
                <p className="text-gray-400 text-lg font-medium p-4">
                    [Interactive 3D Spline Embed Area]
                </p>
            </div>

            <footer className="mt-12 text-center text-gray-500">
                <p>
                    Navigation is handled automatically by the Next.js file system.
                </p>
            </footer>
        </div>
    );
}