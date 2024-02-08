import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import ProductCard from "../components/Product-card";
import { Skeleton } from "../components/admin/Loader";
import { useLatestProductsQuery } from "../redux/api/productAPI";

const Home = () => {

  const {data,isLoading,isError}=useLatestProductsQuery("");

  if(isError) toast.error("Cannot Fetch the Products")

  const addToCartHandler =()=>{};
  return (
    <div className="home">
      <section></section>
      <h1>Latest Products <Link to='/search' className="findmore">More</Link></h1>
      <main>
        { isLoading ? <Skeleton width="80vw" /> :
          data?.products.map((i)=>(
            <ProductCard key={i._id} productId={i._id} name={i.name}
             price={i.price} stock={i.stock} photo={i.photo} handler={addToCartHandler} />
          ))
        }
      </main>
    </div>
  )
}

export default Home