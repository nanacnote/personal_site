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
type TState = {
  outputTop: string
  outputBottom: string
  parenthesis: boolean
  answerState: boolean
}

export class BasicCalculator extends Component<TProps, TState> {
  constructor(props: TProps) {
    super(props)
    this.state = {
      outputTop: '',
      outputBottom: '',
      parenthesis: false,
      answerState: false,
    }
    this.input = this.input.bind(this)
  }

  // variable for instance of calculator
  private processor(params1: [string, string], params2: string) {
    switch (params2) {
      case '/':
        return (parseFloat(params1[0]) / parseFloat(params1[1])).toString()
      case '*':
        return (parseFloat(params1[0]) * parseFloat(params1[1])).toString()
      case '-':
        return (parseFloat(params1[0]) - parseFloat(params1[1])).toString()
      case '+':
        return (parseFloat(params1[0]) + parseFloat(params1[1])).toString()
      default:
        return 'Error'
    }
  }

  // recieves input from the calculator interface and passes it on to the processor
  private input(event: React.MouseEvent) {
    const currentInput = event.currentTarget.textContent
    const operands = ['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const operators = ['/', '*', '-', '+']

    // all clear handler
    if (currentInput === 'AC' || this.state.answerState) {
      this.setState({
        outputTop: '',
        outputBottom: this.state.answerState
          ? operands.includes(currentInput)
            ? currentInput
            : operators.includes(currentInput)
            ? this.state.outputBottom + ' ' + currentInput
            : ''
          : '',
        parenthesis: false,
        answerState: false,
      })
      return
    }
    // decimal edge case
    if (
      this.state.outputBottom.match(/[0-9.]*$/gi)[0].includes('.') &&
      currentInput === '.'
    )
      return
    // parenthesis edge case
    if (!this.state.parenthesis && currentInput === '(') {
      this.setState((prevState) => ({
        outputBottom: prevState.outputBottom + ' ' + currentInput,
        parenthesis: true,
      }))
    }
    if (this.state.parenthesis && currentInput === ')') {
      this.setState((prevState) => ({
        outputBottom: prevState.outputBottom + currentInput + ' ',
        parenthesis: false,
      }))
    }
    // percetage case
    if (currentInput === '%') {
      this.setState((prevState) => ({
        outputBottom: prevState.outputBottom + '/100' + ' ',
      }))
    }
    // all other input cases
    if (operands.includes(currentInput)) {
      this.setState((prevState) => ({
        outputBottom: prevState.outputBottom + currentInput,
      }))
    }
    if (
      operators.includes(currentInput) &&
      !operators.includes(
        this.state.outputBottom[this.state.outputBottom.length - 2]
      )
    ) {
      this.setState((prevState) => ({
        outputBottom: prevState.outputBottom + ' ' + currentInput + ' ',
      }))
    }
    if (currentInput === '=') {
      this.setState({
        outputTop: this.state.parenthesis
          ? this.state.outputBottom + ')'
          : this.state.outputBottom,
        outputBottom: this.state.parenthesis
          ? eval(this.state.outputBottom + ')')
          : eval(this.state.outputBottom),
        parenthesis: false,
        answerState: true,
      })
    }
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

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
              <div className="d-flex justify-content-center align-items-center h-100 overflow-auto">
                <Housing
                  input={this.input}
                  output={[this.state.outputTop, this.state.outputBottom]}
                  parenthesis={this.state.parenthesis}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default BasicCalculator
