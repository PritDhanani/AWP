let co = document.getElementById('count');
let add = document.getElementById('add');
let down = document.getElementById('down');
let counter = 0;


add.addEventListener("click", () => {
    counter += 1;
    co.innerHTML = counter;
    console.log(counter);
    if (counter > 0) {
        co.style.color = 'GREEN';
    }
})

down.addEventListener('click', function () {
    counter -= 1;
    co.innerHTML = counter;
    console.log(counter);
    if (counter < 0) {
        co.style.color = 'red';
    }
})

if(counter==0) {
    co.style.color = '#333333';
}




