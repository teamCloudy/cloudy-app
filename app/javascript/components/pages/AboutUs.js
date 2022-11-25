import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button, Row, Col } from "reactstrap";
import kyle3 from "../../../assets/images/kyle3.jpg";
import olena from "../../../assets/images/olena.jpg";
import joseph from "../../../assets/images/joseph.jpg";
import athian from "../../../assets/images/athian.jpg";

const AboutUs = () => {

    return (
        <>
            <div class="p-5 text-center bg-image meet-team-bg">
                <h1 className="meet-the-team">
                    Meet the Team
                </h1>

                <main className="about-index-cards">

                    <Row>
                        <Col sm="3">
                            <Card className="card-about">
                                <img 
                                    alt="card image cap"
                                    src={kyle3}
                                    top
                                    width="100%"
                                />
                                <CardBody>
                                    <CardTitle className="about-name" tag="h5">
                                        Kyle Le
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        Product Manager
                                    </CardSubtitle>

                                    <Button href="https://www.linkedin.com/" target="_blank">
                                        My LinkedIn
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col sm="3">
                            <Card className="card-about">
                                <img
                                    alt="card image cap"
                                    src={athian}
                                    top
                                    width="100%"
                                />
                                <CardBody>
                                    <CardTitle className="about-name" tag="h5">
                                        Athian Camberos
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        Project Manager
                                    </CardSubtitle>

                                    <Button href="https://www.linkedin.com/" target="_blank">
                                        My LinkedIn
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col sm="3">
                            <Card className="card-about">
                                <img
                                    alt="card image cap"
                                    src={joseph}
                                    top
                                    width="100%"
                                />
                                <CardBody>
                                    <CardTitle className="about-name" tag="h5">
                                        Joseph Han
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        Tech Lead
                                    </CardSubtitle>

                                    <Button href="https://www.linkedin.com/" target="_blank">
                                        My LinkedIn
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col sm="3">
                            <Card className="card-about">
                                <img
                                    alt="card image cap"
                                    src={olena}
                                    top
                                    width="100%"
                                />
                                <CardBody>
                                    <CardTitle className="about-name" tag="h5">
                                        Olena Zheliabina
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        Design Lead
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