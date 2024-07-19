import { Link } from "react-router-dom";
import { useRouteLoaderData } from "react-router-dom";
import { Form } from "react-router-dom";
import { getUserRole } from "../util/auth";


function MainNavigation() {

  const token = useRouteLoaderData("root")
  const userRole = getUserRole();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="px-5 navbar-brand" href="#">Supermarket</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
 
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            {!token && (
              <li className="nav-item">
                <Link className="nav-link" to={"/login"}>Login</Link>
              </li>
            )}


            {!token && (
              <li className="nav-item">
                <Link className="nav-link" to={"/signup"}>Sign Up</Link>
              </li>
            )}


            {userRole === 'Admin' && (
              <>
              
                <li className="nav-item">
                  <Link className="nav-link" to={"/signup"}>Add User</Link>
                </li>

                {token && (
                  <>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/userlist"}>User List</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/categories"}>Add Categories</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/categorylist"}>Category List</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/products"}>Add Products</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/productlist"}>Product List</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/orderhistorylist"}>Order History</Link>
                  </li>
               
                  
                  </>
                  
                )}


              </>



            )}

            {userRole === 'User' && (
              <>
                {token && (
                  <>
                      <li className="nav-item">
                    <Link className="nav-link" to={"/categorylist"}>Category List</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to={"/productlist"}>Product List</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/orderhistorylist"}>Order History</Link>
                  </li>
               
                   
                  </>


                )}



              </>



            )}


            {token && (
              <>
                 <li className="nav-item">
                    <Link className="nav-link" to={"/cartList"}>My Cart</Link>
                  </li>
              <li className="nav-item">
                <Form action="/logout" method="post">
                  <button className="btn btn-info btn-l">Logout</button>
                </Form>
              </li>
              </>
            )}

          </ul>

        </div>
      </nav>

    </>
  )
}
export default MainNavigation;