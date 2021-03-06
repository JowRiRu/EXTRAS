const WIDTH = 400;
const HEIGHT = 400;

let target = {
    x: getRandomNumber(WIDTH), 
    y: getRandomNumber(HEIGHT),
};

let $map = document.getElementById('map');
let $distance = document.getElementById('distance');

$map.addEventListener('click', function(e){
    let distance = getDistance(e, target);
    let distanceHint = getDistanceHint(distance);
    $distance.innerHTML = distanceHint;
    
    if(distance < 20){
        alert('You Found the Treasure!');
        location.reload();
    }
})
