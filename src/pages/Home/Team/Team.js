import React from 'react';
import './Team.css';


const Team = () => {
    return (
        <div className="container my-5">
            <div className="row">

                {/* Team section details */}
                <div className="col-md-3 col-sm-12">
                    <h4 className="font-monospace text-danger mt-3 ">O U R &nbsp;T E A M</h4>
                    <h3 className="mt-4">MEET OUR AMAZING TEAM</h3>
                    <p className="mt-4 ">The secret to our success lies in our people. We have a strong team of travel professionals with extensive industry experience and outstanding customer service skills. The secret to our success lies in our people. We have a strong team of travel professionals with extensive industry experience and outstanding customer service skills.</p>
                </div>


                {/* Team Thumbnails */}
                <div className="col-md-3 col-sm-12 mx-auto team-thumbnail mb-2">
                    <img src={"https://i.ibb.co/PjV2y9p/traveller-2.jpg"} className="img-fluid" alt="" />
                </div>
                <div className="col-md-3 col-sm-12 mx-auto team-thumbnail mb-2">
                    <img src={"https://i.ibb.co/LZpxGYY/traveller-3.jpg"} className="img-fluid" alt="" />
                </div>
                <div className="col-md-3 col-sm-12 mx-auto team-thumbnail mb-2">
                    <img src={"https://i.ibb.co/PjV2y9p/traveller-2.jpg"} className="img-fluid" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Team;