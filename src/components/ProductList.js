import React from 'react';

function ProductList(props) {
  return (
    <ul>
       {
         props.products.map(product => (
           <li key={product.id}>
             {product.name}
           </li>
         ))
       }
     </ul>
   )
 }

ProductList.propTypes = {
  products: React.PropTypes.array.isRequired
};
export default ProductList;
