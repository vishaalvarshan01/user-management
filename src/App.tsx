import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import {ErrorBoundary} from "react-error-boundary";

import HomePage from "./pages/HomePage.tsx";
import UsersPage from "./pages/UsersPage.tsx";
import UserPage from "./pages/UserPage.tsx"
import ProductsPage from "./pages/ProductsPage.tsx"
import CartPage from './pages/CartPage.tsx';
import Navbar from "./components/Navbar.tsx";

const queryClient = new QueryClient();

const App = () => {
    return (
        <>

            <ErrorBoundary fallback={<h1>Something went wrong!😕</h1>}>
                <QueryClientProvider client={queryClient}>
                    <BrowserRouter>
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<HomePage/>}/>
                            <Route path="/users" element={<UsersPage/>}/>
                            <Route path="/users/:id" element={<UserPage/>}/>
                            <Route path="/products" element={<ProductsPage/>}></Route>
                            {/*<Route path="/counter" element={<CounterPage />}/>*/}
                            <Route path="/cart" element={<CartPage/>}/>
                        </Routes>
                    </BrowserRouter>
                </QueryClientProvider>
            </ErrorBoundary>
        </>
    )
}

export default App;