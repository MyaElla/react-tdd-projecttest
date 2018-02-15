import React from 'react';

function ProductList(props) {
  return (
    <div>ProductList</div>
  )
}

ProductList.propTypes = {
  products: React.PropTypes.array.isRequired
};
export default ProductList;
