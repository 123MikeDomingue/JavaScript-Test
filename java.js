// Question 1

totalBasketballScore = (fT, mR, tP) =>{
 if(typeof fT === 'number' && typeof mR === 'number' && typeof tP === 'number'){
  return (fT *1) + (mR *2) + (tP * 3);
 }else{
  return 'All entries must be numbers'
 }
}
console.log(totalBasketballScore(2,3,4))



// // Question 2


itemPrice = item =>{
 if (typeof item === 'string'){

 

 switch(item){

  case 'computer':
   return  '$500';
   break;
   
  case 'mouse':
    return  '$10';
    break;

  case 'tablet':
     return  "$250";
     break;

  case 'case':
      return '$25';
      break;


  case 'router':
       return  '$100';
       break;

       default:
       return 'This item is not in the store'

}

} else{
  return 'All entries must be a string'
}
}

console.log(itemPrice('case'))



// question 3

const restaurants = ['Applebees', 'Panera Bread', 'Popeyes', 'Chopt', 'Chick-fill-A', 'Cheesecake Factory', 'Five Guys'];

const randomRestaurantsList = []

randomRestaurant = (numOfRestaurants) =>{

 for (let i = 0; i < numOfRestaurants; i++){
  // random array index
  const Index = Math.floor(Math.random() * restaurants.length + 1);

  // This randomly selects restaurants that are added to randomRestaurantsList
  randomRestaurantsList.push(restaurants[Index - 1]);
 }

 return randomRestaurantsList;


 

}

console.log (randomRestaurant(3))



//  Question 4 


const isLeapYear = (year) => {
 // this is when the year is divisible by 400
if ( year % 400 === 0){
  return true;
  // This is when the year is dvisible by 100 
} else if (year % 100 === 0){
 return false;
}

// lastly this is when the year is divisible by 4

return year % 4 === 0



}

console.log(isLeapYear(2000))