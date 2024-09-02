import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import {ErrorBoundary} from "react-error-boundary";

import './App.css'
import HomePage from "./pages/HomePage.tsx";
import UsersPage from "./pages/UsersPage.tsx";
import UserPage from "./pages/UserPage.tsx"
import ProductsPage from "./pages/ProductsPage.tsx"
import CounterPage from "./pages/CounterPage.tsx";

const queryClient = new QueryClient();

const App = () => {
    return (
        <ErrorBoundary fallback={<h1>Something went wrong!😕</h1>}>
            <div className="app">


                <QueryClientProvider client={queryClient}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<HomePage/>}/>
                            <Route path="/user" element={<UsersPage/>}/>
                            <Route path="/users/:id" element={<UserPage/>}/>
                            <Route path="/products" element={<ProductsPage/>}></Route>
                            <Route path="/counter" element={<CounterPage />}/>
                        </Routes>
                    </BrowserRouter>
                </QueryClientProvider>
            </div>
        </ErrorBoundary>
    )
}

export default App;