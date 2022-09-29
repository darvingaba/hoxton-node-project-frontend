export function Contact (){
    return(
        <div className="contact">
            
            <form className="contact-form">
            <h1 className="contact-title">Contact Us</h1>
                <label>
                    
                    <input type="text" name="name" placeholder="Full Name" />
                </label>
                <label>
                    
                    <input type="email" name="email" placeholder="Email" />
                </label>
                <label>
                
                    <textarea rows={6} cols={23}  name="message" placeholder="Message" />
                </label>
            </form>
        </div>
    )
}