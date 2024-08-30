// offer bar
var offerBar = document.getElementById("offer-bar")

document.getElementById("offer-close").addEventListener("click",function(){
    offerBar.style.display="none"
}
)

// selecting side-navbar, menu icon
var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")
menuicon.addEventListener("click", function()
{
    sidenav.style.left=0
})

closenav.addEventListener("click",function(){
    sidenav.style.left="-50%"
})


//Occasion
//product filter summer

document.querySelector('input[value="summer"]').addEventListener('change', function() {
    const isChecked = this.checked;
    const items = document.querySelectorAll('.collection_items');

    items.forEach(item => {
        const itemText = item.querySelector('h3').textContent.toLowerCase();
        if (isChecked) {
            // Show only items that contain "summer" in the title
            if (itemText.includes('summer')) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        } else {
            // Show all items when unchecked
            item.style.display = '';
        }
    });
});

//product filter Party
document.querySelector('input[value="party"]').addEventListener('change', function(){
    const isChecked =this.checked;
    const items = document.querySelectorAll('.collection_items');

    items.forEach(item => {
        const itemText = item.querySelector('h3').textContent.toLowerCase();
        if (isChecked) {
            // Show only items that contain "party" in the title
            if(itemText.includes('party')) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }

        } else {
            //Show all items when unchecked
            item.style.display = '';
        }
    });
});

//product filter Beach
document.querySelector('input[value="beach"]').addEventListener('change', function(){
    const isChecked = this.checked;
    const items = document.querySelectorAll('.collection_items');

    items.forEach(item => {
        const itemText = item.querySelector('h3').textContent.toLowerCase();
        if(isChecked) {
            // Show only items that contain "beach"
            if(itemText.includes('beach')){
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        } else {
            //show all item when unchecked
            item.style.display = '';
        }
    });
});

// Colors
// Red
document.querySelector('input[value="red"]').addEventListener('change', function(){
    const isChecked = this.checked;
    const items = document.querySelectorAll('.collection_items');

    items.forEach(item => {
        const itemText = item.querySelector('h3').textContent.toLowerCase();
        if(isChecked) {
            // Show only items that contain "beach"
            if(itemText.includes('red')){
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        } else {
            //show all item when unchecked
            item.style.display = '';
        }
    });
});

// Blue
document.querySelector('input[value="blue"]').addEventListener('change', function(){
    const isChecked = this.checked;
    const items = document.querySelectorAll('.collection_items');

    items.forEach(item => {
        const itemText = item.querySelector('h3').textContent.toLowerCase();
        if(isChecked) {
            // Show only items that contain "beach"
            if(itemText.includes('blue')){
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        } else {
            //show all item when unchecked
            item.style.display = '';
        }
    });
});

//White
document.querySelector('input[value="white"]').addEventListener('change', function(){
    const isChecked = this.checked;
    const items = document.querySelectorAll('.collection_items');

    items.forEach(item => {
        const itemText = item.querySelector('h3').textContent.toLowerCase();
        if(isChecked) {
            // Show only items that contain "beach"
            if(itemText.includes('white')){
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        } else {
            //show all item when unchecked
            item.style.display = '';
        }
    });
});

// Green
document.querySelector('input[value="green"]').addEventListener('change', function(){
    const isChecked = this.checked;
    const items = document.querySelectorAll('.collection_items');

    items.forEach(item => {
        const itemText = item.querySelector('h3').textContent.toLowerCase();
        if(isChecked) {
            // Show only items that contain "beach"
            if(itemText.includes('green')){
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        } else {
            //show all item when unchecked
            item.style.display = '';
        }
    });
});
