$(document).ready(function() {

    var images=[{
        name: ["la", "losangeles"],
        src: "images/la.jpg"
        },
        {
            name: ["nyc", "newyork"],
            src: "images/nyc.jpg"
            },
        {
        name: ["sydney", "syd"],
        src: "images/sydney.jpg"
        }];

    $('#submit-btn').click(function(e) {
        e.preventDefault();

        console.log('clicked');

        var userinput = $('#city-type').val();
        userinput = userinput.toLowerCase().trim();

        // version 1

        images.forEach(function(element, index) {
            console.log(element, index);

            element.name.forEach(function(e, i) {
              console.log(e, i);

              if(userinput === e) {
                $('body').css('background-image', 'url(' + element.src + ')');
    }
              console.log(images[index].src);
            });
        });

      });
});

// end of version 1

// version 2

images.forEach(imagesObject);

function imagesObject(element, index) {
  console.log(element, index);

  element.name.forEach(cityName);
}

function.cityName(e, i){
  console.log(e, i);

  console.log(images[index].src);
  console.log(element.src);

  if(userinput === e) {
    $('body').css('background-image', 'url(' + element.src + ')');
  }
}

});
});
