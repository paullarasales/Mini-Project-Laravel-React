import React from 'react'
import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Index({ products }) {
    const { data, setData, post, reset } = useForm({
        productname: '',
        description: '',
        price: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/products', { onSuccess: () => reset() });
    }

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this product?')) {
            Inertia.delete(`/products/${id}`);
        }
    };

    return (
        <AuthenticatedLayout>
            <div>
                <Head title="Products" />
                <h1 className="text-2xl font-bold mb-4">Products</h1>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Product Name"
                        value={data.productname}
                        onChange={(e) => setData('productname', e.target.value)}
                        className="border p-2 mb-2 block w-full"
                    />
                    <textarea
                        placeholder="Product description"
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        className="border p-2 mb-2 block w-full"
                    />
                    <input
                        type="number"
                        placeholder="Product Price"
                        value={data.price}
                        onChange={(e) => setData('price', e.target.value)}
                        className="border p-2 mb-2 block w-full"
                    />
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2">
                        Add Product
                    </button>
                </form>

                <ul className="mt-4">
                    {products.map((product) => (
                        <li key={product.id} className="flex justify-between items-center border p-2 mb-2">
                            <div>
                                <h3 className="font-bold">{product.title}</h3>
                                <p>{product.description}</p>
                                <p>{product.price}</p>
                            </div>
                            <div>
                                <a
                                    href={`/products/${product.id}/edit`}
                                    className="text-blue-500 mr-2"
                                >
                                    Edit
                                </a>
                                <button
                                    onClick={() => handleDelete(product.id)}
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