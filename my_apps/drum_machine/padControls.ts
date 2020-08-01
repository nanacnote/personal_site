import { default as $ } from 'jquery'
import { Howl } from 'howler';

type TParams = {
    superThis: any
    soundsJSON: {
        urls: string[],
        sprite: {}
    }
}

export default function padControls (params: TParams) {
    // config howler with soundJSON params item
    const sound = new Howl({
        src: params.soundsJSON.urls,
        sprite: params.soundsJSON.sprite,
        onend: function() {
            console.log('Finished!');
        }
    })

    // all pad elements selector
    let pad = $('.pad')

    // click event
    pad.on('mousedown', function (e) {
        params.superThis.setState({padActive: true})
        const idx = pad.index(this)
        const instrumentsArray = Object.keys(params.soundsJSON.sprite)
        sound.play(instrumentsArray[idx])
    })
    pad.bind('mouseup', function (e) {
        params.superThis.setState({padActive: false})
    })
}