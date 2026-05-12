import React, { use } from 'react';

const categoryPromise = fetch('/categories.json').then((res) => res.json());
const Categories = () => {
    const categories = use(categoryPromise);
    return (
        <div>
            <h1 className='font-semibold'>All Category({categories.length})</h1>
        </div>
    );
};

export default Categories;