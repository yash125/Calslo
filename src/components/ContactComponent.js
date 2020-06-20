import React from 'react';

function Contact(props) {
    return(
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <jumbotron>
                        A-9 Karamchari Nagar<br />
                        
                        Bareilly<br />
                        <i className="fa fa-phone"></i>: +918859815805<br />
                        <i className="fa fa-fax"></i>: +918859815805<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:kapooryash713@gmail.com">kapooryash713@gmail.com</a>
                        </jumbotron>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+918859815805"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href=""><i className="kapooryash713@gmail.com"></i> Email</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;