import { FaPlus } from "react-icons/fa";
import { server } from "../redux/store";
import { CartItem } from "../types/types";

type ProductsProps={
  productId:string,
  photo:string,
  name:string,
  price:number,
  stock:number,
  handler:(cartItem: CartItem) => string | undefined;
}

const ProductCard = ({photo,price,productId,name,stock,handler}:ProductsProps) => {
  return <div className="product-card">
    <img src={`${server}/${photo}`} alt={name} />
    <p>{name}</p>
    <span>₹{price}</span>
    <div onClick={()=>handler({
        photo,price,productId,name,stock,quantity:1
    })}>
      <button><FaPlus/></button>
    </div>
  </div>
}
export default ProductCard