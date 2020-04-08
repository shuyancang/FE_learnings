

var div = document.getElementById('div');
document.body.appendChild(div);
var obj = new Timer.Test(div);

var button = document.createElement('button');
button.innerHTML = 'start';
button.onclick = function(){
  obj.start();
}

document.body.appendChild(button);

var endBut = document.createElement('button');
endBut.innerHTML = 'end';
endBut.onclick = function(){
  obj.stop();
}

document.body.appendChild(endBut);