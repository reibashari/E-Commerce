import {Form, json} from "react-router-dom";
import { useActionData } from "react-router-dom";

function Login({method}){
  const data = useActionData();
    return  <>
    <section className="vh-100">
   <div className="container py-5 h-100">
     <div className="row d-flex align-items-center justify-content-center h-100">

       <div className="col-md-8 col-lg-7 col-xl-6">
         <img src="https://www.appsflyer.com/wp-content/themes/AF2020/assets/images/placeholders/signup/img-thanks.svg"
           className="img-fluid" alt="Phone image"/>
       </div>
       <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
       <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login Page</p>
       
         <Form method={method}>

         {data && data.errors && <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>}
          {data && data.message && <p class="text-danger">{data.message}</p>}
        
           <div className="form-outline mb-4">
             <input type="text" id="form1Example13" name="username" className="form-control form-control-lg" />
             <label className="form-label" for="form1Example13">UserName</label>
           </div>
 
           <div className="form-outline mb-4">
             <input type="password" name="password" id="form1Example23" className="form-control form-control-lg" />
             <label className="form-label" for="form1Example23">Password</label>
           </div>

           <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>
 
         </Form>
       </div>
     </div>
   </div>
 </section>
         </>
}

export default Login;