const {Square, Circle, Triangle} = require('./shapes')

function create(user){
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




function complete(user) {
    var svg = `<svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
    ${create(user)}</svg>`;
    return svg;
}


module.exports = complete;