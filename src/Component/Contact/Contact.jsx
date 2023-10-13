import './Contact.css'
function Contact() {
  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="form1"action="https://formspree.io/f/myyawpyw" method="POST" >
        <h3>Contact Here</h3>

        <label >Username</label>
        <input type="text" placeholder="Email or Phone" id="username" name="name" />

        <label >Messege</label>
        <textarea type="text" placeholder="type your messege" name="msg"/>

        <button>Send Messege</button>
        <div className="social">
         
        
        </div>
      </form>
    </>
  );
}

export default Contact;
