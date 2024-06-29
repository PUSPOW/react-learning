import React from 'react'
import { useGetProductsQuery } from '../features/shares/productApi'
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import Cara from '../features/home/Cara';
import { useNavigate } from 'react-router';
import { imageUrl } from '../constant/constant';

const Home = () => {
  const {data, isLoading, error } = useGetProductsQuery();
const nav = useNavigate();

  if(isLoading) {  
    return <h1>loading...</h1>;
  }

  return (

    <div className='px-5 '>
      <Cara />
    <div className='p-5 mt-[4%] grid grid-cols-3 gap-5' >
      

      {data?.data.map(({_id,product_name, product_detail, product_image}) => {

        return  <Card className="mt-6" key={_id}>
        <CardHeader color="blue-gray" className="relative h-56">
          <img className='w-full'
            src={`${imageUrl}${product_image}`}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
           {product_name}
          </Typography>
          <Typography>
            {product_detail}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button  onClick={() => nav(`/product/${_id}`)}>Read More</Button>
        </CardFooter>
      </Card>
      })}
    </div>
    </div>
  )
}

export default Home