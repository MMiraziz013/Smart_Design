import { Github, Mail, FileText } from 'lucide-react';

export function Footer() {
    return (
        <footer className="py-12 px-4 bg-[#264653] text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo/Brand */}
                    <div className="text-center md:text-left">
                        <h3 className="text-white mb-2">AI Interior Designer</h3>
                        <p className="text-white/70">
                            Hackathon Project 2025
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-6">
                        <a
                            href="#github"
                            className="flex items-center gap-2 text-white/80 hover:text-[#2A9D8F] transition-colors duration-300"
                        >
                            <Github className="w-5 h-5" />
                            <span>GitHub Repo</span>
                        </a>
                        <a
                            href="#contact"
                            className="flex items-center gap-2 text-white/80 hover:text-[#2A9D8F] transition-colors duration-300"
                        >
                            <Mail className="w-5 h-5" />
                            <span>Contact</span>
                        </a>
                        <a
                            href="#submission"
                            className="flex items-center gap-2 text-white/80 hover:text-[#2A9D8F] transition-colors duration-300"
                        >
                            <FileText className="w-5 h-5" />
                            <span>Submission</span>
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
                    <p>© 2025 AI Interior Designer. Built for Uzbekistan Hackathon.</p>
                </div>
            </div>
        </footer>
    );
}
