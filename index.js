// Code your solution in this file!
const headQ = 42
function distanceFromHqInBlocks(pickup){
    if(pickup > 42){
        return (pickup - headQ);
    } else {
        return (headQ - pickup);
    }
}
function distanceFromHqInFeet(pickup){
       return distanceFromHqInBlocks(pickup)*264;
}
function distanceTravelledInFeet(a,b){
    if(a<b){
        return (b-a)*264;
    }else{
        return (a-b)*264;
    }
}
function calculatesFarePrice(a,b){
    if (distanceTravelledInFeet(a,b) <= 400){
    return 0;
}
else if (distanceTravelledInFeet(a,b) <= 2000){
    return (distanceTravelledInFeet(a,b) - 400) * .02;
}
else if (distanceTravelledInFeet(a,b) < 2500){
    return 25;
}
else if (distanceTravelledInFeet(a,b) > 2500){
    return 'cannot travel that far';
}
}