import React, { useContext, useEffect, useState } from 'react';

// Context
import { ShopContext } from '../context/ShopContext';

// Components
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

// Images
import { assets } from '../assets/assets';

const Collection = () => {
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [showFilter, setShowFilter] = useState(false);
    const [sortType, setSortType] = useState('relavent');
    const [filterProducts, setFilterProducts] = useState([]);
    const { products, search, showSearch } = useContext(ShopContext);

    // Sort Category
    const sortProduct = () => {
        let filterProductCopy = filterProducts.slice();
        switch (sortType) {
            case 'low-high':
                setFilterProducts(filterProductCopy.sort((a, b) => (a.price) - (b.price)));
                break;
            case 'high-low':
                setFilterProducts(filterProductCopy.sort((a, b) => (b.price) - (a.price)));
                break;
            default:
                filterCategory();
                break;
        }
    };

    // Toggle Category
    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item => item !== e.target.value))
        }
        else {
            setCategory(prev => [...prev, e.target.value]);
        }
    };

    // Toggle SubCategory
    const toggleSubCategory = (e) => {
        if (subCategory.includes(e.target.value)) {
            setSubCategory(prev => prev.filter(item => item !== e.target.value))
        }
        else {
            setSubCategory(prev => [...prev, e.target.value]);
        }
    };

    // Filter Category
    const filterCategory = () => {
        let productsCopy = products.slice();
        if (search && showSearch) {
            productsCopy = productsCopy.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
        }
        if (category.length > 0) {
            productsCopy = productsCopy.filter((item) => category.includes(item.category));
        }
        if (subCategory.length > 0) {
            productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
        }
        setFilterProducts(productsCopy);
    };

    // Apply Filter
    useEffect(() => {
        filterCategory();
        sortProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category, subCategory, sortType, search, showSearch]);

    return (
        <React.Fragment>
            <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
                {/* Filter Options */}
                <div className='min-w-60'>
                    <p className='my-2 text-xl flex items-center cursor-pointer gap-2' onClick={() => setShowFilter(!showFilter)}>FILTERS
                        <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt='Dropdown' />
                    </p>
                    {/* Category Filter*/}
                    <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                        <p className='mb-3 text-sm font-medium'>GATEGORIES</p>
                        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                            <p className='flex gap-2'>
                                <input className='w-3' type='checkbox' value='Men' onChange={toggleCategory} /> Men
                            </p>
                            <p className='flex gap-2'>
                                <input className='w-3' type='checkbox' value='Woman' onChange={toggleCategory} /> Woman
                            </p>
                            <p className='flex gap-2'>
                                <input className='w-3' type='checkbox' value='Kids' onChange={toggleCategory} /> Kids
                            </p>
                        </div>
                    </div>
                    {/* SubCategory Filter*/}
                    <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
                        <p className='mb-3 text-sm font-medium'>TYPE</p>
                        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                            <p className='flex gap-2'>
                                <input className='w-3' type='checkbox' value='Topwear' onChange={toggleSubCategory} /> Topwear
                            </p>
                            <p className='flex gap-2'>
                                <input className='w-3' type='checkbox' value='Bottomwear' onChange={toggleSubCategory} /> Bottomwear
                            </p>
                            <p className='flex gap-2'>
                                <input className='w-3' type='checkbox' value='Winterwear' onChange={toggleSubCategory} /> Winterwear
                            </p>
                        </div>
                    </div>
                </div>
                {/* Right Side */}
                <div className='flex-1'>
                    <div className='flex justify-between text-base sm:text-2xl mb-4'>
                        <Title text1={'ALL'} text2={'COLLECTIONS'} />
                        {/* Product Sort */}
                        <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
                            <option value='relavent'>Sort by: Relavent</option>
                            <option value='low-high'>Sort by: Low to High</option>
                            <option value='high-low'>Sort by: High to Low</option>
                        </select>
                    </div>
                    {/* Map Products */}
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                        {filterProducts.map((item, index) => (
                            <ProductItem key={index} id={item.id} name={item.name} price={item.price} image={item.image} />
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Collection;