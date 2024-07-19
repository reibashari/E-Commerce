import { useLoaderData, json, redirect } from 'react-router-dom';
import { getAuthToken } from "../util/auth";
export async function loader({request, params}){
    //Action to delete the User
    const token = getAuthToken();
    const id = params.id; 
    console.log("id" +id);
    const response = await fetch(process.env.REACT_APP_BASEURL+'deleteProduct?id='+id, {
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });
 
    console.log("response: " +response);

    if(!response.ok){
     throw json({message: 'Could not fetch event.'}, {status: response.status, statusText: response.statusText});
    }else{

       alert("Product Deleted Successfully...");
        return redirect('/productlist');
    }

    
}
