import { useState } from 'react';
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

    if (showDemo) {
        return <DemoPage onBack={() => setShowDemo(false)} />;
    }

    return (
        <div className="min-h-screen">
            <Hero onTryDemo={() => setShowDemo(true)} />
            <ProblemSection />
            <HowItWorks />
            <TechnicalSection />
            <Roadmap />
            <Team />
            <Footer />
        </div>
    );
}
