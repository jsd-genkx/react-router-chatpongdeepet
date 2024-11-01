// Dependencies
import { Routes, Route } from 'react-router-dom'
// Components
import App from './App'
import Home from './components/Home'
import Error404 from './components/Error404'
const AppRoutes = () => (
    <App>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    </App>
)
export default AppRoutes
