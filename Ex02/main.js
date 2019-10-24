let arr = [2,4,5,1,7,9,3,6,0];
document.getElementById('display').innerHTML = 'Các phần tử của mảng ban đầu : '+arr;
function tryRemoveFromArray(){
    let element = Number(document.getElementById('inElement').value);
    for(let i=0 ; i<arr.length; i++){
        if(element == arr[i]){
            arr.splice(i,1);
        }
    }
    document.getElementById('result').innerHTML = 'Các phần tử của mảng mới là : '+arr;
}