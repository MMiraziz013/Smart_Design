import { Home, DollarSign, MapPin } from 'lucide-react';

export function ProblemSection() {
    const problems = [
        {
            icon: Home,
            title: 'The Void',
            subtitle: 'Empty Walls',
            description: '100,000+ apartments delivered as concrete shells annually.',
        },
        {
            icon: DollarSign,
            title: 'The Cost',
            subtitle: 'Design is Expensive',
            description: 'Professional sketches cost $1,500+. Ours is free.',
        },
        {
            icon: MapPin,
            title: 'The Hunt',
            subtitle: 'Fragmented Market',
            description: 'Stop running between 10 different bazaars. Find everything here.',
        },
    ];

    return (
        <section className="py-20 px-4 bg-[#F8F9FA]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-[#264653] mb-4" style={{fontSize: '2.5rem', lineHeight: '1.2', fontWeight: '700'}}>
                        The Problem We're Solving</h2>
                    <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
                        Moving into a new apartment in Uzbekistan shouldn't feel like starting from zero.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {problems.map((problem, index) => {
                        const Icon = problem.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-[12px] shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0px_8px_40px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="w-16 h-16 bg-[#2A9D8F]/10 rounded-[12px] flex items-center justify-center mb-6">
                                    <Icon className="w-8 h-8 text-[#2A9D8F]" />
                                </div>
                                <h3 className="text-[#264653] mb-2" style={{fontSize: '1.75rem', lineHeight: '1.3', fontWeight: '600'}}>{problem.title}</h3>
                                <h4 className="text-[#2A9D8F] mb-3" style={{fontSize: '1.25rem', lineHeight: '1.4', fontWeight: '600'}}>{problem.subtitle}</h4>
                                <p className="text-[#6B7280]">{problem.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
