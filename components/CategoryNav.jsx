import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const CategoryNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
      getCategories()
        .then((newCategories) => setCategories(newCategories))
    }, [])

  return (
    <div className='invisible md:visible flex justify-center items-center space-x-4'>
        {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className='transition duration-500 ease hover:bg-primary inline-block bg-secondary text-lg rounded-full text-white px-8 py-3 cursor-pointer'>
                {category.name}
                </span>
            </Link>
        ))}
    </div>
  )
}

export default CategoryNav