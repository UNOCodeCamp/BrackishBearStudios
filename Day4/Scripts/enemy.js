function FloorHazard()
{

    this.x = null;
    this.y = null;
    this.width = 32;
    this.height = 32;
    this.image = new Image();
    
    this.image.src = "assets/mine/mine0.png";

    this.draw = function()
    {
        renderer.ctx.drawImage( this.image, this.x, this.y, this.width, this.height ); 
    };

    this.isTouching = function( gameObject )
    { 
        return ( Math.abs(this.x - gameObject.x) < 24 &&
                 this.y+this.height/2 <= (gameObject.y + gameObject.height) &&
                 gameObject.y <= (this.y + this.height) ); 
    }
};


function CeilingHazard()
{

    this.x = null;
    this.y = null;
    this.width = 32;
    this.height = 32;
    this.image = new Image();
    this.image.src = "assets/barb wire0.png";

    this.draw = function()
    {
        renderer.ctx.drawImage( this.image, this.x, this.y, this.width, this.height ); 
    };

    this.isTouching = function( gameObject )
    { 
        return ( Math.abs(this.x - gameObject.x) < 24 &&
                 this.y <= (gameObject.y + gameObject.height) &&
                 gameObject.y <= (this.y + this.height/2) ); 
    }

};

function LiveBomb()
{

    this.x = null;
    this.y = null;
    this.width = 32;
    this.height = 32;
    this.image = new Image();
    this.image.src = "assets/live-bomb0.png";

    this.draw = function()
    {
        renderer.ctx.drawImage( this.image, this.x, this.y, this.width, this.height ); 
    };

    this.isTouching = function( gameObject )
    { 
        return ( Math.abs(this.x - gameObject.x) < 24 &&
                 this.y <= (gameObject.y + gameObject.height) &&
                 gameObject.y <= (this.y + this.height) ); 
    }

};
