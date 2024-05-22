import { DashboardPage } from "./pages/dashboard/DashboardPage";
import {AuthPage} from "./pages/auth/AuthPage"

const routes = [
    {path: '/*', element: <DashboardPage/>},
    {path: '/auth', element: <AuthPage/>},
]

export default routes