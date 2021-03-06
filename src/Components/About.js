function About(params) {
    return(
        <>


        <div className="header-container">

            <img src="logoR.jpg" alt="" className="logo"/>

            <div className="nav-bar">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="About">About</a></li>
                    <li><a href="Skills">Skills</a></li>
                    <li><a href="Projects">Projects</a></li>
                    <li><a href="Login">Login</a></li>
                </ul>
            </div>
        </div>
        <div className="about">
            <h1 className="h1">About me</h1>
            <p className="p1">
            Innovative tech mind with 1 years of experience working as a computer programmer. 
               Capable of working with a variety of technology and software solutions,
                Valuable team member who has experience diagnosing problems and developing solutions.
                Talented leader with unique ideas and a history of successful contributions in the field.

            </p>

        </div>

        <div className="footer">
                 <div className="card2">
                     <h3>Services</h3>
                     <div className="ser">
                        <ul className="li"><a href="#" className="linkser">Web Design</a></ul>
                        <ul className="li"><a href="#" className="linkser">Design with Figma</a></ul>
                        <ul className="li"><a href="#" className="linkser">Database</a></ul>
          
                    <h>Social Media</h>
                   <div className="social">
                   <a href="https://web.facebook.com/profile.php?id=100008682602660" className="fa fa-facebook"></a>
                   <a href="#" className="fa fa-twitter"></a>
                   <a href="https://www.instagram.com/payzzo/" className="fa fa-instagram"></a>
                   <a href="#" className="fa fa-pinterest"></a>
                   <a href="https://github.com/Patrick-55" className="fa fa-github"></a>
                   </div>
                   </div> 
                   </div>
                

               <div className="card2">
               <h3>Contacts</h3>
               <p>Kigali City</p>
               <p>Phone : +250728172130</p>

               <p>Email me: </p> 
               <input type="text"  id="names" className="fullname" placeholder="Your full names"/>
               <input type="Email" id="mail" className="email" placeholder="Enter email..."/>
               <textarea id="comments" className="comment">Type your comment here.</textarea>
               <button id="button" className="sendbtn">Send</button>

              </div>
              </div>



        </>
    )
}
export default About