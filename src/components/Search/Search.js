import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { useGlobalContext } from '../../context/globalUserContext'

const Search = () => {
  const { productSearch } = useGlobalContext();

  return (
    <div class="row row-cols-1 row-cols-md-3 g-4">
      {productSearch.map((card) => (
        <ProductCard {...card} />
      ))}
    </div>
  );
};

export default Search;
