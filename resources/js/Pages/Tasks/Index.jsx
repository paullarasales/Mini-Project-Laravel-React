import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from '@inertiajs/inertia';

export default function Index({ tasks }) {
    const { data, setData, post, reset } = useForm({
        title: '',
        description: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/tasks', { onSuccess: () => reset() });
    };

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this task?')) {
            Inertia.delete(`/tasks/${id}`);
        }
    };

    return (
        <AuthenticatedLayout>
            <div>
                <Head title="Tasks" />
                <h1 className="text-2xl font-bold mb-4">Tasks</h1>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Task title"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        className="border p-2 mb-2 block w-full"
                    />
                    <textarea
                        placeholder="Task description"
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        className="border p-2 mb-2 block w-full"
                    />
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2">
                        Add Task
                    </button>
                </form>

                <ul className="mt-4">
                    {tasks.map((task) => (
                        <li key={task.id} className="flex justify-between items-center border p-2 mb-2">
                            <div>
                                <h3 className="font-bold">{task.title}</h3>
                                <p>{task.description}</p>
                            </div>
                            <div>
                                <a
                                    href={`/tasks/${task.id}/edit`}
                                    className="text-blue-500 mr-2"
                                >
                                    Edit
                                </a>
                                <button
                                    onClick={() => handleDelete(task.id)}
                                    className="text-red-500"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </AuthenticatedLayout>
    );
}
