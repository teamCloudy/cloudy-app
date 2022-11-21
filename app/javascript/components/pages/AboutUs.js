import React from "react";
import { NavLink } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle, Button, Row, Col } from "reactstrap"

const AboutUs = () => {

    return (

        <>
        <div class="p-5 text-center bg-image" style={{backgroundImage: `url("https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=800")`, backgroundSize: "cover", height: "1200px", backgroundRepeat: "no-repeat"}}>
            <h1
                style={{
                    textAlign: "center",
                    paddingTop: "50px",
                    color: "white"
                }}
            >
                Meet the Team
            </h1>

            <main className="cat-index-cards">

                <Row>
                    <Col sm="3">
                        <Card
                            style={{
                                width: '18rem'
                            }}
                        >
                            <img
                                alt="card image cap"
                                src="https://images.pexels.com/photos/1521304/pexels-photo-1521304.jpeg?auto=compress&cs=tinysrgb&w=800"
                                top="true"
                                width="100%"
                            />
                            <CardBody>
                                <CardTitle className="cat-name" tag="h5">
                                    Kyle Le
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Product Manager
                                </CardSubtitle>

                                <Button href="https://github.com/" target="_blank">
                                    My GitHub
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm="3">
                        <Card
                            style={{
                                width: '18rem'
                            }}
                        >
                            <img
                                alt="card image cap"
                                src="https://images.pexels.com/photos/1521304/pexels-photo-1521304.jpeg?auto=compress&cs=tinysrgb&w=800"
                                top
                                width="100%"
                            />
                            <CardBody>
                                <CardTitle className="cat-name" tag="h5">
                                    Athian Camberos
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Project Manager
                                </CardSubtitle>

                                <Button href="https://github.com/" target="_blank">
                                    My GitHub
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm="3">
                        <Card
                            style={{
                                width: '18rem'
                            }}
                        >
                            <img
                                alt="card image cap"
                                src="https://images.pexels.com/photos/1521304/pexels-photo-1521304.jpeg?auto=compress&cs=tinysrgb&w=800"
                                top
                                width="100%"
                            />
                            <CardBody>
                                <CardTitle className="cat-name" tag="h5">
                                    Joseph Han
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Tech Lead
                                </CardSubtitle>

                                <Button href="https://github.com/" target="_blank">
                                    My GitHub
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm="3">
                        <Card
                            style={{
                                width: '18rem'
                            }}
                        >
                            <img
                                alt="card image cap"
                                src="https://images.pexels.com/photos/1521304/pexels-photo-1521304.jpeg?auto=compress&cs=tinysrgb&w=800"
                                top
                                width="100%"
                            />
                            <CardBody>
                                <CardTitle className="cat-name" tag="h5">
                                    Olena Zheliabina
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Product Manager
                                </CardSubtitle>


                                <Button href="https://www.linkedin.com/in/olena-zheliabina" target="_blank">
                                    My LinkedIn
                                </Button>




                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </main>
            </div>
        </>
    )
}

export default AboutUs