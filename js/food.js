class Food{
    constructor(){
    //right now the value of foodStock is 0
        this.foodStock = 0;
        this.lastFed = 0;
    //loaded the image of milk bottle
    this.image = loadImage("Images/Milk.png");

    }
    display(){
        var x = 80, y=100;

        imageMode(CENTER);
        image(this.image,720,220,70,70);

        if(this.foodStock != 0){
            for(var i=0; i<this.foodStock; i++){
                if(i%10 == 0){
                    x = 80;
                    y = y+50;
                }
                image(this.image,x,y,50,50);
                x = x + 30;
            }
        }
        
    }

    getFoodStock(){
        //refered the food to variable foodRef
        var foodRef = database.ref('myPet/food');
        //to read the value of foodRef 
        /* first value is to read
        second value is the function in which data parameter is passes
        Then we have written data's value to be read
        */
        foodRef.on("value", function(data){
            food = data.val();
        })
    }
 
    /* next is to update the food stock in which food parameter is passed
    we have refered again the same food which we refered above
    in which food is equal to food
    */
    updateFoodStock(food){
        database.ref('/').update({
            food : food
        })
    }

    /* next is to deduct food that if foodSock is greater than 0 so it will be deducted 
    by 1 */

    deductFood(){
        if(this.foodStock > 0){
            this.foodStock = this.foodStock-1;
        }
    }
}