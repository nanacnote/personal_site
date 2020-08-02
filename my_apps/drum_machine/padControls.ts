import { default as $ } from 'jquery'
// import { Howl } from 'howler'

export default function padControls(params: any) {
  // // config howler with soundJSON params item
  // const sound = new Howl({
  //   src: params.soundsJSON.urls,
  //   sprite: params.soundsJSON.sprite,
  //   onend: function () {
  //     console.log('Finished!')
  //   },
  // })

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
}
