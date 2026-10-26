document.getElementById("ice").addEventListener('click', playsong);
document.getElementById("girlfriend").addEventListener('click', playsong);
document.getElementById("rebel").addEventListener('click', playsong);

function stopmusic() {
  	var y = document.getElementsByTagName('audio');
  	for(var j=0; j<y.length; j++) {
  		y[j].pause();}
  	
  	document.getElementById('marq').innerHTML = 'no music is playing';}
  		
function playsong(e) {
  	var y = document.getElementsByTagName('audio');
  	for(var j=0; j<y.length; j++) {
  		y[j].pause();}

    //y[0].play();
  	//var songvalue = e.target;
  	//document.getElementsByTagName('audio')[songvalue].currentTime = 0;
  	//e.target.child.play();
    e.target.nextElementSibling.currentTime=0;
    e.target.nextElementSibling.play();
  	
  	document.getElementById('marq').innerHTML = "Now playing: " + e.target.innerHTML;}