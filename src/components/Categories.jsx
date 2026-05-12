import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json').then((res) => res.json());
const Categories = () => {
    const categories = use(categoryPromise);
    return (
        <div>
            <h1 className='font-semibold'>All Category</h1>
            <div className='grid grid-cols-1 gap-2 pt-5'>
                {
                    categories.map(category => <NavLink key={category.id} className={`btn bg-base-100 border-0 hover:bg-base-200 justify-start font-semibold text-accent`} to={`/category/${category.id}`}>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;