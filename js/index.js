
//Run js when document has loaded//
$(document).ready(function() {

//Create an array containing the different city names and image links//
    var images=[{
        name: ["la", "losangeles"],
        src: "images/la.jpg"
        },
        {
            name: ["nyc", "newyork"],
            src: "images/nyc.jpg"
            },
        {
            name: ["atx", "austin"],
            src: "images/austin.jpg"
            },
        {
            name: ["sf", "san francisco"],
            src: "images/sf.jpg"
            },
        {
        name: ["sydney", "syd"],
        src: "images/sydney.jpg"
        }];

//Prevent submit button from submitting a form/default action//
    $('#submit-btn').click(function(e) {
        e.preventDefault();

//Get the console log to show 'clicked' so that I can check my code is working//
        console.log('clicked');

//create a variable for the id city type. If the users input is in capital letters, convert to lowercase.//
        var userinput = $('#city-type').val();
        userinput = userinput.toLowerCase().trim();

//Run through the array. Show the element and index in the console log so that I know it is working.//
        images.forEach(function(element, index) {
            console.log(element, index);

//As you run through the array, also run through the element.name array and show in console log//
            element.name.forEach(function(e, i) {
              console.log(e, i);

//If what the user types is equal to one of the strings under name do this: change background image to element src//
                if(userinput === e) {
                $('body').css('background-image', 'url(' + element.src + ')');
                }
            console.log(images[index].src);
            });
        });

      });
});
