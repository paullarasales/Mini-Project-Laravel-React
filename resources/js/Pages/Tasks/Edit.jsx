import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Edit({ task }) {
    const { data, setData, put } = useForm({
        title: task.title,
        description: task.description || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/tasks/${task.id}`);
    };

    return (
        <AuthenticatedLayout>

        </AuthenticatedLayout>
    )
}