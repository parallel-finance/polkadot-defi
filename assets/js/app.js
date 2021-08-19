var d 		  	= document,
    b         = d.querySelector('body'),
    menu      = d.querySelector(".submenu"),
    submitForm  = d.getElementById('mc-embedded-subscribe'),
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



function ve(emails) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emails).toLowerCase());
}



(function () {
    document.getElementsByTagName('form')[0].addEventListener('submit', function (e) {
        e.preventDefault();

        if (!ve(d.getElementById("mce-EMAIL").value)) { d.getElementById("mce-EMAIL").classList.add('error'); return}

        if (!d.getElementById("group_1").checked) { d.getElementById("group_1").classList.add('error'); return}

        

        // Get url for mailchimp
        var url = this.action.replace('/post?', '/post-json?');

        // Add form data to object
        var data = '';
        var inputs = this.querySelectorAll('#newsletterform input');
        for (var i = 0; i < inputs.length; i++) {
            data += '&' + inputs[i].name + '=' + encodeURIComponent(inputs[i].value);
        }

        // Create & add post script to the DOM
        var script = document.createElement('script');
        script.src = url + data;
        document.body.appendChild(script);

        // Callback function
        var callback = 'callback';
        window[callback] = function(data) {

            // Remove post script from the DOM
            delete window[callback];
            document.body.removeChild(script);

            data.msg === 'Thank you for subscribing!' ? document.getElementsByTagName('form')[0].classList.add('sucess') : document.getElementById('js-subscribe-response').innerHTML = data.msg;

            
        };
    });
})();
