import App from "./App";
import { ContactInfo } from "./Pages/ContactInfo";
import { Home } from "./Pages/Home";
import { Resume } from "./Pages/Resume";
import { Projects } from "./Pages/Projects";


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
