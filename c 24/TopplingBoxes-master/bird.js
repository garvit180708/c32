class bird  extends BaseDesign{
    constructor(x,y){
super (x,y,50,50)
this.image = loadImage("images/bird.png")
this.smokeImage = loadImage("images/smoke.png")
this.path = []

    }
  display() {
    
    //this.body.position.x = mouseX
    //this.body.position.y = mouseY
    super.display()
    if (this.body.velocity.x > 10 && this.body.position.x > 200) {
var position = [this.body.positin.x,this.body.position.y]
this.path.push (position)
    }
    for (var i = 0;i < this.path.length; i = i+1){
      image (this.smokeImage,this.path [i][0],[i][1])
    }
  }
}
