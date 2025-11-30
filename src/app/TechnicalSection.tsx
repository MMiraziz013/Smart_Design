import { Cpu, Database, Layers } from 'lucide-react';
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

export function TechnicalSection() {
    const techStack = [
        {
            name: 'Java Spring Boot',
            role: 'Core Backend',
            description: 'Used for building a robust and scalable microservice architecture, managing business logic, user authentication, and secure data handling.'
        },
        {
            name: 'Python FastAPI',
            role: 'AI Engine',
            description: 'Selected for its high performance and asynchronous capabilities, providing a fast and efficient endpoint to expose the Multimodal RAG and Vector Search models.'
        },
        {
            name: 'Typescript/React/Next.js',
            role: 'Frontend',
            description: 'Leveraged for modern, type-safe development to create a fast, server-rendered, and highly interactive user experience (UI).'
        },
    ];

    return (
        <section className="py-20 px-4 bg-[#F8F9FA] relative overflow-hidden">
            {/* Background blur effect */}
            <div className="absolute inset-0 opacity-20">
                <ImageWithFallback
                    src="https://images.unsplash.com/photo-1713463374257-16790466d9af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwYWJzdHJhY3QlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc2NDMzODk2NHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Tech background"
                    className="w-full h-full object-cover blur-3xl"
                />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-[#264653] mb-4" style={{fontSize: '2.5rem', lineHeight: '1.2', fontWeight: '700'}}>Under the Hood</h2>
                    <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
                        Built with cutting-edge technology for real-time AI interior design.
                    </p>
                </div>

                {/* Glass morphism card */}
                <div className="bg-white/70 backdrop-blur-xl rounded-[12px] p-8 md:p-12 shadow-[0px_6px_30px_rgba(0,0,0,0.08)] border border-white/20">
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        {/* Left side - Tech highlights */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#2A9D8F]/10 rounded-[12px] flex items-center justify-center flex-shrink-0">
                                    <Cpu className="w-6 h-6 text-[#2A9D8F]" />
                                </div>
                                <div>
                                    <h4 className="text-[#264653] mb-2" style={{fontSize: '1.25rem', lineHeight: '1.4', fontWeight: '600'}}>Multimodal RAG</h4>
                                    <p className="text-[#6B7280]">
                                        Retrieval-Augmented Generation for intelligent furniture matching (using image, text, and room dimensions).
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#2A9D8F]/10 rounded-[12px] flex items-center justify-center flex-shrink-0">
                                    <Database className="w-6 h-6 text-[#2A9D8F]" />
                                </div>
                                <div>
                                    <h4 className="text-[#264653] mb-2" style={{fontSize: '1.25rem', lineHeight: '1.4', fontWeight: '600'}}>Vector Search</h4>
                                    <p className="text-[#6B7280]">
                                        Semantic search across thousands of real furniture items, ensuring highly relevant, budget-aligned recommendations.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#2A9D8F]/10 rounded-[12px] flex items-center justify-center flex-shrink-0">
                                    <Layers className="w-6 h-6 text-[#2A9D8F]" />
                                </div>
                                <div>
                                    <h4 className="text-[#264653] mb-2" style={{fontSize: '1.25rem', lineHeight: '1.4', fontWeight: '600'}}>Microservices</h4>
                                    <p className="text-[#6B7280]">
                                        Scalable architecture that separates the AI engine (Python) from the core business logic (Java), allowing independent scaling and robust deployment.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right side - Tech stack with descriptions */}
                        <div className="space-y-4">
                            <h3 className="text-[#264653] mb-6" style={{fontSize: '1.75rem', lineHeight: '1.3', fontWeight: '600'}}>Core Tech Stack</h3>
                            {techStack.map((tech) => (
                                <div
                                    key={tech.name}
                                    className="bg-white rounded-[12px] p-4 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0px_8px_40px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="flex flex-col">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-[#264653] font-semibold">{tech.name}</span>
                                            <span className="text-xs font-medium text-[#2A9D8F] bg-[#2A9D8F]/10 px-2 py-0.5 rounded-full">
                                                {tech.role}
                                            </span>
                                        </div>
                                        <p className="text-sm text-[#6B7280] mt-1">{tech.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}