// get element from the DOM
var nineAmElement = document.querySelector("#user-input9");
var tenAmElement = document.querySelector("#user-input10");
var elevenAmElement = document.querySelector("#user-input11");
var twelvePmElement = document.querySelector("#user-input12");
var onePmElement = document.querySelector("#user-input1");
var twoPmElement = document.querySelector("#user-input2");
var threePmElement = document.querySelector("#user-input3");
var fourPmElement = document.querySelector("#user-input4");
var fivePmElement = document.querySelector("#user-input5");
var saveBtn = document.querySelector("#save");
var today = document.querySelector("#currentDay");
var momentElement = moment().hours(Number);

today.innerHTML = (momentElement);


// eventListener for the save button

$(".save").on("click", function () {
    event.preventDefault();
    var nineElem = nineAmElement.value;
    var tenElem = tenAmElement.value;
    var elevenElem = elevenAmElement.value;
    var twelveElem = twelvePmElement.value;
    var oneElem = onePmElement.value;
    var twoElem = twoPmElement.value;
    var threeELem = threePmElement.value;
    var fourElem = fourPmElement.value;
    var fiveElem = fivePmElement.value;


    localStorage.setItem("9AM-UR", JSON.stringify(nineElem));
    localStorage.setItem("10AM-UR", JSON.stringify(tenElem));
    localStorage.setItem("11AM-UR", JSON.stringify(elevenElem));
    localStorage.setItem("12PM-UR", JSON.stringify(twelveElem));
    localStorage.setItem("1PM-UR", JSON.stringify(oneElem));
    localStorage.setItem("2PM-UR", JSON.stringify(twoElem));
    localStorage.setItem("3PM-UR", JSON.stringify(threeELem));
    localStorage.setItem("4PM-UR", JSON.stringify(fourElem));
    localStorage.setItem("5PM-UR", JSON.stringify(fiveElem));
});

// display time
displayText();

function displayText() {
    var nineAM = JSON.parse(localStorage.getItem("9AM-UR"));
    var tenAM = JSON.parse(localStorage.getItem("10AM-UR"));
    var elevenAM = JSON.parse(localStorage.getItem("11AM-UR"));
    var twelevePM = JSON.parse(localStorage.getItem("12PM-UR"));
    var onePM = JSON.parse(localStorage.getItem("1PM-UR"));
    var twoPM = JSON.parse(localStorage.getItem("2PM-UR"));
    var threePM = JSON.parse(localStorage.getItem("3PM-UR"));
    var fourPM = JSON.parse(localStorage.getItem("4PM-UR"));
    var fivePM = JSON.parse(localStorage.getItem("5PM-UR"));

    nineAmElement.value = nineAM;
    tenAmElement.value = tenAM;
    elevenAmElement.value = elevenAM;
    twelvePmElement.value = twelevePM;
    onePmElement.value = onePM;
    twoPmElement.value = twoPM;
    threePmElement.value = threePM;
    fourPmElement.value = fourPM;
    fivePmElement.value = fivePM;

    if (moment().format("HH") == $(nineAmElement).attr("data-time"))
        $(nineAmElement).css("backgroundColor", "lightgray");
    else if (moment().format("HH") > $(nineAmElement).attr("data-time"))
        $(nineAmElement).css("backgroundColor", "red");
    else
        $(nineAmElement).css("backgroundColor", "yellow");

    if (moment().format("HH") == $(tenAmElement).attr("data-time"))
        $(tenAmElement).css("backgroundColor", "red");
    else if (moment().format("HH") > $(tenAmElement).attr("data-time"))
        $(tenAmElement).css("backgroundColor", "green");
    else
        $(tenAmElement).css("backgroundColor", "lightgray");

    if (moment().format("HH") == $(elevenAmElement).attr("data-time"))
        $(elevenAmElement).css("backgroundColor", "red");
    else if (moment().format("HH") > $(elevenAmElement).attr("data-time"))
        $(elevenAmElement).css("backgroundColor", "pink");
    else
        $(elevenAmElement).css("backgroundColor", "lightgray");


    if (moment().format("HH") == $(twelvePmElement).attr("data-time"))
        $(twelvePmElement).css("backgroundColor", "red");
    else if (moment().format("HH") > $(twelvePmElement).attr("data-time"))
        $(twelvePmElement).css("backgroundColor", "green");
    else
        $(twelvePmElement).css("backgroundColor", "red");

    if (moment().format("HH") == $(onePmElement).attr("data-time"))
        $(onePmElement).css("backgroundColor", "red");
    else if (moment().format("HH") > $(onePmElement).attr("data-time"))
        $(onePmElement).css("backgroundColor", "green");
    else
        $(onePmElement).css("backgroundColor", "pink");

    if (moment().format("HH") == $(twoPmElement).attr("data-time"))
        $(twoPmElement).css("backgroundColor", "red");
    else if (moment().format("HH") > $(twoPmElement).attr("data-time"))
        $(twoPmElement).css("backgroundColor", "green");
    else
        $(twoPmElement).css("backgroundColor", "lightgray");

    if (moment().format("HH") == $(threePmElement).attr("data-time"))
        $(threePmElement).css("backgroundColor", "gray");
    else if (moment().format("HH") > $(threePmElement).attr("data-time"))
        $(threePmElement).css("backgroundColor", "red");
    else
        $(threePmElement).css("backgroundColor", "green");

    if (moment().format("HH") == $(fourPmElement).attr("data-time"))
        $(fourPmElement).css("backgroundColor", "gray");
    else if (moment().format("HH") > $(fourPmElement).attr("data-time"))
        $(fourPmElement).css("backgroundColor", "red");
    else
        $(fourPmElement).css("backgroundColor", "green");

    if (moment().format("HH") == $(fivePmElement).attr("data-time"))
        $(fivePmElement).css("backgroundColor", "gray");
    else if (moment().format("HH") > $(fivePmElement).attr("data-time"))
        $(fivePmElement).css("backgroundColor", "red");
    else
        $(fivePmElement).css("backgroundColor", "green");
}