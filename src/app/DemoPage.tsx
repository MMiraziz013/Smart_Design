"use client"

import { useState, useEffect } from 'react';
import { Camera, Upload, Palette, Cpu, Sparkles, CheckCircle, ArrowLeft, Wallet } from 'lucide-react';
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

interface DemoPageProps {
    onBack: () => void;
}

export function DemoPage({ onBack }: DemoPageProps) {
    const [currentStep, setCurrentStep] = useState(1);
    const [isProcessing, setIsProcessing] = useState(false);
    const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [selectedFurniture, setSelectedFurniture] = useState<string[]>([]);
    const [budget, setBudget] = useState(20000000);

    const styles = [
        {id: 'modern', name: 'Modern', description: 'Clean lines, minimalist aesthetic'},
        {id: 'national', name: 'National', description: 'Traditional Uzbek patterns'},
        {id: 'hitech', name: 'Hi-Tech', description: 'Futuristic, smart home ready'},
    ];

    const furnitureByStyle = {
        modern: [
            {
                id: 'modern-1',
                name: 'CALMA bed',
                store: 'Best Mebel',
                price: '7,900,000 UZS',
                priceNum: 7900000,
                image: '/modern-bed.jpg',
            },
            {
                id: 'modern-2',
                name: 'Amani chair Pro',
                store: 'Askona',
                price: '2,223,000 UZS',
                priceNum: 2223000,
                image: 'modern-chair.jpg',
            },
            {
                id: 'modern-3',
                name: 'Wardrobe №8',
                store: 'Best Mebel',
                price: '1,650,000 UZS',
                priceNum: 1650000,
                image: '/modern-wardrobe.png',
            },
        ],
        national: [
            {
                id: 'national-1',
                name: 'Villa Cabinet',
                store: 'Rich House',
                price: '1,759,600 UZS',
                priceNum: 1759600,
                image: '/national-cabinet.jpg',
            },
            {
                id: 'national-2',
                name: 'Four Door Wardrobe Kasli',
                store: 'Askona',
                price: '5,939,290 UZS',
                priceNum: 5939290,
                image: '/national-wardrobe.jpg',
            },
            {
                id: 'national-3',
                name: 'Villa Bed',
                store: 'Rich House',
                price: '6,282,000 UZS',
                priceNum: 6282000,
                image: '/national-bed.jpg',
            },
        ],
        hitech: [
            {
                id: 'hitech-1',
                name: 'CALMA bed',
                store: 'AIKO',
                price: '13,233,000 UZS',
                priceNum: 13223000,
                image: '/bed.jpg',
            },
            {
                id: 'hitech-2',
                name: 'Bedside table CALMA',
                store: 'AIKO',
                price: '2. 223,000 UZS',
                priceNum: 2223000,
                image: 'bedside-table-small.jpg',
            },
            {
                id: 'hitech-3',
                name: 'Hanging dressing table CALMA',
                store: 'AIKO',
                price: '2,477,000 UZS',
                priceNum: 2477000,
                image: '/hanging-bedside.jpg',
            },
        ],
    };

    const resultImagesByStyle = {
        modern: 'filled-room-modern.png',
        national: 'filled-room-national.png',
        hitech: 'filled-room.png'
    };

    const getCurrentFurniture = () => {
        if (!selectedStyle) return [];
        return furnitureByStyle[selectedStyle as keyof typeof furnitureByStyle];
    };

    const getTotalPrice = () => {
        const furniture = getCurrentFurniture();
        return furniture.reduce((sum, item) => sum + item.priceNum, 0);
    };

    useEffect(() => {
        if (currentStep === 2 && uploadProgress < 100) {
            const timer = setTimeout(() => {
                setUploadProgress(prev => Math.min(prev + 10, 100));
            }, 200);
            return () => clearTimeout(timer);
        }
        if (uploadProgress === 100 && currentStep === 2) {
            setTimeout(() => setCurrentStep(3), 500);
        }
    }, [uploadProgress, currentStep]);

    useEffect(() => {
        if (currentStep === 5 && isProcessing) {
            const furniture = getCurrentFurniture();
            const timers = furniture.map((item, index) =>
                setTimeout(() => {
                    setSelectedFurniture(prev => [...prev, item.id]);
                }, (index + 1) * 1000)
            );

            const finalTimer = setTimeout(() => {
                setIsProcessing(false);
                setCurrentStep(6);
            }, 4000);

            return () => {
                timers.forEach(clearTimeout);
                clearTimeout(finalTimer);
            };
        }
    }, [currentStep, isProcessing, selectedStyle]);

    const handleStyleSelect = (styleId: string) => {
        setSelectedStyle(styleId);
        setTimeout(() => {
            setCurrentStep(4);
            setIsProcessing(true);
        }, 800);
    };

    const handleBudgetContinue = () => {
        setCurrentStep(5);
        setIsProcessing(true);
        setSelectedFurniture([]);
    };

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('uz-UZ').format(value);
    };

    const startDemo = () => {
        setCurrentStep(2);
        setUploadProgress(0);
    };

    const currentFurniture = getCurrentFurniture();
    const totalPrice = getTotalPrice();
    const resultImage = selectedStyle ? resultImagesByStyle[selectedStyle as keyof typeof resultImagesByStyle] : '';

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-[#264653] text-white py-6 px-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5"/>
                        <span>Back to Home</span>
                    </button>
                    <h2 className="text-white">Live Demo</h2>
                    <div className="w-24"/>
                </div>
            </div>

            {/* Progress Indicator */}
            <div className="bg-[#F8F9FA] py-8 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center justify-between">
                        {[
                            {num: 1, label: 'Capture', icon: Camera},
                            {num: 2, label: 'Upload', icon: Upload},
                            {num: 3, label: 'Style', icon: Palette},
                            {num: 4, label: 'Budget', icon: Wallet},
                            {num: 5, label: 'AI Process', icon: Cpu},
                            {num: 6, label: 'Result', icon: Sparkles},
                        ].map((step, index) => {
                            const Icon = step.icon;
                            const isActive = currentStep >= step.num;
                            const isCurrent = currentStep === step.num;

                            return (
                                <div key={step.num} className="flex items-center flex-1">
                                    <div className="flex flex-col items-center flex-1">
                                        <div
                                            className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-500 ${
                                                isActive
                                                    ? 'bg-[#2A9D8F] text-white shadow-[0px_4px_20px_rgba(42,157,143,0.3)]'
                                                    : 'bg-white text-[#264653]/30 border-2 border-[#264653]/10'
                                            } ${isCurrent ? 'scale-110' : ''}`}>
                                            <Icon className="w-6 h-6"/>
                                        </div>
                                        <span
                                            className={`text-sm ${isActive ? 'text-[#264653]' : 'text-[#264653]/40'}`}>
                      {step.label}
                    </span>
                                    </div>
                                    {index < 5 && (
                                        <div className={`h-0.5 flex-1 mx-2 transition-all duration-500 ${
                                            currentStep > step.num ? 'bg-[#2A9D8F]' : 'bg-[#264653]/10'
                                        }`}/>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="py-16 px-4">
                <div className="max-w-5xl mx-auto">

                    {/* Step 1: Capture Photo */}
                    {currentStep === 1 && (
                        <div className="text-center space-y-8 animate-fade-in">
                            <div className="max-w-2xl mx-auto">
                                <h2 className="text-[#264653] mb-4"
                                    style={{fontSize: '2.5rem', lineHeight: '1.2', fontWeight: '700'}}>Take a Photo of
                                    Your Room</h2>
                                <p className="text-lg text-[#6B7280] mb-8">
                                    Simply use your smartphone to capture your empty room. Make sure to get a clear view
                                    of the space.
                                </p>
                            </div>

                            <div
                                className="relative max-w-2xl mx-auto rounded-[12px] overflow-hidden shadow-[0px_6px_30px_rgba(0,0,0,0.08)]">
                                <ImageWithFallback
                                    src="/empty-room.jpg"
                                    alt="Person taking photo"
                                    className="w-full h-[400px] object-cover"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-[#264653]/60 to-transparent flex items-end justify-center pb-8">
                                    <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-white">
                                        <Camera className="w-5 h-5 inline mr-2"/>
                                        Capturing your space...
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={startDemo}
                                className="px-8 py-4 bg-[#2A9D8F] text-white rounded-full hover:bg-[#238276] transition-all duration-300 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0px_8px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1"
                            >
                                Start Upload Process
                            </button>
                        </div>
                    )}

                    {/* Step 2: Upload Process */}
                    {currentStep === 2 && (
                        <div className="text-center space-y-8">
                            <div className="max-w-2xl mx-auto">
                                <h2 className="text-[#264653] mb-4"
                                    style={{fontSize: '2.5rem', lineHeight: '1.2', fontWeight: '700'}}>Uploading Your
                                    Photo</h2>
                                <p className="text-lg text-[#6B7280]">
                                    Securely transferring your image to our AI processing system...
                                </p>
                            </div>

                            <div
                                className="max-w-2xl mx-auto bg-[#F8F9FA] rounded-[12px] p-12 shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
                                <div className="mb-6">
                                    <ImageWithFallback
                                        src="/empty-room.jpg"
                                        alt="Room being uploaded"
                                        className="w-full h-[300px] object-cover rounded-[12px] opacity-50"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between text-sm text-[#264653]">
                                        <span>room_photo.jpg</span>
                                        <span>{uploadProgress}%</span>
                                    </div>

                                    <div className="h-3 bg-white rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-[#2A9D8F] transition-all duration-300 ease-out rounded-full"
                                            style={{width: `${uploadProgress}%`}}
                                        />
                                    </div>

                                    <div className="flex items-center justify-center gap-2 text-[#6B7280] text-sm">
                                        <Upload className="w-4 h-4 animate-pulse"/>
                                        <span>Uploading to secure server...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Style Selection */}
                    {currentStep === 3 && (
                        <div className="text-center space-y-8 animate-fade-in">
                            <div className="max-w-2xl mx-auto">
                                <h2 className="text-[#264653] mb-4"
                                    style={{fontSize: '2.5rem', lineHeight: '1.2', fontWeight: '700'}}>Choose Your
                                    Style</h2>
                                <p className="text-lg text-[#6B7280]">
                                    Select a design aesthetic that matches your preferences and budget.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                                {styles.map((style) => (
                                    <button
                                        key={style.id}
                                        onClick={() => handleStyleSelect(style.id)}
                                        className={`bg-white p-8 rounded-[12px] border-2 transition-all duration-300 hover:shadow-[0px_8px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 ${
                                            selectedStyle === style.id
                                                ? 'border-[#2A9D8F] shadow-[0px_8px_40px_rgba(42,157,143,0.2)]'
                                                : 'border-[#264653]/10 shadow-[0px_4px_20px_rgba(0,0,0,0.05)]'
                                        }`}
                                    >
                                        <div
                                            className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                                                selectedStyle === style.id ? 'bg-[#2A9D8F]' : 'bg-[#2A9D8F]/10'
                                            }`}>
                                            <Palette className={`w-8 h-8 ${
                                                selectedStyle === style.id ? 'text-white' : 'text-[#2A9D8F]'
                                            }`}/>
                                        </div>
                                        <h3 className="text-[#264653] mb-2" style={{
                                            fontSize: '1.75rem',
                                            lineHeight: '1.3',
                                            fontWeight: '600'
                                        }}>{style.name}</h3>
                                        <p className="text-sm text-[#6B7280]">{style.description}</p>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 4: Budget Selection */}
                    {currentStep === 4 && (
                        <div className="text-center space-y-8 animate-fade-in">
                            <div className="max-w-2xl mx-auto">
                                <h2 className="text-[#264653] mb-4">Set Your Budget</h2>
                                <p className="text-lg text-[#6B7280]">
                                    Tell us your budget range and we'll find the perfect furniture within your means.
                                </p>
                            </div>

                            <div
                                className="max-w-3xl mx-auto bg-white rounded-[12px] p-12 shadow-[0px_6px_30px_rgba(0,0,0,0.08)]">
                                <div className="mb-12">
                                    <div className="flex items-center justify-center mb-8">
                                        <div className="bg-[#2A9D8F]/10 p-6 rounded-full">
                                            <Wallet className="w-12 h-12 text-[#2A9D8F]"/>
                                        </div>
                                    </div>

                                    <div className="text-center mb-8">
                                        <div className="text-5xl text-[#2A9D8F] mb-2">
                                            {formatCurrency(budget)} UZS
                                        </div>
                                        <p className="text-sm text-[#6B7280]">Your renovation budget</p>
                                    </div>

                                    <div className="space-y-4">
                                        <input
                                            type="range"
                                            min="20000000"
                                            max="100000000"
                                            step="5000000"
                                            value={budget}
                                            onChange={e => setBudget(Number(e.target.value))}
                                            className="w-full h-3 bg-[#F8F9FA] rounded-full cursor-pointer slider-thumb"
                                        />

                                        <div className="flex justify-between text-sm text-[#6B7280]">
                                            <span>20M UZS</span>
                                            <span>100M UZS</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 mt-8">
                                        {[
                                            {label: 'Budget', value: 20000000},
                                            {label: 'Standard', value: 50000000},
                                            {label: 'Premium', value: 80000000},
                                        ].map((preset) => (
                                            <button
                                                key={preset.label}
                                                onClick={() => setBudget(preset.value)}
                                                className={`py-3 px-4 rounded-[12px] border-2 transition-all duration-300 ${
                                                    budget === preset.value
                                                        ? 'border-[#2A9D8F] bg-[#2A9D8F]/10 text-[#2A9D8F]'
                                                        : 'border-[#264653]/10 text-[#264653] hover:border-[#2A9D8F]/50'
                                                }`}
                                            >
                                                <div className="text-sm mb-1">{preset.label}</div>
                                                <div
                                                    className="text-xs text-[#6B7280]">{formatCurrency(preset.value)}</div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    onClick={handleBudgetContinue}
                                    className="w-full px-8 py-4 bg-[#2A9D8F] text-white rounded-full hover:bg-[#238276] transition-all duration-300 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0px_8px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1"
                                >
                                    Continue with {formatCurrency(budget)} UZS
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 5: AI Processing */}
                    {currentStep === 5 && (
                        <div className="text-center space-y-8">
                            <div className="max-w-2xl mx-auto">
                                <h2 className="text-[#264653] mb-4"
                                    style={{fontSize: '2.5rem', lineHeight: '1.2', fontWeight: '700'}}>AI Selecting
                                    Furniture</h2>
                                <p className="text-lg text-[#6B7280]">
                                    Our AI is searching through thousands of {selectedStyle} furniture items from local
                                    Tashkent stores...
                                </p>
                            </div>

                            <div
                                className="max-w-3xl mx-auto bg-[#F8F9FA] rounded-[12px] p-8 shadow-[0px_6px_30px_rgba(0,0,0,0.08)]">
                                <div className="flex items-center justify-center mb-8">
                                    <div className="relative">
                                        <div className="w-20 h-20 bg-[#2A9D8F]/20 rounded-full animate-ping absolute"/>
                                        <div
                                            className="w-20 h-20 bg-[#2A9D8F] rounded-full flex items-center justify-center relative">
                                            <Cpu className="w-10 h-10 text-white animate-pulse"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="text-[#264653] mb-6">Matching {selectedStyle} furniture to your
                                        space...
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-4">
                                        {currentFurniture.map((item) => {
                                            const isSelected = selectedFurniture.includes(item.id);

                                            return (
                                                <div
                                                    key={item.id}
                                                    className={`bg-white rounded-[12px] p-4 transition-all duration-500 ${
                                                        isSelected
                                                            ? 'opacity-100 scale-100 shadow-[0px_4px_20px_rgba(42,157,143,0.2)] border-2 border-[#2A9D8F]'
                                                            : 'opacity-30 scale-95 shadow-[0px_4px_20px_rgba(0,0,0,0.05)]'
                                                    }`}
                                                >
                                                    <div className="relative mb-3">
                                                        <ImageWithFallback
                                                            src={item.image}
                                                            alt={item.name}
                                                            className="w-full h-32 object-cover rounded-lg"
                                                        />
                                                        {isSelected && (
                                                            <div
                                                                className="absolute top-2 right-2 w-6 h-6 bg-[#2A9D8F] rounded-full flex items-center justify-center">
                                                                <CheckCircle className="w-4 h-4 text-white"/>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <h4 className="text-sm text-[#264653] mb-1" style={{
                                                        fontSize: '1.25rem',
                                                        lineHeight: '1.4',
                                                        fontWeight: '600'
                                                    }}>{item.name}</h4>
                                                    <p className="text-xs text-[#6B7280] mb-1">{item.store}</p>
                                                    <p className="text-sm text-[#2A9D8F]">{item.price}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="flex gap-3 justify-center pt-4">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i}
                                                 className="w-16 h-16 bg-[#264653]/10 rounded-lg animate-pulse"/>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 6: Final Result */}
                    {currentStep === 6 && (
                        <div className="text-center space-y-8 animate-fade-in">
                            <div className="max-w-2xl mx-auto">
                                <h2 className="text-[#264653] mb-4"
                                    style={{fontSize: '2.5rem', lineHeight: '1.2', fontWeight: '700'}}>Your Dream Room
                                    is Ready!</h2>
                                <p className="text-lg text-[#6B7280]">
                                    Here's your personalized {selectedStyle} design with real furniture from local
                                    Tashkent stores.
                                </p>
                            </div>

                            <div
                                className="max-w-4xl mx-auto bg-white rounded-[12px] overflow-hidden shadow-[0px_6px_30px_rgba(0,0,0,0.08)]">
                                <div className="relative">
                                    <ImageWithFallback
                                        src={resultImage}
                                        alt="Final 3D render"
                                        className="w-full h-[500px] object-cover"
                                    />
                                    <div
                                        className="absolute top-4 right-4 bg-[#2A9D8F] text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
                                        <Sparkles className="w-4 h-4"/>
                                        AI Generated {selectedStyle} Design
                                    </div>
                                </div>

                                <div className="p-8 bg-[#F8F9FA]">
                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        <div className="bg-white p-6 rounded-[12px]">
                                            <h3 className="text-[#264653] mb-3">Shopping List</h3>
                                            <div className="space-y-3">
                                                {currentFurniture.map((item) => (
                                                    <div key={item.id}
                                                         className="flex justify-between items-center text-sm">
                                                        <span className="text-[#264653]">{item.name}</span>
                                                        <span className="text-[#2A9D8F]">{item.price}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="bg-white p-6 rounded-[12px]">
                                            <h3 className="text-[#264653] mb-3" style={{
                                                fontSize: '1.75rem',
                                                lineHeight: '1.3',
                                                fontWeight: '600'
                                            }}>Total Budget</h3>
                                            <div
                                                className="text-4xl text-[#2A9D8F] mb-4">{formatCurrency(totalPrice)} UZS
                                            </div>
                                            <p className="text-sm text-[#6B7280] mb-4">All items available for immediate
                                                purchase</p>
                                            <button
                                                className="w-full px-6 py-3 bg-[#2A9D8F] text-white rounded-full hover:bg-[#238276] transition-all duration-300 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0px_8px_40px_rgba(0,0,0,0.12)]">
                                                Purchase All Items
                                            </button>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => {
                                            setCurrentStep(1);
                                            setUploadProgress(0);
                                            setSelectedStyle(null);
                                            setSelectedFurniture([]);
                                            setIsProcessing(false);
                                            setBudget(20000000);
                                        }}
                                        className="w-full px-6 py-3 bg-white text-[#2A9D8F] border-2 border-[#2A9D8F] rounded-full hover:bg-[#2A9D8F] hover:text-white transition-all duration-300"
                                    >
                                        Try Another Room
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}