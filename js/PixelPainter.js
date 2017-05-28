var pixelProject = (function() {

  var buildGrid = function() {

    var cursor = 0;

    for (var i = 0; i < 4; i++) {

      var ourRowId = "row";
      ourRowId = ourRowId.concat(i);
      var ourRow = "<div class=\"row\" id=\"" + ourRowId + "\"></div>";
      $('.pixelGrid').append(ourRow);
      ourRowId = "#".concat(ourRowId);


      for (var j = 0; j < 4; j++) {
        cursor++;
        console.log(ourRowId);
        var ourDiv = "<div class=\"pixelBox\" id=\"" + cursor + "\"> </div>";
        $(ourRowId).append(ourDiv);
        ourCursorID = "#";
        ourCursorID = ourCursorID.concat(cursor);
        $(ourCursorID).click(insertColor());
      }
    }

    function insertColor() {
    
    }


  };

  function testFunction() {

    var testDiv = "<div class=\"pixelBox\">testtext</div>";
    var testDiv2 = "<div class=\"colorBox\">testtext</div>";


    $('.pixelGrid').append(testDiv);
    $('#colors').append(testDiv2);


  };

  return {
    test: testFunction,
    build: buildGrid
  };

});

var myPixelProject = pixelProject();
myPixelProject.build();
//myPixelProject.test();
