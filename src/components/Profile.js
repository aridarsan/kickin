import { Jumbotron, Container, Button } from 'reactstrap';
import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <>
        <div className="Profile">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src="https://i.pinimg.com/originals/41/60/f3/4160f3c7891a7eed91ba3a5da8935fa5.jpg" alt="logo" />
                        <h4>Your Fullname Here</h4>
                        <h5>Description</h5>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus quis pharetra tortor neque eu ut. 
                        Augue facilisis pretium placerat ultricies volutpat ipsum sed. Natoque ullamcorper turpis elit integer at nisl. 
                        Id tellus amet varius malesuada. Vel dignissim interdum ut facilisi luctus porttitor ut. Nunc adipiscing tristique.
                        </p>
                        <br />
                        <br />
                        <br />
                        <Button>Edit Bio</Button>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="book-history">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h6>Book History</h6>
                    </div>
                </div>
            </div>
        </div> */}
        </>
    )
}

export default Profile;