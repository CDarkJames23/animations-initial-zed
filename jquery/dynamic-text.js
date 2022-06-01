var texts = new Array();
texts.push(
  "Services for people affected by disability and physical or sensory impairment"
);
texts.push("Help to young people with disability suffering emotional distress");

texts.push("Options for organisations working with vulnerable groups");

var point = 0;

function changeText() {
  $("#cookie-alert").html(texts[point]);
  if (point < texts.length - 1) {
    point++;
  } else {
    point = 0;
  }
}

setInterval(changeText, 3900); /*Call it here*/
changeText();
