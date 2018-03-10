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
    try {
        a();
    }
    catch (error) { }

    newFunction();
    hello();
    //window.setInterval(alertModule, 1000);
});
function newFunction() {
    if ($(".mainDiv").has("p")) {
        $(".mainDiv p").each(function () {
            console.info(this.innerText);
        });
        $.each([1, 2, 3], function (a, b) {
            console.info(a + " : " + b);
        });
    }
    //setTimeout(newFunction, 1000);
}
function alertModule() {
    console.log(Date());
}
function a() {
    a();
}
function hello() {
    var re1 = "Swagata";
    var re2 = "Chaudhuri";
    alert(re1 + " " + re2);
}
