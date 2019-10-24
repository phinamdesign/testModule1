let array = [1,5,2,7,15,9,4];
let max = array[0];
document.getElementById("display").innerHTML = "Các phần tử có trong mảng : "+array;
function findMaxScore() {
    for (let i = 1 ; i < array.length ; i ++){
        if (max < array[i]){
            max = array[i];
        }
    }
    document.getElementById("result").innerHTML = max ;
}