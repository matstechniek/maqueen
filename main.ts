let ir_waarde = 0
let vooruit = 10
let achteruit = 27
let links = 73
let rechts = 68
basic.forever(function () {
    basic.showNumber(ir_waarde)
})
basic.forever(function () {
    ir_waarde = IR.IR_read()
})
