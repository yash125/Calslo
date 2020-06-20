import React from 'react';
import '../App.css';

function Home(props) {
    return(
      <div className="container">
          <div className=" row-content">
        <h3>Welcome to CalSlo!</h3>
        <h4>Schedule your meeting through a Calendar on CalSlo</h4>
        <div class="container-fluid imgBackground">
       <div class="row">
            <div class="col-md-2"></div>
       </div>
  </div>
        </div>
        <div >
            <div>
            <div >
            <h1 className="text-center">Product Highlights</h1>
            
            <h6 className="text-left fa fa-clock-o fa-lg">Configure time slots</h6>
            <p className="text-left col-12 col-md-5">Configure time slot length. You can add both regular and custom time slot length for any calendar date.</p>
            
            <h6 className="text-left fa fa-cog fa-lg"> Make custom changes</h6>
            <p className="text-left col-12 col-md-5">Get a Developer Licence and modify Time Slots Calendar as per your needs. We can do it for you, too!</p>
            <h6 className="text-left fa fa-meetup fa-lg">Group appointments</h6>
            <p className="text-left col-12 col-md-5">Time Slots Booking Calendar is a great booking system for reserving group appointments because of its multi booking functionality. You can allow multiple bookings per slot by inserting a number greater than 1 in the bookings per slot field.</p>
            
            </div>
            </div>
            
            
            <div className="text-center  " >
            
            
            

                </div>

        </div>
        <div className="container">
            <div className="col-12 md-5 sm-5 row row-content">
                <p>Time Slots Booking Calendar is an appointment calendar and online booking system that allows clients to book appointments with you. The time slot calendar is suitable for both individual and group appointments. That makes it the perfect reservation system for booking appointments with hairdressers, therapists, private trainers, as well as arranging a spot in group classes. Setup and script integration are totally painless!</p>

            </div>

        </div>
      </div>
      
    );
}

export default Home;