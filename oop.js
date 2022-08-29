// 1) Using function constructor
function person(fullName, money){
 // Declares properties
this.fullName=fullName;
this.money=money;

this.Sleep= function(hours){
if(hours == 7){
   return this.sleepMood="Happy ;)";
}
else if(hours < 7){
    return this.sleepMood="Tired !!";
}
else if( hours > 7){
    return this.sleepMood="Lazy :'(( ";
}

};

this.eat= function(meals){
   if(meals == 3){
  return this.healthRate=100;
   } 
   else if(meals == 2){
  return this.healthRate=75;
   }
   else if(meals == 1){
   return this.healthRate=50;
   }
   else{
   return this.healthRate="The  health rate is undefined .. you are not a healthy person :(( ";
   }
};

this.buy= function(items){
 return this.money-= items*10;
}

}

const human1= new person("Linda Fekry" , 120);
console.log("Human 1 data...");
console.log("Full Name: " +human1.fullName);
console.log(human1.Sleep(9));
console.log(human1.eat(3));
console.log(human1.buy(2));

////////////////////////////////////////////////////////////########////////////////////////////////////////////////////////  

// 2) Using class constructor
class person2{

 constructor(fullName , money){
this.fullName=fullName;
this.money=money;
    }

    Sleep(hours){
        if(hours == 7){
            return this.sleepMood="Happy ;)";
         }
         else if(hours < 7){
             return this.sleepMood="Tired !!";
         }
         else if( hours > 7){
             return this.sleepMood="Lazy :'(( ";
         }
    }

    eat(meals){
        if(meals == 3){
       return this.healthRate=100;
        } 
        else if(meals == 2){
       return this.healthRate=75;
        }
        else if(meals == 1){
        return this.healthRate=50;
        }
        else{
        return this.healthRate="The  health rate is undefined .. you are not a healthy person :(( ";
        }
    }

    buy(items){
        return this.money-= items*10;
       }
       
}
const human2= new person2("Amira Gaber" , 200);
console.log("Human 2 data...");
console.log("Full Name: " +human2.fullName);
console.log(human2.Sleep(6));
console.log(human2.eat(1));
console.log(human2.buy(5));

////////////////////////////////////////////////////////////########//////////////////////////////////////////////////////// 

// 3) Using Objects Linking to Other Objects (OLOO)
const Person3={
  init(fullName , money , sleepMood , healthRate ){
this.fullName=fullName;
this.money=money;
this.sleepMood=sleepMood;
this.healthRate=healthRate;
this.Sleep= function(hours){
    if(hours == 7){
        return this.sleepMood="Happy ;)";
     }
     else if(hours < 7){
         return this.sleepMood="Tired !!";
     }
     else if( hours > 7){
         return this.sleepMood="Lazy :'(( ";
     }} 
this.eat= function(meals){
    if(meals == 3){
        return this.healthRate=100;
         } 
         else if(meals == 2){
        return this.healthRate=75;
         }
         else if(meals == 1){
         return this.healthRate=50;
         }
         else{
         return this.healthRate="The  health rate is undefined .. you are not a healthy person :(( ";
         }}
this.buy= function(items){
    return this.money-= items*10;
}
return this
  }}
  const human3 = Object.create(Person3).init("Mahy Mohsen" , 400);
  console.log("Test OLOO");
console.log(human3);
console.log(human3.Sleep(7));
console.log(human3.eat(3));
console.log(human3.buy(1));

//////////////////////////////////////////////////////////////////try/////////////////////////////////////////////////////////
 
// 4) Using Factory function
function person4(fullName , money){
    return {
        fullName,
        money,
        Sleep(hours){
            if(hours == 7){
                return this.sleepMood="Happy ;)";
             }
             else if(hours < 7){
                 return this.sleepMood="Tired !!";
             }
             else if( hours > 7){
                 return this.sleepMood="Lazy :'(( ";
             }
        },
    
        eat(meals){
            if(meals == 3){
           return this.healthRate=100;
            } 
            else if(meals == 2){
           return this.healthRate=75;
            }
            else if(meals == 1){
            return this.healthRate=50;
            }
            else{
            return this.healthRate="The  health rate is undefined .. you are not a healthy person :(( ";
            }
        },
    
        buy(items){
            return this.money-= items*10;
           }
    }
    }
    const human4= new person4("Mahitab Mohsen" , 500);
    console.log("Human 4 data...");
    console.log("Full Name: " +human4.fullName);
    console.log(human4.Sleep(7));
    console.log(human4.eat(2));
    console.log(human4.buy(10));