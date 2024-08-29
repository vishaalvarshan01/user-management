import {BrowserRouter, Routes, Route} from 'react-router-dom'

import HomePage from "./pages/HomePage.tsx";
import UserPage from "./pages/UserPage.tsx";

const App = () => {
    return (
        <div>
            <h1>User Management System</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/user" element={<UserPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;