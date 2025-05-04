import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import Layout from "./Layouts/Layout";

createInertiaApp({
    resolve: (name) => {
        const modules = import.meta.glob("./Modules/**/*.jsx", { eager: true });
        let module = modules[`./Modules/${name}.jsx`];
        module.default.layout =
            module.default.layout || ((module) => <Layout children={module} />);
        return module;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },

    progress: {
        // The delay after which the progress bar will appear, in milliseconds...
        delay: 0,

        // The color of the progress bar...
        color: "#29d",

        // Whether to include the default NProgress styles...
        includeCSS: true,

        // Whether the NProgress spinner will be shown...
        showSpinner: false,
    },
});
