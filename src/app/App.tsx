// FILE: App.tsx
'use client';

import React from 'react';
// 👈 NEW: Import the Next.js path hook
import { usePathname } from 'next/navigation';

import { Header } from "./Header";
import { Hero } from './Hero';
import { ProblemSection } from './ProblemSection';
import { HowItWorks } from './HowItWorks';
import { TechnicalSection } from './TechnicalSection';
import { Roadmap } from './Roadmap';
import { Team } from './Team';
import { Footer } from './Footer';
// 👈 NEW: Import the Demo component
import { Demo } from './demo';

// NOTE: The 'DemoPage' import is now redundant and should be removed if it's unused.
// import { DemoPage } from './DemoPage'; 

export default function App() {
    // 👈 NEW: Read the current URL path
    const pathname = usePathname();

    // Check if we are on the /demo route
    const isDemoPage = pathname === '/demo';

    // REMOVED: const [showDemo, setShowDemo] = useState(false);

    return (
        <div className="min-h-screen">
            {/* Header always visible */}
            <Header />

            <div className="pt-[72px]">
                {/* 👈 MODIFIED: Check the URL path instead of local state */}
                {isDemoPage ? (
                    // Demo mode content
                    // Note: We don't need the onBack prop since the back button can use Link to '/'
                    <Demo />
                ) : (
                    // Main site content
                    <>
                        {/* Note: We removed the onTryDemo prop as the Link component handles navigation */}
                        <Hero />
                        <ProblemSection />
                        <HowItWorks />
                        <TechnicalSection />
                        <Roadmap />
                        <Team />
                        <Footer />
                    </>
                )}
            </div>
        </div>
    );
}