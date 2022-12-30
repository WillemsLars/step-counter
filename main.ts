input.onGesture(Gesture.Shake, function () {
    stap += 1
    led.stopAnimation()
})
let stap = 0
basic.forever(function () {
    basic.showNumber(stap)
})
