import App from "./App";
import { Home } from "./Home";


const AppRoutes = [
    {
    index: true,
    element: <Home />
    },
    {
        path: '/testpage',
        element: <App />
    },
];

export default AppRoutes;
