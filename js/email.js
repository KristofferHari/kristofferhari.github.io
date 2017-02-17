//formspree.io ajax request
// John Estes - https://github.com/JEstes93
//02-17-2017

$('#contactform').on('submit', function (e) {
    $.ajax({
        url: "//formspree.io/kristofferhari@gmail.com",
        method: "post",
        data: $(this).serialize(),
        dataType: "json"
    });
});