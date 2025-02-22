
export default function App({ Component, pageProps }) {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center px-4">
            <header className="text-center py-6">
                <h1 className="text-4xl font-bold mb-4">Automate Your Business With Xautomation</h1>
                <p className="text-gray-300 mb-6">Sync Shopify, QuickBooks, Stripe — No coding required</p>
                <div className="flex gap-4">
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg">Get Started</button>
                    <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg">Learn More</button>
                </div>
            </header>
            <main className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                    <h3 className="text-xl font-semibold mb-2">🚀 Shopify + QuickBooks</h3>
                    <p>Automatically sync and update in real-time</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                    <h3 className="text-xl font-semibold mb-2">💳 Stripe + HubSpot</h3>
                    <p>Automatically update your CRM when customers pay</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                    <h3 className="text-xl font-semibold mb-2">📊 AI-Powered Insights</h3>
                    <p>Track revenue, expenses, and growth trends</p>
                </div>
            </main>
            <section className="mt-12 w-full max-w-6xl">
                <h2 className="text-3xl font-bold mb-6 text-center">Pricing Plans</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                        <h3 className="text-xl font-semibold mb-2">Starter ($20/month)</h3>
                        <p>Includes key integrations and AI insights</p>
                        <button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg w-full">Choose Plan</button>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                        <h3 className="text-xl font-semibold mb-2">Business ($50/month)</h3>
                        <p>Includes advanced integrations and AI insights</p>
                        <button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg w-full">Choose Plan</button>
                    </div>
                </div>
            </section>
            <footer className="text-center py-6 text-gray-500">
                © 2025 Xautomation. All rights reserved.
            </footer>
        </div>
    );
}