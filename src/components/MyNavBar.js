import {Link} from 'react-router-dom'
const MyNavbar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg bg-primary sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img className="img-fluid w-25" src="petco.png" alt=""></img></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
           <div className="collapse navbar-collapse" id="Navbar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active"><Link className="nav-link" to="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
                  <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
                </svg>Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/about"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bank2" viewBox="0 0 16 16">
                  <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6zm-2.5 0v7h-1.25V6zm-2.5 0v7h-1.25V6zm-2.5 0v7h-1.25V6zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2M.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1z"/>
                </svg>About Us</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/products"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-square-fill" viewBox="0 0 16 16">
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                </svg>Products</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/contact"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
                  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
                </svg>Contact Us</Link></li>
                <li className="nav-item">
                    <div className="d-flex justify-content-end"></div>
                </li>
                 </ul>
                 <div className="d-flex mr-2">
                    <button type="button" className="btn nav-link" data-bs-toggle="modal" data-bs-target="#modalId"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
                        <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                    </svg>
                        Login
                    </button>
                </div>       
            </div>
        </div>
        </nav>
         <div className="modal fade" id="modalId" tabIndex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
         <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm" role="document">
             <div className="modal-content">
               <form>
                 <div className="modal-header">
                   <h5 className="modal-title" id="modalTitleId">Login </h5>
                       <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div className="modal-body">
                 <div className="mb-3">
                     <label htmlFor="Username">Username<span className="text-danger">*</span></label>
                     <input type="text" name="username" className="form-control" id="Username" placeholder="Enter Username"></input>
                 </div>
     
                 <div className="mb-3">
                     <label htmlFor="Password">Password<span className="text-danger">*</span></label>
                     <input type="password" name="password" className="form-control" id="Password" placeholder="Enter Password"></input>
                 </div>
                 <div className="mb-3">
                     <input className="form-check-input" type="checkbox" value="" id="remember" required></input>
                     <label className="form-check-label" htmlFor="remember">Remember Me</label>
                     <a href="#" className="float-end">Forgot Password</a>
                 </div>
               </div>
               <div className="modal-footer pt-4">                  
                 <button type="button" className="btn btn-success mx-auto w-100">Login</button>
               </div>
               <p className="text-center">Not yet have an account, <a href="#">Signup</a></p> 
               </form> 
             </div>
         </div>
     </div>
     </div>
      );
}
 
export default MyNavbar;