import App from "./App";
import { ContactInfo } from "./ContactInfo";
import { Home } from "./Home";
import { Resume } from "./Resume";
import { Projects } from "./Projects";


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
];

export default AppRoutes;
