import { default as $ } from 'jquery'

export default function volumeControls(param: any) {
    let knob = $('.knob')
    let angle = 50
    let minangle = 0
    let maxangle = 270

    const moveKnob = (direction) => {
      if (direction == 'up') {
        if (angle + 2 <= maxangle) {
          angle = angle + 2
          setAngle()
        }
      } else if (direction == 'down') {
        if (angle - 2 >= minangle) {
          angle = angle - 2
          setAngle()
        }
      }
    }

    const setAngle = () => {
      // rotate knob
      knob.css({
        '-moz-transform': 'rotate(' + angle + 'deg)',
        '-webkit-transform': 'rotate(' + angle + 'deg)',
        '-o-transform': 'rotate(' + angle + 'deg)',
        '-ms-transform': 'rotate(' + angle + 'deg)',
        transform: 'rotate(' + angle + 'deg)',
      })

      // highlight ticks
      var activeTicks = Math.round(angle / 10) + 1
      $('.tick').removeClass('activetick')
      $('.tick').slice(0, activeTicks).addClass('activetick')

      // update % value in text
    param.setState({ volumeLevel: Math.round((angle / 270) * 100) })
    }

    // mousewheel event - firefox
    knob.bind('DOMMouseScroll', function (e) {
      if ((e.originalEvent as any).detail > 0) {
        moveKnob('up')
      } else {
        moveKnob('down')
      }
      return false
    })

    // mousewheel event - ie, safari, opera
    knob.bind('mousewheel', function (e) {
      if ((e.originalEvent as any).wheelDelta < 0) {
        moveKnob('up')
      } else {
        moveKnob('down')
      }
      return false
    })
}