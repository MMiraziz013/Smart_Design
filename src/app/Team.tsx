import { useState } from 'react';
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { ChevronDown, ChevronUp } from 'lucide-react';

export function Team() {
    const [showDetails, setShowDetails] = useState(false);

    // Consolidated data for the main display and the detailed view
    const detailedTeamMembers = [
        {
            name: 'Asadbek Ruslanbekov',
            role: 'Project Manager & Team Lead',
            avatar: '/Asadbek.jpeg',
            linkedinUrl: 'https://www.linkedin.com/in/asadbek-ruslanbekov-0a9a0429a/',
            coreStrength: 'Operations & Infrastructure',
            experience: 'Organized the "Code for Change" Hackathon. Proven track record in high-stakes IT management (managed network infrastructure for commercial dining: 10 hubs, 30+ printers, 15+ terminals).',
            responsibility: 'Product vision, partner integration (Dafna/AIKO), and operational strategy.',
        },
        {
            name: 'Miraziz Mirvaliyev',
            role: '.NET Developer',
            avatar: '/Miraziz.jpg',
            linkedinUrl: 'https://www.linkedin.com/in/miraziz-mirvaliyev-75a685236/',
            coreStrength: 'Distributed Systems & Clean Architecture',
            experience: 'Backend specialist with hands-on expertise in designing scalable, high-load services. ' +
                'Background spans multiple disciplines including Game Development (Unity) and Cross-platform Mobile (Flutter), contributing to a well-rounded architectural mindset.',
            responsibility: 'Ensuring the platform is scalable, secure, and production-ready using containerized architecture.',
        },
        {
            name: 'Umar Hoshimov',
            role: 'Full Stack & AI Integration Lead',
            avatar: '/Umar.jpeg',
            linkedinUrl: 'https://www.linkedin.com/in/umarkhashimov/',
            coreStrength: 'Python/JS Bridge & AI Models',
            experience: 'Experienced web developer with a portfolio of deployed applications (khashimov.uz). Specializes in connecting Python-based AI models with responsive Javascript frontends.',
            responsibility: 'Integrating the Stable Diffusion pipeline with the web interface.',
        },
        {
            name: 'Davron Ismatov',
            role: 'High Load Backend & System Architect (Java)',
            avatar: '/Davron.jpeg',
            linkedinUrl: 'https://www.linkedin.com/in/davron-ismatov/',
            coreStrength: 'System Design & Data Architecture',
            experience: '2 years of commercial experience in B2B/B2C sectors. Specialist in building robust ERD (Entity Relationship Diagrams) and LLM orchestration architectures.',
            responsibility: 'Designing the complex database schema that maps real-world furniture inventory to AI vector embeddings.',
        },
        {
            name: 'Khabibulloh Bayramov',
            role: 'LLM Engineer & Backend Specialist (Java)',
            avatar: '/Khabibulloh.jpg',
            linkedinUrl: 'https://www.linkedin.com/in/khabibulloh-bayramov/',
            coreStrength: 'Spring AI & Model Training',
            experience: '2 years of commercial experience in Fintech (Payment projects) and B2B. Hands-on expertise in Training LLMs and using Spring AI for enterprise applications.',
            responsibility: 'Fine-tuning the Retrieval-Augmented Generation (RAG) system to ensure accurate furniture matching.',
        },
    ];

    return (
        <section className="py-20 px-4 bg-[#F8F9FA]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-[#264653] mb-4" style={{fontSize: '2.5rem', lineHeight: '1.2', fontWeight: '700'}}>Meet the Team</h2>
                    <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
                        A passionate team of developers building the future of home design in Uzbekistan.
                    </p>
                </div>

                {/* Team Avatars Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {detailedTeamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center group"
                        >
                            {/* Anchor tag wrapping the avatar */}
                            <a
                                href={member.linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative mb-4 group-hover:scale-105 transition-transform duration-300 block"
                                title={`Visit ${member.name}'s Profile`}
                            >
                                <ImageWithFallback
                                    src={member.avatar}
                                    alt={member.name}
                                    className="w-32 h-32 rounded-full object-cover shadow-[0px_4px_20px_rgba(0,0,0,0.05)] group-hover:shadow-[0px_8px_40px_rgba(0,0,0,0.12)]"
                                />
                                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-[#2A9D8F]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </a>
                            <h4 className="text-[#264653] text-center mb-1" style={{fontSize: '1.25rem', lineHeight: '1.4', fontWeight: '600'}}>{member.name}</h4>
                            <p className="text-sm text-[#6B7280] text-center">{member.role.split(' & ')[0]}</p>
                        </div>
                    ))}
                </div>

                {/* --- Details Toggle Button --- */}
                <div className="text-center mt-12">
                    <button
                        onClick={() => setShowDetails(!showDetails)}
                        className="px-6 py-3 bg-[#264653] text-white rounded-full flex items-center justify-center mx-auto transition-all duration-300 hover:bg-[#2A9D8F] shadow-[0px_4px_20px_rgba(0,0,0,0.05)]"
                    >
                        {showDetails ? (
                            <>
                                That's Why <ChevronUp className="w-5 h-5 ml-2" />
                            </>
                        ) : (
                            <>
                                Why Us? <ChevronDown className="w-5 h-5 ml-2" />
                            </>
                        )}
                    </button>
                </div>

                {/* --- Detailed Section (Conditional Render) --- */}
                {showDetails && (
                    <div className="mt-12 p-8 bg-white rounded-[12px] shadow-[0px_8px_40px_rgba(0,0,0,0.05)] animate-fade-in">
                        <h3 className="text-[#264653] mb-2 text-center" style={{fontSize: '2.25rem', lineHeight: '1.2', fontWeight: '700'}}>
                            Meet Our Multifunctional Team
                        </h3>
                        <p className="text-lg text-[#6B7280] max-w-4xl mx-auto text-center mb-10 border-b pb-6">
                            A cross-functional team combining 2+ years of commercial backend experience, complex infrastructure management, and cutting-edge AI research.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {detailedTeamMembers.map((member) => (
                                <div key={member.name} className="bg-[#F8F9FA] p-6 rounded-[10px] border border-[#2A9D8F]/20">
                                    <h4 className="text-[#264653] mb-1" style={{fontSize: '1.5rem', lineHeight: '1.3', fontWeight: '600'}}>{member.name}</h4>
                                    <p className="text-[#2A9D8F] mb-3 text-sm font-medium">{member.role}</p>

                                    <div className="space-y-3">
                                        <div className="p-3 bg-white rounded-lg border-l-4 border-[#2A9D8F]">
                                            <p className="text-sm text-[#264653] font-semibold mb-1">Core Strength:</p>
                                            <p className="text-sm text-[#6B7280]">{member.coreStrength}</p>
                                        </div>

                                        <div>
                                            <p className="text-sm text-[#264653] font-semibold mb-1">Experience:</p>
                                            <p className="text-sm text-[#6B7280]">{member.experience}</p>
                                        </div>

                                        <div>
                                            <p className="text-sm text-[#264653] font-semibold mb-1">Responsibility:</p>
                                            <p className="text-sm text-[#6B7280] font-medium">{member.responsibility}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}