import { default as $ } from 'jquery'

export default function padControls(params: any) {
  // all pad elements selector
  let pad = $('.pad')

  // click event
  pad.on('mousedown', function (e) {
    params.setState({ padActive: true })
    const idx = pad.index(this) + 1
    params.setState({ padActive: { status: true, index: idx } })
  })
  pad.on('mouseup', function (e) {
    params.setState({ padActive: { status: false, index: 0 } })
  })

  // click event
  pad.on('touchstart', function (e) {
    params.setState({ padActive: true })
    const idx = pad.index(this) + 1
    params.setState({ padActive: { status: true, index: idx } })
  })
  pad.on('touchend', function (e) {
    params.setState({ padActive: { status: false, index: 0 } })
  })
}
