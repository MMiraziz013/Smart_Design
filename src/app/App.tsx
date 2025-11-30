import { useState } from 'react';
import { Header } from "./Header";
import { Hero } from './Hero';
import { ProblemSection } from './ProblemSection';
import { HowItWorks } from './HowItWorks';
import { TechnicalSection } from './TechnicalSection';
import { Roadmap } from './Roadmap';
import { Team } from './Team';
import { Footer } from './Footer';
import { DemoPage } from './DemoPage';

export default function App() {
    const [showDemo, setShowDemo] = useState(false);

    return (
        <div className="min-h-screen">
            {/* Header always visible */}
            <Header />

            {showDemo ? (
                // Demo mode content
                <div className="pt-[72px]">
                    <DemoPage onBack={() => setShowDemo(false)} />
                </div>
            ) : (
                // Main site content
                <div className="pt-[72px]">
                    <Hero onTryDemo={() => setShowDemo(true)} />
                    <ProblemSection />
                    <HowItWorks />
                    <TechnicalSection />
                    <Roadmap />
                    <Team />
                    <Footer />
                </div>
            )}
        </div>
    );
}
