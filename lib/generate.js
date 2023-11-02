const {Square, Circle, Triangle, Text} = require('./shapes')

function shape(user){
    var shape = "";
    
    if (user.shape == 'Triangle') {
        shape = new Triangle()
    } else if (user.shape == 'Square') {
        shape = new Square()
    } else {
        shape = new Circle()
    }

shape.setColor(user.shapeColor)
return shape.render();
}

function text(user){
    const text = new Text()
    text.setText(user.characters)
    text.setColor(user.txtColor)
    return text.render()
}


function complete(user) {
    var svg = `<svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
    ${shape(user)}${text(user)}</svg>`;
    return svg;
}


module.exports = complete;