import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import LayoutAdmin from "../views/js/admin/layouts/Layout";
import LayoutUser from "../views/js/user/layouts/Layout";

createInertiaApp({
    resolve: (name) => {

        let modules = null;
        let module = null;
        
        if (window.location.pathname.includes('/admin')) {
            modules = import.meta.glob("../views/js/admin/modules/**/*.jsx", { eager: true });
            module = modules[`../views/js/admin/modules/${name}.jsx`];
            module.default.layout =
                module.default.layout || ((module) => <LayoutAdmin children={module} />);
        }
        else {
            modules = import.meta.glob("../views/js/user/modules/**/*.jsx", { eager: true });
            module = modules[`../views/js/user/modules/${name}.jsx`];
            module.default.layout =
                module.default.layout || ((module) => <LayoutUser children={module} />);
        }

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
