import { default as $ } from 'jquery'

export default function padControls (params: any) {
    let pad = $('.pad')

    // click event
    pad.on('mousedown', function (e) {
        params.setState({padActive: true})
        console.log(e)
        handleLoadComplete(e)
    })
    pad.bind('mouseup', function (e) {
        params.setState({padActive: false})
    })

    createjs.Sound.on("fileload", handleLoadComplete);
    createjs.Sound.alternateExtensions = ["mp3"];
    createjs.Sound.registerSound({src:"./drum_machine/samples/Kick 2.wav", id:"kick"});
    function handleLoadComplete(event) {
        createjs.Sound.play("sound");
        console.log('sound')
    }
}