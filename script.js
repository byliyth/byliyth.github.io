var sec = 0
var button = document.getElementById('Continue');

function Continue() {  
	sec += 1
  switch (sec) {
  case 1:
  	document.getElementById('log').innerHTML += ('Tran awakes from her bed, freshly haunted by a nightmare. She looks around, scared, searching desperately for her dear friend, Pajaro.');
    document.getElementById('log').innerHTML += ('<br><br>')
	break;
  case 2:
    document.getElementById('log').innerHTML += ('She looks upon the vastness of the endless void in which they called home. Nothing. Pajaro was gone.');
    document.getElementById('log').innerHTML += ('<br><br>')
	break;
  case 3:
    document.getElementById('log').innerHTML += ('Was she still in the nightmare? Her friend wouldn\'t just have vanished otherwise. Restlessness takes her over as she jumps out of bed and begins to scour the Void in search of her friend.');
    document.getElementById('log').innerHTML += ('<br><br>')
	break;
  case 4:
    document.getElementById('log').innerHTML += ('Pajaro and Tran were the only inhabitants of the land known as "The Void." Although the only residents, the faint sounds of a train indicates nearby help.');
    document.getElementById('log').innerHTML += ('<br><br>')
	break;
  case 5:
    document.getElementById('log').innerHTML += ('Tran follows the noises of steam and finds her way to the Train Station. There she meets her friend, the Conductor.');
    document.getElementById('log').innerHTML += ('<br><br>')
	break;
  case 6:
    document.getElementById('log').innerHTML += ('"Hello, Tram!" the mouse in a conductor\'s hat squeaks. He had a habit of calling Tran "Tram," though she did not mind.');
    document.getElementById('log').innerHTML += ('<br><br>')
	break;
  case 7:
    document.getElementById('log').innerHTML += ('Tran tells the Conductor about Pajaro and he grows quiet. "Perhaps Pajaro is just on a stroll?" he offers. Tran quickly shoots that down.');
    document.getElementById('log').innerHTML += ('<br><br>')
	break;
  case 8:
    document.getElementById('log').innerHTML += ('Pajaro would never leave her behind. Pajaro is her best friend. They\'ve been together since... Well, forever. That is, until now. The Conductor ponders for a while and an idea enters his mind:');
    document.getElementById('log').innerHTML += ('<br><br>')
	break;
  case 9:
    document.getElementById('log').innerHTML += ('“Well, Tram, I’ll help you out under one circumstance.”<br><br>“What is it?” Tran inquires.<br><br>The Conductor’s expression changes, giving Tran a solemn look. “This world of ours is dying, Tram. The Bulbs in each land are slowly fading away, their energy is dwindling.”');
    document.getElementById('log').innerHTML += ('<br><br>')
	break;
  case 10:
    document.getElementById('log').innerHTML += ('He takes a deep breath. “We must restore the power of the Bulbs. By doing so, we can keep the Darkness away.”<br><br>Tran doesn’t understand most of what the Conductor says, but she understands that she has to agree to his terms if she wishes to find Pajaro again. She gives a nod.');
    document.getElementById('log').innerHTML += ('<br><br>')
	break;
  case 11:
    document.getElementById('log').innerHTML += ('The Conductor smiles. “Thank you, Tram. Now, all aboard. Our first stop is the Junkyard.”<br><br>Tran and the Conductor hop on the train, and it begins to ride off into the white void, fading into the horizon.');
    document.getElementById('log').innerHTML += ('<br><br>')
	button.remove()
	break;
  }
}  

