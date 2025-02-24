import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-6">
            <h2 className="text-2xl font-semibold text-red-600">Something went wrong</h2>
            <p className="text-gray-700 mt-2">{error.message}</p>
            <div className="flex gap-4 mt-4">
                <button onClick={resetErrorBoundary} className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md">
                    Refresh Page
                </button>
                <a href="mailto:max@pcmaxrepair.ca" className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-md">
                    max@pcmaxrepair.ca
                </a>
                <a href="tel:+19055179610" className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-md">
                    Call PC Max Repair
                </a>
            </div>
        </div>
    );
};

export const ErrorBoundaryWrapper = ({ children }: { children: React.ReactNode }) => {
    return <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>;
};