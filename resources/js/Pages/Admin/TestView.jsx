import React from 'react';
import AdminAuthenticatedLayout from '@/Layouts/AdminAuthenticatedLayout';

export default function TestView() {
    return (
        <AdminAuthenticatedLayout>
            <div>
                <h1>Hello Admin</h1>
            </div>
        </AdminAuthenticatedLayout>
    )
}