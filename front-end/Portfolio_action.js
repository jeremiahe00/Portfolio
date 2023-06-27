
// $('#colorwheel').toggle();
// get button selected at the top
var bkgn = $('table td button');

// changes background color ("modes" to the button color selected)
bkgn.click(function () {
  document.body.style.backgroundColor = $(this).css("background-color");

  if ($(this).css("background-color") === "rgb(245, 245, 245)") {
    $('h1').css("color", 'rgb(0, 0, 0)');
    $('.container').css("background-color", "rgb(255, 255, 255)");
    $('.text').css("background-color", "rgb(255, 255, 255)").css("color", "rgb(0, 0, 0");
    $('#email').css("color", "rgb(0, 0, 0");
    $('.form-select').css("background-color", "rgb(0, 0, 0)");
    $('.form-select').css("color", "rgb(255, 255, 255)");
  } else if ($(this).css("background-color") === "rgb(25, 25, 25)") {
    $('h1').css("color", 'rgb(255, 255, 255)');
    $('.container').css("background-color", "rgb(35, 35, 35)");
    $('.text').css("background-color", "rgb(35, 35, 35)").css("color", "rgb(255, 255, 255");
    $('#email').css("color", "rgb(255, 255, 255");
    $('.form-select').css("background-color", "rgb(255, 255, 255)");
    $('.form-select').css("color", "rgb(0, 0, 0)");
  } else if ($(this).css("background-color") === "rgb(57, 227, 250)") {
    $('h1').css("color", 'rgb(242, 169, 65)');
    $('.container').css("background-color", "rgb(117, 235, 250)");
    $('.text').css("background-color", "rgb(117, 235, 250)").css("color", "rgb(0, 0, 0");
    $('#email').css("color", "rgb(0, 0, 0");
    $('.form-select').css("background-color", "rgb(242, 169, 65)");
    $('.form-select').css("color", "rgb(0, 0, 0)");
  }

});


// temp sol - github projs to open (use api with security in the future)
var mostRecent = "https://github.com/jeremiahe00/Portfolio";
var secondTop = "https://github.com/jeremiahe00/A-star-PathFinding---Makeblock-Mbot---Arduino";
var thirdTop = "https://github.com/jeremiahe00/MazeOfAtlantis";


$('select.form-select').on("change", openGithubOptions);

// open github projects on what is selected
function openGithubOptions() {

  var option = $('select option:selected');

  if (option.text() == "Most Recent") {
    window.open(mostRecent);
  } else if (option.text() == "A-star-PathFinding") {
    window.open(secondTop);
  } else if (option.text() == "MazeOfAtlantis") {
    window.open(thirdTop);
  }
}

// $('#changeColorScheme').on("click", function() {
//   $('.modes').toggle();
//   $('#colorwheel').toggle();
// });


