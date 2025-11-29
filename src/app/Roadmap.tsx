import { CheckCircle, Circle, Sparkles } from 'lucide-react';

export function Roadmap() {
    const milestones = [
        {
            status: 'current',
            title: 'MVP Phase - Hackathon Demo',
            description: 'Core AI functionality with basic furniture catalog integration.',
            date: 'November 2025',
        },
        {
            status: 'next',
            title: 'Integration with 5 Major Retailers',
            description: 'Live connection with Dafna, AIKO, and 3 more Tashkent furniture stores.',
            date: 'December 2025',
        },
        {
            status: 'future',
            title: 'AR Mobile App & Bank Installments',
            description: 'Augmented reality preview and integrated payment plans with local banks.',
            date: 'Q1 2026',
        },
    ];

    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-[#264653] mb-4" style={{fontSize: '2.5rem', lineHeight: '1.2', fontWeight: '700'}}>Our Roadmap</h2>
                    <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
                        From hackathon prototype to the go-to platform for home renovation in Uzbekistan.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical timeline line */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#2A9D8F]/20" />

                    <div className="space-y-12">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="relative flex gap-6">
                                {/* Timeline dot */}
                                <div className="relative z-10 flex-shrink-0">
                                    {milestone.status === 'current' ? (
                                        <div className="w-12 h-12 bg-[#2A9D8F] rounded-full flex items-center justify-center shadow-[0px_4px_20px_rgba(42,157,143,0.3)]">
                                            <CheckCircle className="w-6 h-6 text-white" />
                                        </div>
                                    ) : milestone.status === 'next' ? (
                                        <div className="w-12 h-12 bg-white border-4 border-[#2A9D8F] rounded-full flex items-center justify-center shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
                                            <Sparkles className="w-6 h-6 text-[#2A9D8F]" />
                                        </div>
                                    ) : (
                                        <div className="w-12 h-12 bg-white border-2 border-[#2A9D8F]/30 rounded-full flex items-center justify-center shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
                                            <Circle className="w-6 h-6 text-[#2A9D8F]/30" />
                                        </div>
                                    )}
                                </div>

                                {/* Content card */}
                                <div className="flex-1 pb-8">
                                    <div className={`bg-white rounded-[12px] p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0px_8px_40px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 ${
                                        milestone.status === 'current' ? 'border-2 border-[#2A9D8F]' : 'border border-gray-200'
                                    }`}>
                                        <div className="flex items-center justify-between mb-3">
                                            <h3 className="text-[#264653]" style={{fontSize: '1.75rem', lineHeight: '1.3', fontWeight: '600'}}>{milestone.title}</h3>
                                            {milestone.status === 'current' && (
                                                <span className="text-xs bg-[#2A9D8F] text-white px-3 py-1 rounded-full">
                          Current
                        </span>
                                            )}
                                        </div>
                                        <p className="text-[#6B7280] mb-3">{milestone.description}</p>
                                        <p className="text-sm text-[#2A9D8F]">{milestone.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
