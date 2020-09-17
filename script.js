let y = document.getElementsByClassName('seat');
let arrY = [].slice.call(y);
arrY.forEach(function(elem) {
    elem.addEventListener("click", function(e) {
        e.preventDefault();
        if (e.target.classList.contains("selected")) {
            e.target.classList.remove("selected");
            let price = document.getElementById("movie").value;
            let x = document.getElementsByClassName('selected');
            let arr = [].slice.call(x);
            console.log(arr.length);
            let totalPrice = price * (arr.length - 1);
            document.getElementById('count').innerHTML = arr.length - 1;
            document.getElementById('total').innerHTML = totalPrice;
            
        } else {
            e.target.className += " selected";
            let price = document.getElementById("movie").value;
            let x = document.getElementsByClassName('selected');
            let arr = [].slice.call(x);
            console.log(arr.length);
            let totalPrice = price * (arr.length - 1);
            document.getElementById('count').innerHTML = arr.length - 1;
            document.getElementById('total').innerHTML = totalPrice;
        }
    });
});
