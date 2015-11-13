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
var tour = new Tour({
  steps: [
  {
    element: "#blocklyDiv",
    title: "Intro",
    content: "Welcome to PhysiScript.js Hour Of Code Edition! in this IDE, you will first learn how to make art using Blockly, Javascript and HTML5 Canvas"
  },
  {
      element :"#artboard",
  title: "Intro to HTML5 Canvas",
  content: "At first sight a <canvas> looks like the <img> element, with the only clear difference being that it doesn't have the src and alt attributes. Indeed, the <canvas> element has only two attributes, width and height. These are both optional and can also be set using DOM properties. When no width and height attributes are specified, the canvas will initially be 300 pixels wide and 150 pixels high. The element can be sized arbitrarily by CSS, but during rendering the image is scaled to fit its layout size: if the CSS sizing doesn't respect the ratio of the initial canvas, it will appear distorted."
  }
]});

// Initialize the tour
tour.init();

// Start the tour
tour.start();