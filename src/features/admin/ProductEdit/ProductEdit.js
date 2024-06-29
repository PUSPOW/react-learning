
import { useParams } from 'react-router';
import { useGetProductByIdQuery } from '../../shares/productApi';
import ProductEditForm from './ProductEditFom';


const ProductEdit = () => {
  const { id } = useParams();

  const { data, isError, error, isLoading } = useGetProductByIdQuery(id);

  if (isLoading) {
    return <h1>Loading....</h1>
  }

  return (
    <div>
      <ProductEditForm  data={data?.data}/>
    </div>
  )
}
export default ProductEdit