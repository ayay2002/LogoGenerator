// general shape class that all shapes leach from
class Shape {
    constructor(){
        this.color = ""
    }
    setColor(color){
        this.color = color
    }
}
// circle class to generate circle
class Circle extends Shape{
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
      }
}
// triangle class to generate triangle
class Triangle extends Shape {
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}
// square class to generate square
class Square extends Shape {
    render() {
      return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
  }
// class that generates text user imputs
  class Text{
    constructor(){
        this.text = "";
        this.color = "";
    }
    setText(text){
        this.text = text
    }
    setColor(color) {
        this.color = color;
      }
    render() {
        return `<text x="150" y="125" text-anchor="middle" font-size="50" fill="${this.color}">${this.text}</text>`;
      }
  }
  module.exports = {Circle, Triangle, Square, Text}