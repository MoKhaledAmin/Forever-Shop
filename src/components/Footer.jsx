import React from 'react';

// Images
import { assets } from '../assets/assets';

const Footer = () => {
    return (
        <React.Fragment>
            <div>
                <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                    <div>
                        <img className='mb-5 w-32' src={assets.logo} alt='Logo' />
                        <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minima non, unde beatae veritatis totam aliquid neque animi facilis nemo. Maxime voluptatibus dolorum hic architecto soluta adipisci ipsum culpa aspernatur.</p>
                    </div>
                    <div>
                        <p className='text-xl font-medium mb-5'>COMPANY</p>
                        <ul className='flex flex-col gap-1 text-gray-600'>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Delivery</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div>
                        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                        <ul className='flex flex-col gap-1 text-gray-600'>
                            <li>+201016379543</li>
                            <li>MokhaledAmin123@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <hr />
                    <p className='py-5 text-sm text-center'>&copy; Copyright 2024 Forever.com - All Right Reserved.</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer;