var pixelProject = (function () {

  function testFunction(){
    var testDiv= "<div>testtext</div>";

    $('body').append(testDiv);
  };

  return {
    test: testFunction
  };

});

var myPixelProject= pixelProject();
myPixelProject.test();
