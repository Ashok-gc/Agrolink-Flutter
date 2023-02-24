import { useEffect,useState } from "react";
import { ListGroup,ListGroupItem } from "reactstrap";
import productServices from "../../services/productServices";

function Product(){
    const [product, setProduct] = useState([]);
 

    useEffect(() => 
    productServices.getAll().then((res) => {
        setProduct(res.data)
        console.log(res.data);
    }), []

    
    )
    return(
        <>
        <div>
            <h1>Product</h1>
            <ListGroup>
                <ListGroupItem key={product._id}>{product.name}</ListGroupItem>
            </ListGroup>
        </div>
        </>
    )

    }

export default Product;