import { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaGithub } from 'react-icons/fa'
import { Housing } from './'

/**
 * typings declaration for props on BasicCalculator module
 */
type TProps = {}

/**
 * typings declaration for state on BasicCalculator module
 */
type TState = {}

export class BasicCalculator extends Component<TProps, TState> {
    constructor(props: TProps) {
        super(props)
        this.state = {}
    }

    componentDidMount() { }

    componentWillUnmount() { }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs={12} xl={4}>
                            <div className="d-flex justify-content-center align-items-center h-100">
                                <div>
                                    <div>
                                        <h5>
                                            <strong>basic mathematics calculator</strong>
                                        </h5>
                                    </div>

                                    <hr />

                                    <div>
                                        <div className="mb-3">
                                            <p>
                                                This project uses object oriented Javascript wrapped in
                                                a React class component to recreate the basic calculator
                                                application.
                      </p>
                                            <p>
                                                All maths logic, input and output statements are
                                                captured in a single class object. The design uses CSS
                                                grid solely.
                      </p>
                                        </div>
                                        <div className="mb-3">
                                            <a
                                                href="https://github.com/nanacnote/personal_site/tree/master/my_apps/basic_calculator"
                                                target="_blank"
                                                rel="noreferrer"
                                                data-no-decoration
                                            >
                                                <div className="py-1 my-2 position-relative clickable-item text-center text-primary bg-white border border-primary rounded">
                                                    Source Code <FaGithub />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="d-flex justify-content-center align-items-center h-100">
                                <Housing />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default BasicCalculator
