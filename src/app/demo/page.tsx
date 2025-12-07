import React from 'react';
// Note: AlignCenter and ALIGN_OPTIONS imports are not used in this component's JSX, 
// so they are not necessary unless used elsewhere in your environment.

/**
 * Page component that handles the /demo route.
 */
export default function DemoPage() {
    return (
        <div className="min-h-screen p-8 md:p-16 bg-gray-50">
            {/* Header and Introduction */}
            <header className="max-w-7xl mx-auto mb-12">
                {/* 1. Centered h1 element */}
                <h1 className="text-4xl font-extrabold text-[#264653] mb-4 text-center" style={{ fontSize: '3.5rem', fontWeight: '700' }}>
                    SmartDesign Team Presents
                </h1>
                <p className="text-xl text-[#6B7280] text-center">
                    _______________________________________________
                </p>
            </header>

            {/* Placeholder for the Interactive 3D Room Embed */}
            <div className="w-full max-w-6xl h-[70vh] mx-auto bg-white border border-gray-300 rounded-xl shadow-2xl flex items-center justify-center overflow-hidden">
                {/* This is the area for your Spline embed */}
                <p className="text-gray-400 text-lg font-medium p-4 text-center">
                    [Interactive 3D Spline Embed Area]
                    {/* 2. Added line break */}
                    <br />
                    <span className="text-gray-500 text-sm italic">
                        (The 3D model will load here. Use click-and-drag to view the room.)
                    </span>
                </p>
            </div>

            {/* 3. Button to External Prototype Page */}
            <div className="text-center mt-16 mb-8">
                <a
                    href="https://prot.eminence.uz/" // 👈 REPLACE THIS URL
                    target="_blank" // Opens in a new tab
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 bg-[#2A9D8F] text-white font-semibold rounded-full 
                               hover:bg-[#238276] transition-all duration-300 shadow-lg 
                               hover:shadow-xl hover:-translate-y-0.5 transform"
                >
                    Try Prototype
                </a>
            </div>

            <footer className="mt-12 text-center text-gray-500">
                <p>
                    Navigation is handled automatically by the Next.js file system.
                </p>
            </footer>
        </div>
    );
}