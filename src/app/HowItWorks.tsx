import { Upload, Palette, ShoppingCart, ArrowRight } from 'lucide-react';

export function HowItWorks() {
    const steps = [
        {
            icon: Upload,
            title: 'Upload Photo',
            description: 'Take a photo of your empty room and upload it to our platform.',
        },
        {
            icon: Palette,
            title: 'Choose Style & Budget',
            description: 'Select from Modern, National, or Hi-Tech styles and set your budget.',
        },
        {
            icon: ShoppingCart,
            title: 'Get Your Design',
            description: 'AI generates your look with a complete shopping list in UZS.',
        },
    ];

    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-[#264653] mb-4" style={{fontSize: '2.5rem', lineHeight: '1.2', fontWeight: '700'}}>How It Works</h2>
                    <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
                        Three simple steps to transform your space from empty concrete to a beautiful home.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-4">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="flex-1 flex flex-col items-center text-center group">
                                <div className="relative">
                                    <div className="w-20 h-20 bg-[#2A9D8F] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0px_4px_20px_rgba(0,0,0,0.05)]">
                                        <Icon className="w-10 h-10 text-white" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#264653] rounded-full flex items-center justify-center text-white">
                                        {index + 1}
                                    </div>
                                </div>

                                <h3 className="text-[#264653] mb-3" style={{fontSize: '1.75rem', lineHeight: '1.3', fontWeight: '600'}}>{step.title}</h3>
                                <p className="text-[#6B7280] max-w-xs">{step.description}</p>

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
