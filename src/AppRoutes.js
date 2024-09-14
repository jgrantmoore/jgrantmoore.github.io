import App from "./App";
import { ContactInfo } from "./Pages/ContactInfo";
import { Home } from "./Pages/Home";
import { Resume } from "./Pages/Resume";
import { Projects } from "./Pages/Projects";
import { Error404 } from "./Pages/Error404";


const AppRoutes = [
    {
    index: true,
    element: <Home />
    },
    {
        path: '/testpage',
        element: <App />
    },
    {
        path: '/resume',
        element: <Resume />
    },
    {
        path: '/contactinfo',
        element: <ContactInfo />
    },
    {
        path: '/projects',
        element: <Projects />
    },
    {
        path: '*',
        element: <Error404/>
    }
];

export default AppRoutes;
