import { useState, useEffect } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Form from './pages/Contact';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
    const [initialVisit, setInitialVisit] = useState(true);

    useEffect(() => {
        // Check localStorage to see if the user has visited before
        const hasVisited = localStorage.getItem('hasVisited');
        if (!hasVisited) {
            // If it's the first visit, show the About page
            setCurrentPage('About');
            localStorage.setItem('hasVisited', 'true');
        } else {
            // Otherwise, set to the Home page
            setInitialVisit(false);
        }
    }, []);

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Form') {
            return <Form />;
        }
        return <Resume />;
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        setInitialVisit(false); // Set initialVisit to false once the user navigates
    };

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            <main className='mx-3'>{renderPage()}</main>
        </div>
    );
}