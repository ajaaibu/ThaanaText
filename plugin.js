var generateText = function(data, label){
	label = label || 'thaana data';
	for (var i = 0, l = [selection length]; i < l; i++) {
		var layer = selection[i];
		var randomData = data[ Math.floor(Math.random() * data.length) ];
		if(randomData){
			[layer setStringValue: randomData];
			[layer setName: label];
		}		
	}

	if([selection length] == 0){
		alert("A layer must be seleced");
	}
};

var generateArticle = function(data, label){
  label = label || 'thaana data';
  for (var i = 0, l = [selection length]; i < l; i++) {
    var layer = selection[i];

    var randomData = '';

    for(var j=0;j<4;j++){
      randomData += data[Math.floor(Math.random() * data.length)]+"\n\n";
    }

    if(randomData){
      [layer setStringValue: randomData];
      [layer setName: label];
      [layer setStringAlignment: 'right'];
    }
  }

  if([selection length] == 0){
    alert("A layer must be seleced");
  }
};

function alert(msg, title) {
  title = title || "Ooops!!";
  var app = [NSApplication sharedApplication];
  [app displayDialog:msg withTitle:title];
}