import React from 'react';
import img1 from '../image/mangojuice-1600271886742-f049cd451bba.jpg'
import img2 from '../image/robot1-1516192518150-0d8fee5425e3.jpg'
import img3 from '../image/robot2-1534723328310-e82dad3ee43f.jpg'
import img4 from '../image/robot3-1589254066213-a0c9dc853511.jpg'
import img5 from '../image/robot4-1580835239846-5bb9ce03c8c3.jpg'
import img6 from '../image/toy1-1581235720704-06d3acfcb36f.jpg'
import img7 from '../image/toy2-1531693251400-38df35776dc7.jpg'
import img8 from '../image/toy3-1583309600560-6d3d0c432939.jpg'
import img9 from '../image/strawberryjuice-1568909344668-6f14a07b56a0.jpg'
import img10 from '../image/mangojuice-1600271886742-f049cd451bba.jpg'
import './ProductsForYou.css'


import { useQuery } from 'react-query';
import SingleForYouProduct from '../SingleForYouProduct/SingleForYouProduct';

const ProductsForYou = () => {




    const { isLoading, error, data: allProducts } = useQuery('products', () =>
    fetch('https://backend.dokanbhai.dokanbhai.com:3002/api/products/all_products').then(res =>
        res.json()
    )
)

if (isLoading) {
    return <div class="flex items-center justify-center">
    <div
      class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status">
      <span
        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span
      >
    </div>
  </div>
}



const forYouProducts = allProducts.products.slice(0, 16);

    return (
   


   

    <div className='products-for-container'>
    <h2 className='section-title'>Products For You</h2>

    <div className="for-you-products">
        {
            allProducts.products.slice(0, 16).map(product => <SingleForYouProduct
                key={product._id}
                product={product}
            ></SingleForYouProduct>)
        }


    </div>
</div>
    );
};

export default ProductsForYou;