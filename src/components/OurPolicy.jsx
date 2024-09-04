import React from 'react';

// Images
import { assets } from '../assets/assets';

const OurPolicy = () => {
    return (
        <React.Fragment>
            <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
                <div>
                    <img src={assets.exchange_icon} alt='Exchange' className='w-12 m-auto mb-5' />
                    <p className='font-semibold'>Easy Exchange Policy</p>
                    <p className='text-gray-400'>We offer hassle free Exchange Policy</p>
                </div>
                <div>
                    <img src={assets.quality_icon} alt='Exchange' className='w-12 m-auto mb-5' />
                    <p className='font-semibold'>7 Days Return Policy</p>
                    <p className='text-gray-400'>We provide 7 days free return policy</p>
                </div>
                <div>
                    <img src={assets.support_img} alt='Exchange' className='w-12 m-auto mb-5' />
                    <p className='font-semibold'>Best Customer Support</p>
                    <p className='text-gray-400'>We provide 24/7 customer support</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default OurPolicy;