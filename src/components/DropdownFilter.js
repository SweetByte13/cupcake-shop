import React, { useState } from 'react';

function DropdownFilter({ cupcakes, setCupcakes }) {
    const [filter, setFilter] = useState('');

    function handleChangeFilter(event) {
        const value = event.target.value;
        setFilter(value);

        let sortedCupcakes;
        switch (value) {
            case 'rating':
                sortedCupcakes = [...cupcakes].sort((a, b) => b.rating - a.rating);
                break;
            case 'topsellers':
                sortedCupcakes = [...cupcakes].sort((a, b) => a.id - b.id);
                break;
            case 'lowtohigh':
                sortedCupcakes = [...cupcakes].sort((a, b) => a.price - b.price);
                break;
            case 'hightolow':
                sortedCupcakes = [...cupcakes].sort((a, b) => b.price - a.price);
                break;
            default:
                sortedCupcakes = [...cupcakes];
        }
        setCupcakes(sortedCupcakes);
    }
    
    return (
        <div className='selector-containter'>
            <label className="filter" htmlFor="filter">Filter: </label>
            <select className= "select" name="filter" value={filter} onChange={handleChangeFilter}>
                <option value="">Select</option>
                <option value="topsellers">Recommended</option>
                <option value="rating">Best Seller</option>
                <option value="lowtohigh">Price: Lowest to Highest</option>
                <option value="hightolow">Price: Highest to Lowest</option>
            </select>
        </div>
    );
}
export default DropdownFilter;
