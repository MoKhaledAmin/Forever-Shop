import { createRoot } from 'react-dom/client';

// React Router
import { BrowserRouter } from 'react-router-dom';

// Context
import ShopContextProvider from './context/ShopContext.jsx';

// Applicaion
import App from './App.jsx';

// Css
import './index.css';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ShopContextProvider>
            <App />
        </ShopContextProvider>
    </BrowserRouter>,
)