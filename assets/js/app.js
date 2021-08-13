var d 		  	= document,
    b         = d.querySelector('body'),
    menu      = d.querySelector(".submenu"),
		subMenu   = d.querySelector(".submenu__expanded");


scrollpos = window.scrollY;
scrollpos > 10 ? b.classList.add("scrolled") : b.classList.remove("scrolled");

window.addEventListener('scroll', function(){ 
    //Here you forgot to update the value
    scrollpos = window.scrollY;
    scrollpos > 10 ? b.classList.add("scrolled") : b.classList.remove("scrolled");
});



var scrollpos = window.scrollY;

function add_class_on_scroll() {
    b.classList.add("fade-in");
}

function remove_class_on_scroll() {
    b.classList.remove("fade-in");
}