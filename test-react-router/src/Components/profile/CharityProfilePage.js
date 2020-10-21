import React, { Component, useState } from 'react';
// import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfileTextDescription from './ProfileTextDescription';


function CharityProfilePage({data}) {

// const test =()=>{ console.log ({detailsCharity});}
// test();
// const detailsCharity= {
//         name: "Food Bank",
//      description: "Peabody draws on over 150 years of history and expertise. Our new, bigger organisation has been inspired by the response to the 'Cathy Come Home' era of poor quality housing and poverty in Post-War Britain as well as George Peabody's vision of providing safe and affordable housing for the working poor of Victorian London",
//     values: "We are here to help make people’s lives better. We do this by developing and delivering reliably good modern services, building and maintaining the best quality developments, working with local communities and building long-term partnerships, and  growing and using our position of influence to create positive change"
// };

    // const [detailsCharity, setdetailsCharity] = useState([{
    //     name: "Food Bank",
    //     description: "Peabody draws on over 150 years of history and expertise. Our new, bigger organisation has been inspired by the response to the 'Cathy Come Home' era of poor quality housing and poverty in Post-War Britain as well as George Peabody's vision of providing safe and affordable housing for the working poor of Victorian London",
    //     values: "We are here to help make people’s lives better. We do this by developing and delivering reliably good modern services, building and maintaining the best quality developments, working with local communities and building long-term partnerships, and  growing and using our position of influence to create positive change"
    //   }
    //   ]);

    
    return (
        
        <div>
                 <Row  className="justify-content-md-center">
                     <Col xs={{span: 12, offset: 6}} md={{span: 6, offset: 5}}>
                        <h1>Profile</h1>
                            {/* <p>This is a text { detailsCharity}</p> */}
                    </Col>
                </Row>
            <ProfileTextDescription detailsProfile={data}/>
        </div>

    );
}

export default CharityProfilePage; 