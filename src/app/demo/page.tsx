import React from 'react';
// We'll use the Link component later if needed, but for now, we'll keep the imports minimal.

/**
 * Page component that handles the /demo route for the hackathon submission.
 */
export default function DemoPage() {
    // --- Configuration Constants ---
    // 1. Placeholder for your actual YouTube embed ID
    const YOUTUBE_VIDEO_ID = "2Uxhw-aNW6s"; // 👈 REPLACE with your actual YouTube video ID

    // 2. Prototype Link (already provided)
    const PROTOTYPE_URL = "https://prot.eminence.uz/";

    // 3. Project Information (for the description)
    const techStack = [
        'Java Spring Boot (Core Backend)',
        'Python FastAPI (AI Engine - Multimodal RAG & Vector Search)',
        'Typescript/React/Next.js (Frontend)',
    ];

    const roadmapStage = 'Prototype Phase - Demo Version';
    const nextSteps = 'Integration with 5 Major Retailers (Dafna, AIKO, etc.) and focusing on AR Mobile App & Bank Installments (Q1 2026).';

    // 4. API Example (for the new section)
    const apiRequest = `{
  "roomType": "string",
  "style": "string",
  "images": ["base64string1", "base64string2", "..."]
}`;

    const apiResponse = `{
  "image_id": "8d0f8d28-2e0b-4a51-8579-42e0a6b75b98",
  "prompt_used": "Transform this living room into a modern styled interior.",
  "original_images": [
    "uploads/original/8d0f8d28-2e0b-4a51-8579-42e0a6b75b98_0.png",
    "uploads/original/8d0f8d28-2e0b-4a51-8579-42e0a6b75b98_1.png"
  ],
  "edited_image_path": "uploads/edited/8d0f8d28-2e0b-4a51-8579-42e0a6b75b98_edited.png",
  "edited_image_base64": "iVBORw0KGgoAAAANSUhEUgAA..."
}`;

    return (
        <div className="min-h-screen p-8 md:p-16 bg-gray-50">

            {/* Header */}
            <header className="max-w-7xl mx-auto mb-12">
                <h1 className="text-4xl font-extrabold text-[#264653] mb-4 text-center border-b pb-4" style={{ fontSize: '3.5rem', fontWeight: '700' }}>
                    NaviAIgate Team Presents: SmartDesign AI
                </h1>
                <p className="text-xl text-[#6B7280] text-center">
                    Bridging the gap between the "White Box" and the dream home.
                </p>
            </header>

            {/* --- 1. Demo Video Embed --- */}
            <h2 className="text-3xl font-bold text-[#264653] mb-6 text-center" style={{fontSize: '2.5rem', lineHeight: '1.2', fontWeight: '700'}}>
                Video Presentation
            </h2>
            <div className="w-full max-w-6xl mx-auto rounded-xl shadow-2xl overflow-hidden mb-12">
                {/* Standard responsive YouTube embed container */}
                <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            {/* --- 2. Description of your Demo Video --- */}
            <div className="max-w-6xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg mb-16 space-y-8">
                <h2 className="text-3xl font-bold text-[#264653] border-b pb-4">
                    Product Description & Technical Overview
                </h2>

                <div>
                    <h3 className="text-2xl font-semibold text-[#2A9D8F] mb-3">
                        What is being shown & How it relates to the problem/solution:
                    </h3>
                    <p className="text-lg text-[#264653]">
                        Our video demonstrates the complete user flow of our AI-powered interior design tool. It directly addresses the <strong>"White Box"</strong> Trap and the <strong>"Cost of Guessing"</strong> problems faced by homeowners in Uzbekistan.
                    </p>
                    <ul className="list-disc list-inside ml-4 text-gray-700 mt-2 space-y-1">
                        <li><strong>Upload:</strong> The user uploads a photo of their room (Step 1).</li>
                        <li><strong>Configure:</strong> They select a <strong>Style</strong> (e.g., Modern, National) and set a <strong>Budget</strong> (Step 2).</li>
                        <li><strong>Result:</strong> The AI instantly generates a photorealistic design complete with a <strong>shoppable list</strong> of furniture items available at local stores (Dafna, AIKO), all priced in UZS (Step 3). This eliminates the visualization gap and ensures the design is immediately actionable.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold text-[#2A9D8F] mb-3">
                        Stack, Technologies, and AI Solutions Used:
                    </h3>
                    <ul className="list-disc list-inside ml-4 text-gray-700 space-y-1">
                        {techStack.map((item, index) => (
                            <li key={index}><strong>{item.split(' (')[0]}:</strong> {item.split(' (')[1].replace(')', '')}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold text-[#2A9D8F] mb-3">
                        Roadmap Stage & Next Steps:
                    </h3>
                    <p className="text-lg text-[#264653]">
                        The project is currently in the <strong>{roadmapStage}</strong>.
                    </p>
                    <p className="text-lg text-gray-700 mt-2">
                        Our <strong>next steps</strong> involve {nextSteps}.
                    </p>
                </div>
            </div>

            {/* --- 3. Link to a Working Prototype (Implemented) --- */}
            <div className="text-center mt-16 mb-8">
                <h2 className="text-3xl font-bold text-[#264653] mb-6">
                    Link to a Working Prototype
                </h2>
                <a
                    href={PROTOTYPE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 bg-[#2A9D8F] text-white font-semibold rounded-full 
                               hover:bg-[#238276] transition-all duration-300 shadow-lg 
                               hover:shadow-xl hover:-translate-y-0.5 transform"
                >
                    Try Live Prototype Now
                </a>
            </div>

            {/* --- NEW: API Access Example --- */}
            <div className="max-w-6xl mx-auto mt-16 pb-12">
                <h2 className="text-3xl font-bold text-[#264653] mb-6 text-center">
                    API Access Example
                </h2>
                <p className="text-lg text-[#6B7280] mb-4 text-center">
                    Below is an example of the JSON structure used to interact with our **Python FastAPI AI Engine** for image-to-image design transformation.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* API Request */}
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-semibold text-[#2A9D8F] mb-3 border-b border-[#2A9D8F]/50 pb-2">REQUEST</h3>
                        <pre className="text-sm text-gray-200 overflow-x-auto">
                            <code>{apiRequest}</code>
                        </pre>
                    </div>

                    {/* API Response */}
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-semibold text-[#2A9D8F] mb-3 border-b border-[#2A9D8F]/50 pb-2">RESPONSE</h3>
                        <pre className="text-sm text-gray-200 overflow-x-auto">
                            <code>{apiResponse}</code>
                        </pre>
                    </div>
                </div>
            </div>
            {/* --- END NEW API SECTION --- */}
        </div>
    );
}