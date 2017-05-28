var pixelProject = (function() {
  var i = 0;
  var j = 0;
  var dimension = 4;
  var ourColor = "";

  var clearGrid = function(){
    var cursor = 0;
    var ourCursorID = "";
    for(i = 0; i < dimension; i++){
      for(j = 0; j < dimension; j++){
        cursor++;
        ourCursorID = "#".concat(cursor);
        $(ourCursorID).css("background-color", "white");
      }
    }
  };

  // Build Grid Function
  var buildGrid = function() {

    var cursor = 0;

    for (i = 0; i < dimension; i++) {

      var ourRowId = "row";
      ourRowId = ourRowId.concat(i);
      var ourRow = "<div class=\"row\" id=\"" + ourRowId + "\"></div>";
      $('.pixelGrid').append(ourRow);
      ourRowId = "#".concat(ourRowId);


      for (j = 0; j < dimension; j++) {
        cursor++;
        console.log(ourRowId);
        var ourDiv = "<div class=\"pixelBox\" id=\"" + cursor + "\"> </div>";
        $(ourRowId).append(ourDiv);
        ourCursorID = "#";
        ourCursorID = ourCursorID.concat(cursor);
        $(ourCursorID).click(  function(){
            insertColor(this.id);
          });
      }
    }
  };


  // Insert Color
  function insertColor(selector) {
      // Make it JQuery-able
      selector = "#".concat(selector);

      $(selector).css("background-color", "black");

  }

  // Test Function
  function testFunction() {

    var testDiv = "<div class=\"pixelBox\">testtext</div>";
    var testDiv2 = "<div class=\"colorBox\">testtext</div>";


    $('.pixelGrid').append(testDiv);
    $('#colors').append(testDiv2);


  }


  // Return Block
  return {
    test: testFunction,
    build: buildGrid,
    clear: clearGrid
  };



});

var myPixelProject = pixelProject();
myPixelProject.build();
//myPixelProject.test();
