import { useState } from 'react';
import { ChevronLeft, ChevronRight, Tag } from 'lucide-react';
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import Link from 'next/link';

interface ShoppingTag {
    id: string;
    name: string;
    price: string;
    x: number; // percentage
    y: number; // percentage
}

interface HeroProps {
    onTryDemo?: () => void; // 👈 This function switches the state in App.tsx
}

export function Hero({ onTryDemo }: HeroProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const [hoveredTag, setHoveredTag] = useState<string | null>(null);

    const shoppingTags: ShoppingTag[] = [
        { id: '1', name: 'CALMA bed', price: '13,233,000 UZS', x: 35, y: 60 },
        // { id: '2', name: 'Coffee Table', price: '1,200,000 UZS', x: 50, y: 70 },
        { id: '3', name: 'Bedside table CALMA', price: '2,223,000 UZS', x: 78, y: 60},
        { id: '4', name: 'Hanging dressing table CALMA', price: '2, 477,000 UZS', x: 20, y: 52},
    ];

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        setSliderPosition(Math.max(0, Math.min(100, percentage)));
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-white">
            <div className="max-w-7xl w-full">

                {/* 👈 NEW: Button to trigger the old state-based DemoPage view */}
                {/*<div className="flex justify-end mb-6">*/}
                {/*    <button*/}
                {/*        onClick={onTryDemo} // 👈 Calls the state-switching function passed from App.tsx*/}
                {/*        className="flex items-center gap-2 px-4 py-2 text-sm text-[#264653] */}
                {/*                   border border-[#264653]/10 rounded-full hover:bg-[#F8F9FA] transition-colors"*/}
                {/*    >*/}
                {/*        Go to Interactive Demo*/}
                {/*    </button>*/}
                {/*</div>*/}
                {/* END NEW BUTTON */}

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Text */}
                    <div className="space-y-6">
                        <h1 className="text-[#264653]" style={{ fontSize: '3.5rem', fontWeight: '700' }}>
                            Turn Your White
                            Box into a Cozy Space in Seconds.
                        </h1>
                        <p className="text-xl text-[#6B7280]">
                            Uzbekistan's first AI designer that uses real furniture from local stores (Dafna, AIKO).
                            Visualize, budget, and buy.
                        </p>

                        {/* This button still uses Next.js Link for the /demo URL route */}
                        <Link
                            href="/demo"
                            className="inline-block px-8 py-4 bg-[#2A9D8F] text-white rounded-full hover:bg-[#238276] transition-all duration-300 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0px_8px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1"
                        >
                            Try Demo Now
                        </Link>
                    </div>

                    {/* Right Side - Before/After Slider (Intact) */}
                    <div className="relative">
                        <div
                            className="relative w-full aspect-[4/3] rounded-[12px] overflow-hidden shadow-[0px_6px_30px_rgba(0,0,0,0.08)] cursor-ew-resize"
                            onMouseMove={handleMouseMove}
                            onMouseDown={handleMouseDown}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                        >
                            {/* Before Image (Empty Room) */}
                            <div className="absolute inset-0">
                                <ImageWithFallback
                                    src="/empty-room.jpg"
                                    alt="Empty concrete room"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-[#264653]">
                                    Before: Empty White Box
                                </div>
                            </div>

                            {/* After Image (Furnished Room) */}
                            <div
                                className="absolute inset-0 overflow-hidden"
                                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                            >
                                <ImageWithFallback
                                    src="/filled-room.png"
                                    alt="Furnished modern room"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-[#264653]">
                                    After: AI Design
                                </div>

                                {/* Shopping Tags - Only visible on furnished side */}
                                {sliderPosition > 40 && shoppingTags.map((tag) => (
                                    <div
                                        key={tag.id}
                                        className="absolute"
                                        style={{ left: `${tag.x}%`, top: `${tag.y}%` }}
                                        onMouseEnter={() => setHoveredTag(tag.id)}
                                        onMouseLeave={() => setHoveredTag(null)}
                                    >
                                        <div className="relative">
                                            <div className="w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                                                <Tag className="w-4 h-4 text-[#2A9D8F]" />
                                            </div>
                                            {hoveredTag === tag.id && (
                                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-white px-3 py-2 rounded-lg shadow-lg text-sm text-[#264653]">
                                                    <div className="font-semibold">{tag.name}</div>
                                                    <div className="text-[#2A9D8F]">{tag.price}</div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Slider Handle */}
                            <div
                                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                                style={{ left: `${sliderPosition}%` }}
                            >
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                                    <ChevronLeft className="w-4 h-4 text-[#264653] absolute left-1" />
                                    <ChevronRight className="w-4 h-4 text-[#264653] absolute right-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}