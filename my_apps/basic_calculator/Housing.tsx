import { Container, Row, Col } from 'react-bootstrap'

export const Housing = (): JSX.Element => (
    <>
        <div className="housing">
            <Container className="border rounded bg-light">
                <Row>
                    <Container className="m-3">
                        <Row>
                        <Col xs={12} className="p-0">
                                <div className="d-flex flex-column justify-content-center align-items-end border rounded m-1 bg-white">
                                    <div className="h4 px-2 py-1">under</div>
                                    <div className="h2 px-2 py-1">construction</div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Row>
                <Row>
                    <Container className="mx-3 mb-3">
                        <Row>
                            <Col xs={3} className="p-0">
                                <div className="pad d-flex justify-content-center align-items-center rounded py-4 m-1 dark">
                                
                                        (
                                    
                                </div>
                            </Col>
                            <Col xs={3} className="p-0">
                                <div className="pad d-flex justify-content-center align-items-center rounded py-4 m-1 dark">
                                
                                        )
                                    
                                </div>
                            </Col>
                            <Col xs={3} className="p-0">
                                <div className="pad d-flex justify-content-center align-items-center rounded py-4 m-1 dark">
                                
                                        %
                                    
                                </div>
                            </Col>
                            <Col xs={3} className="p-0">
                                <div className="pad d-flex justify-content-center align-items-center rounded py-4 m-1 dark">
                                
                                        AC
                                    
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={3} className="p-0">
                                <div className="pad d-flex justify-content-center align-items-center rounded py-4 m-1 light">
                                
                                        7
                                    
                                </div>
                            </Col>
                            <Col xs={3} className="p-0">
                                <div className="pad d-flex justify-content-center align-items-center rounded py-4 m-1 light">
                                
                                        8
                                    
                                </div>
                            </Col>
                            <Col xs={3} className="p-0">
                                <div className="pad d-flex justify-content-center align-items-center rounded py-4 m-1 light">
                                
                                        9
                                    
                                </div>
                            </Col>
                            <Col xs={3} className="p-0">
                                <div className="pad d-flex justify-content-center align-items-center rounded py-4 m-1 dark">
                                
                                        /
                                    
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={3} className="p-0">
                                <div className="pad d-flex justify-content-center align-items-center rounded py-4 m-1 light">
                                
                                        4
                                    
                                </div>
                            </Col>
                            <Col xs={3} className="p-0">
                                <div className="pad d-flex justify-content-center align-items-center rounded py-4 m-1 light">
                                
                                        5
                                    
                                </div>
                            </Col>
                            <Col xs={3} className="p-0">
                                <div className="pad d-flex justify-content-center align-items-center rounded py-4 m-1 light">
                                
                                        6
                                    
                                </div>
                            </Col>
                            <Col xs={3} className="p-0">
                                <div className="pad d-flex justify-content-center align-items-center rounded py-4 m-1 dark">
                                
                                        *
                                    
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={3} className="p-0">
                                <div className="pad d-flex justify-content-center align-items-center rounded py-4 m-1 light">
                                
                                        1
                                    
                                </div>
                            </Col>
                            <Col xs={3} className="p-0">
                                <div className="pad d-flex justify-content-center align-items-center rounded py-4 m-1 light">
                                
                                        2
                                    
                                </div>
                            </Col>
                            <Col xs={3} className="p-0">
                                <div className="pad d-flex justify-content-center align-items-center rounded py-4 m-1 light">
                                
                                        3
                                    
                                </div>
                            </Col>
                            <Col xs={3} className="p-0">
                                <div className="pad d-flex justify-content-center align-items-center rounded py-4 m-1 dark">
                                
                                        -
                                    
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={3} className="p-0">
                                <div className="pad d-flex justify-content-center align-items-center rounded py-4 m-1 light">
                                
                                        0
                                    
                                </div>
                            </Col>
                            <Col xs={3} className="p-0">
                                <div className="pad d-flex justify-content-center align-items-center rounded py-4 m-1 light">
                                
                                        .
                                    
                                </div>
                            </Col>
                            <Col xs={3} className="p-0">
                                <div className="pad d-flex justify-content-center align-items-center rounded py-4 m-1 darkest">
                                
                                        =
                                    
                                </div>
                            </Col>
                            <Col xs={3} className="p-0">
                                <div className="pad d-flex justify-content-center align-items-center rounded py-4 m-1 dark">
                                
                                        +
                                    
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </div>
        <style jsx>{`
            .housing {
                min-width: 500px;
                color: #293249;
                font-size: 1.25rem;
            }
            .light {
                background: #f7efed;
            }
            .dark {
                background: #ded2cf;
            }
            .darker {
                background: #aca1a1;
            }
            .darkest {
                background: #69656f;
            }
            .pad:hover {
                filter: brightness(105%);
            }
        `}</style>
    </>
)
export default Housing
