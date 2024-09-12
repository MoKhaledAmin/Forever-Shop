import React from 'react';

// Components
import Title from '../components/Title';

// Images
import { assets } from '../assets/assets';
import NewsletterBox from './../components/NewsletterBox';

const Contact = () => {
    return (
        <React.Fragment>
            <div>
                <div className='text-2xl text-center pt-10 border-t'>
                    <Title text1={'CONTACT'} text2={'US'} />
                </div>
                <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
                    <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt='Contact' />
                    <div className='flex flex-col justify-center items-start gap-6'>
                        <p className='font-semibold text-xl text-gray-600'>Our Store</p>
                        <p className='text-gray-500'>7 elasswy street<br />Alexandria, Egypt</p>
                        <p className='text-gray-500'>Tel: (+20)1016379543<br />Email: MoKhaledAmin123@gmail.com</p>
                        <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
                        <p className='text-gray-500'>Learn more about our teams and job openings.</p>
                        <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
                    </div>
                </div>
                <NewsletterBox />
            </div>
        </React.Fragment>
    )
}

export default Contact;