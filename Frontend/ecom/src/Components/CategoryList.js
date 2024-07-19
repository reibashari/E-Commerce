import { Link,  } from "react-router-dom";
import { getUserRole } from "../util/auth";

 
function CategoryList({ category }) {

    const userRole = getUserRole();

    return (
        <>
        <div className="container">
           <h1>Categories List</h1>
           <table className="table">
               <thead>
                   <tr>
                       <th scope="col">Category Name</th>
                       <th scope="col">Image</th>
                       {userRole === 'Admin'? <th scope="col">Action</th> : ''}
                    
                   </tr>
               </thead>
               <tbody>
                   {   
                   
                   category.map((cat) => (
                        <tr key={cat.id}>
                        <td>{cat.name}</td>
                        <td><img class="d-block img-fluid" src={`data:image/png;base64,${cat.image}`} alt="" height={200} width={200}/></td>                 
                        {userRole === 'Admin'? 
                        <td>
                           <>
                           <Link to={`/editcategory/${cat.id}`} className="m-1 btn btn-primary btn-lg" role="button" aria-disabled="true"> Edit </Link>
                           <Link to={`/deletecategory/${cat.id}`} className="m-1 btn btn-danger btn-lg" role="button" aria-disabled="true"> Delete </Link>
                           </>
                       </td> : ''}
                        

                    </tr>
                   ))}
               </tbody>
           </table>
           </div>
       </>
    );
}

export default CategoryList;