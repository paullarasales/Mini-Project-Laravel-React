import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AdminLayout({ header, children }) {
    const { auth } = usePage().props; // Access the authenticated user
    const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown toggle

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-lg">
                <div className="p-4 flex items-center border-b border-gray-200">
                    <Link href="/">
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
                                className={`block px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-200 ${route().current('admin.test')
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

            {/* Main Content */}
            <div className="flex flex-1 flex-col">
                {/* Header */}
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-between">
                        {/* Page Title */}
                        <div>{header && <h1 className="text-xl font-semibold text-gray-800">{header}</h1>}</div>

                        {/* User Info at the End */}
                        <div className="relative flex items-center">
                            <button
                                onClick={() => setDropdownOpen((prev) => !prev)}
                                className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg hover:bg-gray-200"
                            >
                                <span className="text-gray-700 font-medium">{auth.user.name}</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-5 w-5 transition-transform ${dropdownOpen ? 'rotate-180' : 'rotate-0'
                                        }`}
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.72-3.71a.75.75 0 011.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0l-4.25-4.25a.75.75 0 01.02-1.06z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
                                    <ul className="py-2">
                                        <li>
                                            <Link
                                                href={route('profile.edit')}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href={route('logout')}
                                                method="post"
                                                as="button"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                Log Out
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                {/* Main Section */}
                <main className="flex-1 p-6">{children}</main>
            </div>
        </div>
    );
}
