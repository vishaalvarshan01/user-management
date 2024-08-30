import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

import './App.css'
import HomePage from "./pages/HomePage.tsx";
import UsersPage from "./pages/UsersPage.tsx";
import UserPage from "./pages/UserPage.tsx"

const queryClient = new QueryClient();

const App = () => {
    return (
        <div className="app">
            <h1>User Management System</h1>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/user" element={<UsersPage/>}/>
                        <Route path="/users/:id" element={<UserPage/>}/>
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </div>
    )
}

export default App;