import React from 'react';

// Components
import Hero from '../components/Hero';
import OurPolicy from '../components/OurPolicy';
import BestSeller from '../components/BestSeller';
import NewsletterBox from '../components/NewsletterBox';
import LatestCollection from '../components/LatestCollection';

const Home = () => {
    return (
        <React.Fragment>
            <div>
                <Hero />
                <LatestCollection />
                <BestSeller />
                <OurPolicy />
                <NewsletterBox />
            </div>
        </React.Fragment>
    )
}

export default Home;