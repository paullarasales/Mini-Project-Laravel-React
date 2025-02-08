import React from 'react';

export default function AdminLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-blue-500 p-4">
                <div className="text-white text-lg">Admin Dashboard</div>
            </nav>
            <main className="p-4">
                {children}
            </main>
        </div>
    );
}
