$(document).ready(function () {
    /*JavaSript Timeout Function*/
    setTimeout(
        function () {
            $("#testMessage").slideUp("slow");
        }, 5000
    );
    $("<p><span>If you click on me, I will disappear</span></p>").appendTo(".mainDiv");
    $("<p><span>Click on me!!!</span></p>").appendTo(".mainDiv");
    $("<p><span>Click on me too!!!</span></p>").appendTo(".mainDiv");
    $('<p/>', {
        id: 'message1',
        class: 'mytest',
        text: 'Click me once to disappear with an alert'
    }).appendTo('.mainDiv');
    $('<p/>', {
        id: 'message2',
        class: 'mytest',
        text: 'Click me twice to disappear with an alert'
    }).appendTo('.mainDiv');
    $("span").css("color", "lightgreen");
    $("span").css("cursor", "pointer");
    $("p").click(function () {
        $(this).slideUp("slow");
    });
    $("#message1").on("click", function () {
        alert('I am clicked one time!!!');
    });
    $("#message2").dblclick(function () {
        alert('I am double clicked!!!');
    });
});
