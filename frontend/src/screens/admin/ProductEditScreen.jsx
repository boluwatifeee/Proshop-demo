import * as React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useUpdateProductMutation, useGetProductDetailsQuery, useUploadProductImageMutation } from '../../slices/productsApiSlice';
import { Link, useNavigate, useParams } from 'react-router-dom';
import FormContainer from '../../components/FormContainer';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { toast } from 'react-toastify';

const ProductEditScreen = () => {
    const {id: productId } = useParams();

    const [name, setName] = React.useState('')
    const [price, setPrice] = React.useState(0)
    const [image, setImage] = React.useState('')
    const [brand, setBrand] = React.useState()
    const [category, setCategory] = React.useState('')
    const [countInStock, setCountInStock] = React.useState(0)
    const [description, setDescription] = React.useState('')

    const {data: product, isLoading, error} = useGetProductDetailsQuery(productId);

    const [updateProduct, { isLoading: loadingUpdate }] = useUpdateProductMutation();

    const [uploadProductImage, {isLoading: loadingUpload}] = useUploadProductImageMutation();

    const navigate = useNavigate();

    React.useEffect(() => {
        if (product) {
            setName(product.name)
            setPrice(product.price)
            setImage(product.image)            
            setBrand(product.brand)
            setCategory(product.category)            
            setCountInStock(product.countInStock)
            setDescription(product.description)
        }
    }, [product])


    const submitHandler = async (e) => {
        e.preventDefault();
        const updatedProduct = {
            productId,
            name,
            price,
            image,
            brand,
            category,
            countInStock,
            description
        };

        const result = await updateProduct(updatedProduct);
        if (result.error) {
            toast.error(result);
        } else {
            toast.success('Product updated');
            navigate('/admin/productlist');
        }
    }

    const uploadFileHandler = async (e) => {
        const formData = new FormData();
        formData.append('image', e.target.files[0]);
        try {
            const res = await uploadProductImage(formData.unwrap());
            toast.success(res.message);
            setImage(res.image)
        } catch (err) {
            toast.error(err?.data?.message || err?.error)
        }
    }

    return (
        <>
            <Link to='admin/productlist' className='btn btn-light my-3'>
                Go Back
            </Link>
            <FormContainer>
                <h1>Edit Product</h1>
                { loadingUpdate && <Loader/>}
                {isLoading ? (
                    <Loader/>
                ) : error ? (
                    <Message variant="danger">{error}</Message>
                ) : (
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId='name' className='my-2'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='price' className='my-2'>
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type='number'
                                placeholder='Enter price'
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='image' className='my-2'>
                            <Form.Label>Image</Form.Label>
                            <Form.Control 
                                type='text' 
                                placeholder='Enter image url'
                                value={image}
                                onChange={(e) => setImage}
                            ></Form.Control>

                            <Form.Control 
                                type='file'
                                onChange={uploadFileHandler}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='brand' className='my-2'>
                            <Form.Label>Brand</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter brand'
                                value={brand}
                                onChange={(e) => setBrand(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='countInStock' className='my-2'>
                            <Form.Label>Count In Stock</Form.Label>
                            <Form.Control
                                type='number'
                                placeholder='Enter count in stock'
                                value={countInStock}
                                onChange={(e) => setCountInStock(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='category' className='my-2'>
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter category'
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId='description' className='my-2'>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter description'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Button type='submit' variant='primary' className='my-2'>
                            Update
                        </Button>
                    </Form>
                )}
            </FormContainer>
        </>
    )
}

export default ProductEditScreen