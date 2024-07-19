import { Link,  } from "react-router-dom";
import { getUserRole } from "../util/auth";

function ProductList({ products }) {
    const userRole = getUserRole();

    return (
        <>
        <div className="container">
           <h1>Product List</h1>
           <table className="table">
               <thead>
                   <tr>
                       <th scope="col">Category Name</th>
                       <th scope="col">Product Name</th>
                       <th scope="col">Quantity</th>
                       <th scope="col">Price</th>
                       <th scope="col">Image</th>
                      <th scope="col">Action</th>
                    
                   </tr>
               </thead>
               <tbody>
                
                   {   
                   products.map((pro) => (
                        <tr key={pro.id}>
                        <td>{pro.catName}</td>
                        <td>{pro.productName}</td>
                        <td>{pro.quantity}</td>
                        <td>{pro.price}</td>
                        <td><img class="d-block img-fluid" src={`data:image/png;base64,${pro.image}`} alt="" height={200} width={200}/></td>                 
                        {userRole === 'Admin'? 
                        <td>
                           <>
                           <Link to={`/editproduct/${pro.id}`} className="m-1 btn btn-primary btn-lg" role="button" aria-disabled="true"> Edit </Link>
                           <Link to={`/deleteproduct/${pro.id}`} className="m-1 btn btn-danger btn-lg" role="button" aria-disabled="true"> Delete </Link>
                           <Link to={`/addToCart/${pro.id}`} className="m-1 btn btn-warning btn-lg" role="button" aria-disabled="true"  disabled={pro.quantity === 0}> Add To Cart </Link>
                           </>
                       </td> :<td> <Link to={`/addToCart/${pro.id}`} className="m-1 btn btn-warning btn-lg" role="button" aria-disabled="true"  disabled={pro.quantity === 0}> Add To Cart </Link>
                       {pro.quantity === 0 && <p className="text-danger">Out of stock</p>}
                       </td>}
                       

                    </tr>
                   ))}
               </tbody>
           </table>
           </div>
       </>
    ); 
}

export default ProductList;