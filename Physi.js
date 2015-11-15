Blockly.Blocks['getcanvas'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("getElementByID");
    this.appendValueInput("id")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Canvas ID");
    this.setOutput(true, "HTMLCanvasElement");
    this.setColour(210);
    this.setTooltip('Gets an element from an ID');
    this.setHelpUrl('https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API');
  }
};
Blockly.JavaScript['getcanvas'] = function(block) {
  var value_id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'window.document.getElementById('+value_id+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Blocks['getcontext'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Brush");
    this.appendValueInput("BrushInput")
        .setCheck("HTMLCanvasElement")
        .appendField("Canvas");
    this.appendValueInput("ContextType")
        .setCheck("String")
        .appendField("Brush Type");
    this.setOutput(true, "CanvasRenderingContext2D");
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['ctxfillstyle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Use Pallette");
    this.appendValueInput("brush")
        .setCheck("CanvasRenderingContext2D")
        .appendField("Brush");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Pallette Color: ")
        .appendField(new Blockly.FieldColour("#ff0000"), "color");
    this.setInputsInline(false);
    this.setPreviousStatement(true, "CanvasRenderingContext2D");
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['ctxfillrect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DrawRectangle");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField("width");
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField("height");
    this.appendValueInput("brush")
        .setCheck("CanvasRenderingContext2D")
        .appendField("Brush");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.JavaScript['ctxfillrect'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  var value_brush = Blockly.JavaScript.valueToCode(block, 'brush', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_brush+'.fillRect('+value_x+','+value_y+','+value_width+','+value_height+');';
  return code;
};

Blockly.JavaScript['ctxfillstyle'] = function(block) {;
  var value_brush = Blockly.JavaScript.valueToCode(block, 'brush', Blockly.JavaScript.ORDER_ATOMIC);
  var colour_color = block.getFieldValue('color');
  // TODO: Assemble JavaScript into code variable.
  var code = value_brush + '.fillStyle ="'+colour_color+'"';
  return code;
};
Blockly.JavaScript['getcontext'] = function(block) {
  var value_brushinput = Blockly.JavaScript.valueToCode(block, 'BrushInput', Blockly.JavaScript.ORDER_ATOMIC);
  var value_contexttype = Blockly.JavaScript.valueToCode(block, 'ContextType', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_brushinput+'.getContext('+value_contexttype+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
var tour = new Tour({
  steps: [
  {
    element: "#blocklyDiv",
    title: "Intro",
    content: "Welcome to PhysiScript.js Hour Of Code Edition!"
  },
    
  {
      element :"#artboard",
  title: "Intro to HTML5 Canvas",
content: "BTEOC, YWBAT create artwork that can be analyzed using JavaScript, HTML5 Canvas, and learned art concepts."
},
 {
      element :"#artboard",
  title: "Intro to HTML5 Canvas",
  content: "You're probably wondering \"How can I make a masterpiece that I can exhibit through computer science?\"."
  },
   {
      element :"#blocklyDiv",
  title: "Mission 1",
  content: "Your task is to make a green rectangle using JavaScript. first go to the code editor..." 
       
   },
    {
      element :"#blocklyDiv",
  title: "Mission 1: Setup 1",
  content: " Click on the Variables tab, and drag in the block that creates variables to the whitespace."
          
        
    }
  ,
  { element: "#blocklyDiv",
   title : "Mission 1: Setup 2",
   content: "Right click the variable block and click rename 'item'. and type 'Canvas'"
  },
  {
      element: "#blocklyDiv",
      title:"Mission 1: Intermission",
      content:"The following step you just completed was the initialization of a variable. A  variable is something you can think of as something you own, or use that has a meaning to it, sort of like a word in a dictionary."
  },
  {
      element: "#blocklyDiv",
      title: "Mission 1: Setup 3",
      content: "Now, Drag in from the Canvas Tab the GetElement block."
  },
  {
      
      element: "#blocklyDiv",
      title: "Mission 1: Setup 4",
      content: "Drag from the Text tab the block with quotes on it into the workspace, and add it to the GetElement block that you dragged in earlier"
      
  },
  {
      element: "#blocklyDiv",
      title: "Mission 2: Rectangle 5",
      content: "Now you are about to create what you have used to make a canvas variable: a function! To do that, select the Procedures tab"
  },
  {
      element:"#blocklyDiv",
      title:"Mission 2: Rectangle 1",
      content: "Drag out the topmost block on the screen for Procedures."
  },
  {
      element:"#blocklyDiv",
      title:"Mission 2: Rectangle 2",
      content: "Next, drag out another variable block like you did earlier, and rename this variable to Brush"
  },
  {element: "#blocklyDiv",
  title: "Mission 2: Rectangle 3",
  content: "Drag in a Get Brush block, A Variable Blockly that refers to Canvas, and a text block. Type into the text block 2d, and drag the Canvas Variable block to the slot that says 'Brush' "
},{
   element: "#blocklyDiv",
  title: "Mission 2: Rectangle 4",
  content:"Drag in a Choose Color block from the canvas tab, and choose any color of you choice, but use the Brush vairable you had earlier to setup the brush "
},
{
    element:"#textarea",
    title:"Mission 2:Rectangle 5",
    content:"Now look at the text code editor. The code editor in text shows a very different name than what you know the color of your choice being called.That is a hexadecimal color code. #000000 is black, #ffffff is white. "
},
{
    element:"#blocklyDiv",
    title:"Mission 2:Rectangle 6",
    content:"Now, for the moment of truth: Drag out a Draw Rectangle block from the Canvas Tab, and drag 4 number blocks out from the Math Tab. Now put the math blocks onto the draw rectangle block, and for the first two values, type 33. Next, type 50 for the last tow. Now grab another Brush variable from the Variables tab and place it on the last slot in the drawRect block. "
}]});

// Initialize the tour
tour.init();

// Start the tour
tour.start();