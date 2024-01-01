const Contact = () => {
    return ( 
        <div>
            <h1 className="display-1 mx-3">Contact Us</h1>
            <form>
                <div className="mb-3 mx-3 w-25">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="email" className="form-control" id="name" name="name" required></input>
                </div>
                <div className="mb-3 mx-3 w-25">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" required></input>
                </div>
                <div className="mb-3 mx-3 w-25">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea type="text" className="form-control" id="message" name="message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary mx-3">Submit</button>
            </form>
        </div>
     );
}
 
export default Contact;