input.onButtonPressed(Button.A, function () {
    angulo = 360
})
let angulo = 0
angulo = 360
basic.forever(function () {
    if (angulo > 0) {
        basic.pause(1000)
        angulo += -6
    } else {
        angulo = 360
    }
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S7, angulo)
})
