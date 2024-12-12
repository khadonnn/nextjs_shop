import React from "react";

const FIlter = () => {
    return (
        <div className='mt-12 flex justify-between'>
            <div className='flex gap-6 flex-wrap'>
                <select
                    name='type'
                    id=''
                    className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200'
                >
                    <option>Type</option>
                    <option value='physical'>Physical</option>
                    <option value='digital'>Digital</option>
                </select>
                <input
                    type='text'
                    name='min'
                    placeholder='min price'
                    className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400'
                />
                <input
                    type='text'
                    name='max'
                    placeholder='max price'
                    className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400'
                />
                <select
                    name='size'
                    id=''
                    className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200'
                >
                    <option>Size</option>
                    <option value='physical'>Physical</option>
                    <option value='digital'>Digital</option>
                </select>
                <select
                    name='color'
                    id=''
                    className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200'
                >
                    <option>Color</option>
                    <option value='physical'>Physical</option>
                    <option value='digital'>Digital</option>
                </select>
                <select
                    name='category'
                    id=''
                    className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200'
                >
                    <option>Category</option>
                    <option value='physical'>Physical</option>
                    <option value='digital'>Digital</option>
                </select>
                <select
                    name='all'
                    id=''
                    className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200'
                >
                    <option>All Fillters</option>
                    <option value='physical'>Physical</option>
                    <option value='digital'>Digital</option>
                </select>
            </div>
            <div>
                <select
                    name='sort'
                    id=''
                    className='py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400'
                >
                    <option>Sort By</option>
                    <option value='asc price'>Price (low to high)</option>
                    <option value='desc price'>Price (high to low)</option>
                    <option value='asc lastUpdated'>Newest</option>
                    <option value='desc lastUpdated'>Oldest</option>
                </select>
            </div>
        </div>
    );
};

export default FIlter;
