import React from 'react'
import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Index({ products }) {
    const { data, setData, post, reset } = useForm({
        title: '',
        description: '',
        price: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/products', { onSuccess: () => reset() });
    }
}