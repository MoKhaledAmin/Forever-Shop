import React from 'react';

// Components
import Hero from '../components/Hero';
import BestSeller from '../components/BestSeller';
import LatestCollection from '../components/LatestCollection';

const Home = () => {
    return (
        <React.Fragment>
            <div>
                <Hero />
                <LatestCollection />
                <BestSeller />
            </div>
        </React.Fragment>
    )
}

export default Home;