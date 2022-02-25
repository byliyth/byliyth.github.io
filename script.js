var sec = 0
var start = document.getElementById('Start');

function Continue() {  
	sec += 1
  switch (sec) {
  case 1:
    start.remove()
  	document.getElementById('log').innerHTML += ('<p class="log">Tran awoke from her bed, freshly haunted by a new nightmare. She looked around, scared, searching desperately for her dear friend, Pajaro. Gazing upon the vastness of the endless void in which they called home, she saw nothing. Pajaro was gone. Was she still in the nightmare? Her friend wouldn\'t have just vanished otherwise. Restlessness took her over as she jumped out of bed and began to scour the Void in search of her friend.');
	document.getElementById('buttons').innerHTML += ('<br><br><button id = "Continue" onClick = "Continue()">Continue</button>  ')
	button = document.getElementById('Continue')
	break;
  case 2:
    document.getElementById('log').innerHTML += ('<p class="log">Pajaro and Tran were the only inhabitants of the land known as "the Void." Although the only residents, the faint sounds of a train indicated a friend was nearby. Tran followed the noises of steam and found her way to the Train Station.<br>There, the Conductor awaited her.');
	break;
  case 3:
    document.getElementById('log').innerHTML += ('<p class="log">"Hello, Tram!" the mouse in a conductor\'s hat squeaked. He had a habit of calling Tran "Tram," though she did not mind. In fact, she thought it was really cute of the little fellow.</p><p class="log">“Hello, Conductor,” Tran greeted.</p><p class="log">“I’m glad you’ve come to talk today, though where is Pajaro?” Tran told the Conductor about Pajaro’s disappearance. He grew quiet. "Perhaps Pajaro is just on a stroll?" he offered. Tran quickly shot that down. Pajaro would never leave her behind. Pajaro was her best friend, after all. They\'ve been together since... Well, forever. That was until now. The Conductor pondered for a while and after he looked up, a light in his eyes and an idea in his mind. “Well, Tram, I can help you try and find Pajaro, but I’ll need you to help me in exchange.”');
	break;
  case 4:
    document.getElementById('log').innerHTML += ('<p class="log">“What is it?” Tran inquired. Her curiosity was piqued. The Conductor has never needed her help before, but, then again, she’s never needed his help either. The Conductor’s expression changed, giving Tran a solemn look. “This world of ours is dying, Tram. The Bulbs in each land are slowly fading away, their energy is dwindling.”</p>');
	button.remove() // current
	break;
  case 5:
    document.getElementById('log').innerHTML += ('Tran followed the noises of steam and found her way to the Train Station. There, the Conductor awaited her.');
    document.getElementById('log').innerHTML += ('<br><br>')
	break;
  case 6:
    document.getElementById('log').innerHTML += ('"Hello, Tram!" the mouse in a conductor\'s hat squeaked. He had a habit of calling Tran "Tram," though she did not mind. In fact, she thought it was really cute of the little fellow.');
    document.getElementById('log').innerHTML += ('<br><br>')
	break;
  case 7:
    document.getElementById('log').innerHTML += ('Tran told the Conductor about Pajaro’s disappearance. He grew quiet. "Perhaps Pajaro is just on a stroll?" he offered. Tran quickly shot that down. Pajaro would never leave her behind. Pajaro was her best friend, after all. They\'ve been together since... Well, forever. That was until now. The Conductor pondered for a while and after he looked up, a light in his eyes and an idea in his mind.');
    document.getElementById('log').innerHTML += ('<br><br>')
	break;
  case 8:
    document.getElementById('log').innerHTML += ('“Well, Tram, I can help you try and find Pajaro, but I’ll need you to help me in exchange.”<br><br>“What is it?” Tran inquired. Her curiosity was piqued. The Conductor has never needed her help before, but, then again, she’s never needed his help either.');
    document.getElementById('log').innerHTML += ('<br><br>')
	break;
  case 9:
    document.getElementById('log').innerHTML += ('');
    document.getElementById('log').innerHTML += ('<br><br>')
	break;
  case 10:
    document.getElementById('log').innerHTML += ('He takes a deep breath. “We must restore the power of the Bulbs. By doing so, we can keep the Darkness away.”<br><br>Tran doesn’t understand most of what the Conductor says, but she understands that she has to agree to his terms if she wishes to find Pajaro again. She gives a nod.');
    document.getElementById('log').innerHTML += ('<br><br>')
	break;
  case 11:
    document.getElementById('log').innerHTML += ('The Conductor smiles. “Thank you, Tram. Now, all aboard. Our first stop is the Junkyard.”<br><br>Tran and the Conductor hop on the train, and it begins to ride off into the white void, fading into the horizon.');
    document.getElementById('log').innerHTML += ('<br><br>')
	//document.getElementById('log').innerHTML += ('<button id = "Next" onClick = "Next()">Next Chapter</button>')
	button.remove()
	break;
  }
}  

