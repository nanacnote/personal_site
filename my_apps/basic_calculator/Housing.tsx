import { Container, Row, Col } from 'react-bootstrap'

type TProps = {
  input: (event: React.MouseEvent) => void
  output: [string, string]
  parenthesis: boolean
}

export const Housing: React.FC<TProps> = (props): JSX.Element => (
  <>
    <div className="housing">
      <Container className="border rounded bg-light">
        <Row>
          <Container className="m-3 overflow-hidden">
            <Row>
              <Col xs={12} className="p-0">
                <div className="d-flex flex-column justify-content-center m-1 align-items-end border rounded bg-white overflow-hidden">
                  <code className="beta position-absolute">beta</code>
                  <div className="screen1 text-secondary px-2 py-1 w-100 text-right">
                    {props.output[0] || '.'}
                  </div>
                  <div className="screen2 text-black px-2 py-1 w-100 text-right">
                    <span>
                      <strong>{props.output[1] || '0'}</strong>
                      <strong className="text-secondary">
                        {props.parenthesis ? ')' : null}
                      </strong>
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Row>
        <Row>
          <Container className="mx-3 mb-3">
            <Row>
              <Col xs={3} className="p-0">
                <div
                  className="pad d-flex justify-content-center align-items-center rounded py-2 m-1 dark"
                  onClick={props.input}
                >
                  (
                </div>
              </Col>
              <Col xs={3} className="p-0">
                <div
                  className="pad d-flex justify-content-center align-items-center rounded py-2 m-1 dark"
                  onClick={props.input}
                >
                  )
                </div>
              </Col>
              <Col xs={3} className="p-0">
                <div
                  className="pad d-flex justify-content-center align-items-center rounded py-2 m-1 dark"
                  onClick={props.input}
                >
                  %
                </div>
              </Col>
              <Col xs={3} className="p-0">
                <div
                  className="pad d-flex justify-content-center align-items-center rounded py-2 m-1 dark"
                  onClick={props.input}
                >
                  AC
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={3} className="p-0">
                <div
                  className="pad d-flex justify-content-center align-items-center rounded py-2 m-1 light"
                  onClick={props.input}
                >
                  7
                </div>
              </Col>
              <Col xs={3} className="p-0">
                <div
                  className="pad d-flex justify-content-center align-items-center rounded py-2 m-1 light"
                  onClick={props.input}
                >
                  8
                </div>
              </Col>
              <Col xs={3} className="p-0">
                <div
                  className="pad d-flex justify-content-center align-items-center rounded py-2 m-1 light"
                  onClick={props.input}
                >
                  9
                </div>
              </Col>
              <Col xs={3} className="p-0">
                <div
                  className="pad d-flex justify-content-center align-items-center rounded py-2 m-1 dark"
                  onClick={props.input}
                >
                  /
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={3} className="p-0">
                <div
                  className="pad d-flex justify-content-center align-items-center rounded py-2 m-1 light"
                  onClick={props.input}
                >
                  4
                </div>
              </Col>
              <Col xs={3} className="p-0">
                <div
                  className="pad d-flex justify-content-center align-items-center rounded py-2 m-1 light"
                  onClick={props.input}
                >
                  5
                </div>
              </Col>
              <Col xs={3} className="p-0">
                <div
                  className="pad d-flex justify-content-center align-items-center rounded py-2 m-1 light"
                  onClick={props.input}
                >
                  6
                </div>
              </Col>
              <Col xs={3} className="p-0">
                <div
                  className="pad d-flex justify-content-center align-items-center rounded py-2 m-1 dark"
                  onClick={props.input}
                >
                  *
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={3} className="p-0">
                <div
                  className="pad d-flex justify-content-center align-items-center rounded py-2 m-1 light"
                  onClick={props.input}
                >
                  1
                </div>
              </Col>
              <Col xs={3} className="p-0">
                <div
                  className="pad d-flex justify-content-center align-items-center rounded py-2 m-1 light"
                  onClick={props.input}
                >
                  2
                </div>
              </Col>
              <Col xs={3} className="p-0">
                <div
                  className="pad d-flex justify-content-center align-items-center rounded py-2 m-1 light"
                  onClick={props.input}
                >
                  3
                </div>
              </Col>
              <Col xs={3} className="p-0">
                <div
                  className="pad d-flex justify-content-center align-items-center rounded py-2 m-1 dark"
                  onClick={props.input}
                >
                  -
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={3} className="p-0">
                <div
                  className="pad d-flex justify-content-center align-items-center rounded py-2 m-1 light"
                  onClick={props.input}
                >
                  0
                </div>
              </Col>
              <Col xs={3} className="p-0">
                <div
                  className="pad d-flex justify-content-center align-items-center rounded py-2 m-1 light"
                  onClick={props.input}
                >
                  .
                </div>
              </Col>
              <Col xs={3} className="p-0">
                <div
                  className="pad d-flex justify-content-center align-items-center rounded py-2 m-1 darkest text-light"
                  onClick={props.input}
                >
                  =
                </div>
              </Col>
              <Col xs={3} className="p-0">
                <div
                  className="pad d-flex justify-content-center align-items-center rounded py-2 m-1 dark"
                  onClick={props.input}
                >
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
        color: #293249;
        font-size: 1.25rem;
        width: 400px;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
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
      .screen1,
      .screen2 {
        font-family: 'Orbitron', sans-serif;
      }
      .screen1 {
        font-size: 0.75rem;
      }
      .pad:hover {
        filter: brightness(105%);
        cursor: pointer;
      }
      .beta {
        top: 0;
        left: 0;
        font-size: 0.75rem;
      }
    `}</style>
  </>
)
export default Housing
