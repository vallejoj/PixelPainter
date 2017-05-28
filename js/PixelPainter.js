var pixelProject = (function () {

  function testFunction(){

    var testDiv = "<div class=\"pixelBox\">testtext</div>";
    var testDiv2 = "<div class=\"colorBox\">testtext</div>";


    $('.pixelGrid').append(testDiv);
    $('#colors').append(testDiv2);


  };

  return {
    test: testFunction
  };

});

var myPixelProject= pixelProject();
myPixelProject.test();
