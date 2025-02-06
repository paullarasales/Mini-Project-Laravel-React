import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Edit({ product }) {
    const { data, setData, put } = useForm({
        productname: product.productname,
        description: product.description,
        price: product.price
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/products/${product.id}`);
    };

    return (
        <AuthenticatedLayout>
            <div>
                <Head title="Edit Product" />
                <h1 classsName="text-2xl font-bold mb-4">Edit Product</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={data.productname}
                        onChange={(e) => setData('productname', e.target.value)}
                        className="border p-2 mb-2 block w-full"
                    />
                    <textarea
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        className="border p-2 mb-2 block w-full"
                    />
                    <input
                        type="number"
                        value={data.price}
                        onChange={(e) => setData('price', e.target.value)}
                        className="border p-2 mb-2 block w-full"
                    />
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2">
                        Update Product
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    )
}       