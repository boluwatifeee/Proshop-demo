import React from 'react'
import Loader from './Loader';
import Message from './Message';
import { Carousel, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useGetTopProductsQuery } from '../slices/productsApiSlice';

const ProductCarousel = () => {
    const { data: products, isLoading, error} = useGetTopProductsQuery();

    return isLoading ? <Loader /> : error ? (
        <Message variant='danger'>{error}</Message>
    ) : (
        <Carousel fade touch variant='dark' pause='hover' className='bg-white'>
            {products.map((product) => (
                <Carousel.Item key={product._id}>
                    <Link to={`/product/${product._id}`}>
                        <div className='carousel'>
                        <Image fluid src={product.image} alt={product.name}/>
                        </div>
                        <Carousel.Caption className='carousel-caption'>
                            <h2>
                                {product.name} (${product.price})
                            </h2>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default ProductCarousel