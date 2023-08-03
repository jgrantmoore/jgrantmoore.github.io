import App from "./App";
import { ContactInfo } from "./ContactInfo";
import { Home } from "./Home";
import { Resume } from "./Resume";


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
];

export default AppRoutes;
