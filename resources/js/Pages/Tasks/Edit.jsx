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
            <div>
                <Head title="Edit Task"></Head>
                <h1 className="text-2xl font-bold mb-4">Edit Task</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        className="border p-2 mb-2 block w-full"
                    />
                    <textarea
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        className="border p-2 mb-2 block w-full"
                    />
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2">
                        Update Task
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    )
}