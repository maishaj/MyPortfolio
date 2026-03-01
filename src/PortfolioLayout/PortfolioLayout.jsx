import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const PortfolioLayout = () => {
    return (
       <div className="relative min-h-screen bg-[#030303] selection:bg-cyan-500/30">
            
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/10 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[120px]" />
            </div>

            <Navbar />
            
            <main className="relative z-10">
                <Outlet />
            </main>
        </div>
    );
};

export default PortfolioLayout;