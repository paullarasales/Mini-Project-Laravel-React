import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AdminLayout({ header, children }) {
    const { auth } = usePage().props;
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-gray-100">
            <aside className="w-64 bg-white shadow-md">
                <div className="p-4 flex items-start">
                    <Link href="/admin/dashboard">
                        <ApplicationLogo className="block h-10 w-auto fill-current text-gray-800" />
                    </Link>
                </div>
                <nav className="mt-4">
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href={route('admin.dashboard')}
                                className={`block px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-200 ${route().current('admin.dashboard')
                                    ? 'bg-gray-200 text-gray-900'
                                    : 'text-gray-600'
                                    }`}
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={route('admin.test')}
                                className={`block px-4 py-2 text-sm font-medium rounded-lg hover:bg:gray-200 ${route().current('admin.test')
                                    ? 'bg-gray-200 text-gray-900'
                                    : 'text-gray-600'
                                    }`}
                            >
                                Test
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>

            <div className="flex flex-1 flex-col">
                <header className="bg-red-600 shadow-md">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg-px-8 flex items-center justify-between">
                        <div>
                            {header && <h1 className="text-xl font-semibold text-gray-800">{header}</h1>}
                        </div>
                        <div className="relative flex items-center">
                            <button
                                onClick={() => setDropdownOpen((prev) => !prev)}
                                className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg hover:bg-gray-200"
                            >
                                <span className="text-gray-700 font-medium">{auth.user.name}</span>
                            </button>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}