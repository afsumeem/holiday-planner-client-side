import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';
import './Packages.css';

const Packages = () => {

    const [packages, setPackages] = useState([]);

    //fetch data from api

    useEffect(() => {
        const url = 'http://localhost:5000/packages';
        fetch(url)
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <div>
            {/* popular packages title */}

            <h2 className="my-5">Popular Packages</h2>


            <div className=" container package-container" >

                {/* single package item */}
                {
                    packages.map(singlePackage =>
                        <Package
                            key={singlePackage._id}
                            singlePackage={singlePackage}

                        >
                        </Package>)
                }
            </div>

        </div>
    );
};

export default Packages;