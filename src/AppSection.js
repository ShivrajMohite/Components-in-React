import React from 'react'

const AppSection = () => (
    <div className="bg-success text-container">
        <p className="display-4 text-white p-4">Discover the amazing new app</p>
        <p className="text-white">
            This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
        </p>
        <div className="row p-4">
            <div className="col-6 text-right">
                <button className="btn btn-warning btn-lg"> Play Store</button>
            </div>
            <button className="btn btn-warning btn-lg">App Store</button>
            <div className="col-6 text-center"></div>
        </div>
    </div>
)

export default AppSection;