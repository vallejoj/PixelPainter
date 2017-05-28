var pixelProject = (function() {
  var i = 0;
  var j = 0;
  var dimension = 4;
  var color = "black";
  var colorArray =[[],[],[],[],[]];

  var buildColor = function(){
    var ourColorID = "";
    colorArray.forEach( function(color){

      var testColor = "<div class=\"colorBox\" id=\""+ color + "\"> </div>";
      $("#colors").append(testColor);

      ourColorID = "#".concat(color);

      $(ourColorID).css("background-color", color);
      $(ourColorID).click( function(){
          setColor(this.id);
      });
    });
  };

  var setColor= function( theColor ){

    color = theColor;
  };
var setColorSwatch= function(){

  var redOrange= function(){

    var min = Math.ciel(66);
    var max= Math.floor(226);
    return  Math.floor(Math.random()*(max-min+1))+min;

  };
  var green= function(){

    var min = Math.ciel(66);
    var max= Math.floor(244);
    return  Math.floor(Math.random()*(max-min+1))+min;

  };
  var blue= function(){

    var min = Math.ciel(83);
    var max= Math.floor(232);
    return  Math.floor(Math.random()*(max-min+1))+min;

  };
  var purple= function(){

    var min = Math.ciel(104);
    var max= Math.floor(244);
    return  Math.floor(Math.random()*(max-min+1))+min;

  };
  var grey= function(){

    var min = Math.ciel(20);
    var max= Math.floor(244);
    return  Math.floor(Math.random()*(max-min+1))+min;

  };
}
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

      $(selector).css("background-color", color);

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
    clear: clearGrid,
    color: buildColor
  };



});

var myPixelProject = pixelProject();
myPixelProject.build();
myPixelProject.color();
//myPixelProject.test();
