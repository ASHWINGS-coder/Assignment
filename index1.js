//http://peril3as3a4.nearbygrocer.com/categories/1
//http://peril3as3a4.nearbygrocer.com/branchList/123456
var dropdown = $("#stores");
var allowSubmit = true;
var itemList = $("#items");
var topEle = $("#header1");
var name=$("#name")
$.get("http://peril3as3a4.nearbygrocer.com/branchList/123456", function (data, status) {
    for(let i = 0 ; i<data.DATA.length;i++) {
        dropdown.append('<option value="' + data.DATA[i].branch_name + '">' + data.DATA[i].branch_name + '</option>');
    }
});

dropdown.change(function () {
    allowSubmit = true;
});

$("form button").click(function (e) {
    e.preventDefault();
   // console.log(data.DATA[i].branch_name)
    if (allowSubmit) {
        value = dropdown.val(); 
        console.log(value)
        allowSubmit = false;
        $.get("http://peril3as3a4.nearbygrocer.com/categories/1", function (data) {
            let items = data.DATA;
            $("#name").remove();
            topEle.append(`
            <h1> ${value} </h1>
            `)
            for (let item of items) {
                itemList.append(`
                    <div class="card shadow-sm mx-2 my-4" style="width: 18rem;">
                        <img src="${item.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">${item.category_name}</p>
                            <p class="card-text text-right">${item.product_count}</p>
                        </div>
                    </div>
                `);
            }
        });
        $("#get-course").remove();
    }
});

// document.getElementById('btn').addEventListener('click',get)
// // document.getElementById('btn1').addEventListener('click',get1)

//         function get(){
//             fetch('http://peril3as3a4.nearbygrocer.com/categories/1')
//             .then(res => res.json())
//             .then(data => console.log(data.DATA[0]));
//         }

// function get1(){
//     fetch('http://peril3as3a4.nearbygrocer.com/branchList/123456')
//     .then(res => res.json())
//     .then(data => console.log(data.DATA));
// }