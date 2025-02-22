import '@/styles/globals.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
    useEffect(() => {
        document.documentElement.classList.add('dark'); // Apply dark mode by default
    }, []);

    return <Component {...pageProps} />;
}
