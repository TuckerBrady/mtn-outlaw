import React from 'react';

import Link from 'next/link';

const categories = [{name: 'Shop', slug: 'shop'}, {name: 'Podcast', slug: 'podcast'}, {name: 'Articles', slug: 'articles'}, {name: 'Home', slug: '/'}];

const Header = () => {
  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='border-b w-full inline-block border-black-400 py-8'>
            <div className='md:fload-left block'>
                <Link href="/">
                    <span className='cursor-pointer font-bold font-[Black_Ops_One] text-4xl text-black'>
                        MTN Outlaws
                    </span>
                </Link>
            </div>
            <div className='hidden md:float-left md:contents'>
                {categories.map((category) => (
                    <Link key={category.slug} href={`/${category.slug}`}>
                        <span className='md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer'>
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  ); 
}

export default Header