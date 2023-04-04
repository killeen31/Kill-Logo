class Shape{

    constructor(){
        this.color=''
    }

    setColor(color){
        this.color = (color);
    }
}

class Circle extends Shape{
    render(){
        return `<circle cx="50%" cy="50%" r="40" height="100%" width="100%" fill="${this.color}" />`
    }
}

class Square extends Shape{
    render(){
        return `<rect x="50%" height="100" width="200" fill="${this.color}" />`
    }
}

class Triangle extends Shape{
    render(){
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}" />`
    }
};

module.exports = {Circle, Square, Triangle};








    // constructor(x, y, width, height, color){
    //     this.x = x;
    //     this.y = y;
    //     this.width = width;
    //     this.height = height;
    //     this.color = color;
    // }

    // draw(){
    //     ctx.fillStyle = this.color;
    //     ctx.fillRect(this.x, this.y, this.width, this.height);
    // }
