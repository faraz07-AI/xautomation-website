
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html className="dark">  {/* ✅ Add the "dark" class here */}
            <Head />
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}
