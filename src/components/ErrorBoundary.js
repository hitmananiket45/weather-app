import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error caught by Error Boundary: ", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="text-red-500 text-center mt-4">
                    <h2>Something went wrong.</h2>
                    <p>Please try refreshing the page.</p>
                </div>
            );
        }

        return this.props.children; 
    }
}

export default ErrorBoundary;
