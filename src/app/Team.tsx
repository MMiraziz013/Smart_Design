import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

export function Team() {
    const teamMembers = [
        {
            name: 'Davron Ismatov',
            role: 'Java Dev',
            avatar: '/Davron.jpeg',
        },
        {
            name: 'Umar Khashimov',
            role: 'Python Dev',
            avatar: '/Umar.jpeg',
        },
        {
            name: 'Asadbek Ruslanbekov',
            role: 'Project Manager',
            avatar: '/Asadbek.jpeg',
        },
        {
            name: 'Miraziz Mirvaliyev',
            role: 'C# Dev',
            avatar: '/Miraziz.jpg',
        },
        {
            name: 'Khabibulloh Bayramov',
            role: 'Java Dev',
            avatar: '/Khabibulloh.jpg',
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

                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center group"
                        >
                            <div className="relative mb-4 group-hover:scale-105 transition-transform duration-300">
                                <ImageWithFallback
                                    src={member.avatar}
                                    alt={member.name}
                                    className="w-32 h-32 rounded-full object-cover shadow-[0px_4px_20px_rgba(0,0,0,0.05)] group-hover:shadow-[0px_8px_40px_rgba(0,0,0,0.12)]"
                                />
                                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-[#2A9D8F]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <h4 className="text-[#264653] text-center mb-1" style={{fontSize: '1.25rem', lineHeight: '1.4', fontWeight: '600'}}>{member.name}</h4>
                            <p className="text-sm text-[#6B7280] text-center">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
