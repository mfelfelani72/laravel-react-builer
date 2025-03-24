import { Link } from "@inertiajs/react";

const Layout = ({ children }) => {
    return (
        <main>
            <header className="flex flex-row justify-between h-20 items-center px-24 text-amber-50 bg-cyan-950">
                <Link preserveScroll href="/">Home</Link>
                <Link href="/posts/create">Create</Link>
            </header>
            <article>{children}</article>
        </main>
    );
};

export default Layout;
