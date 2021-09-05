let THRESHOLD = 150
let Step = 0
basic.forever(function () {
    if (input.acceleration(Dimension.X) > THRESHOLD || (input.acceleration(Dimension.Y) > THRESHOLD || input.acceleration(Dimension.Z) > THRESHOLD)) {
        while (input.acceleration(Dimension.X) > THRESHOLD || (input.acceleration(Dimension.Y) > THRESHOLD || input.acceleration(Dimension.Z) > THRESHOLD)) {
            basic.pause(100)
        }
        Step += 1
        basic.showNumber(Step)
    }
})
