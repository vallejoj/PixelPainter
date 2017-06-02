var pixelProject = (function() {

  var dimension = 20;
  var color = "black";
  var colorArray = [];

  var buildColor = function() {
    var ourColorID = "";
    colorArray.forEach(function(color) {

      var testColor = "<button class=\"colorBox\" id=\"" + color + "\"> </>";
      $("#colors").append(testColor);

      ourColorID = "#".concat(color);

      $(ourColorID).css("background-color", color);
      $(ourColorID).mousedown(function() {
        setColor(this.id);

      })

    });

  };

  var setColor = function(theColor) {
    color = theColor;
    var previewBox = document.getElementById('myPreviewBox');
    previewBox.style.backgroundColor = theColor;
  };


  var setColorSwatch = function() {
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 10; j++) {
        var colorToPush = Math.floor(Math.random() * 16777215).toString(16);
        colorArray.push(colorToPush);
      }
    }
  }

  var eraseGrid = function() {
    setColor('black')

  }



  var clearGrid = function() {
    var cursor = 0;
    var ourCursorID = "";
    for (i = 0; i < dimension; i++) {
      for (j = 0; j < dimension; j++) {
        cursor++;
        ourCursorID = "#".concat(cursor);
        $(ourCursorID).css("background-color", "black");
      }
    }
  };

  // Build Grid Function
  var buildGrid = function() {
    var mousedown = false;
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
        $(ourCursorID).on('mouseover', function() {
          if (mousedown) {
            insertColor(this.id);

          }
        });
        $(ourCursorID).on('mousedown', function() {
          mousedown = true;
          insertColor(this.id);

        });
        $(ourCursorID).on('mouseup', function() {
          mousedown = false;
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



  // Return Block
  return {
    build: buildGrid,
    erase: eraseGrid,
    clear: clearGrid,
    color: buildColor,
    setColorSwatch: setColorSwatch,

  };



});

var myPixelProject = pixelProject();
myPixelProject.build();
myPixelProject.setColorSwatch();
myPixelProject.color();
//myPixelProject.test();
