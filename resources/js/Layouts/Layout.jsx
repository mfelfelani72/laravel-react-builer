import { Link } from "@inertiajs/react";

const Layout = ({ children }) => {
    return (
        <main>
            <header className="flex flex-row justify-between h-12 items-center px-4 text-amber-50 bg-pink-500">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </header>
            <article>{children}</article>
        </main>
    );
};

export default Layout;
