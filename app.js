var mainDiv=document.getElementById('mainDiv');



var button=document.createElement('button');
button.setAttribute('id','buttId');
var buttText=document.createTextNode('Play Again');
button.addEventListener('click',function(){
    
    location.reload();
});
button.appendChild(buttText);

mainDiv.appendChild(button);


var tab=document.createElement('table');
tab.setAttribute('id','tab1')



var tr1=document.createElement('tr');
var tr2=document.createElement('tr');
var tr3=document.createElement('tr');

mainDiv.appendChild(tab);

tab.appendChild(tr1);
tab.appendChild(tr2);
tab.appendChild(tr3);


var box1=document.createElement('td');
box1.setAttribute('class','boxes');
box1.setAttribute('id','b1');
box1.setAttribute('onclick','randFun("b1")');



//sub div2

var box2=document.createElement('td');
box2.setAttribute('class','boxes');
box2.setAttribute('id','b2');
box2.setAttribute('onclick','randFun("b2")');

//sub div3

var box3=document.createElement('td');
box3.setAttribute('class','boxes');
box3.setAttribute('id','b3');
box3.setAttribute('onclick','randFun("b3")');

//sub div4

var box4=document.createElement('td');
box4.setAttribute('class','boxes');
box4.setAttribute('id','b4');
box4.setAttribute('onclick','randFun("b4")');

//sub div5
var box5=document.createElement('td');
box5.setAttribute('class','boxes');
box5.setAttribute('id','b5');
box5.setAttribute('onclick','randFun("b5")');

//sub div6
var box6=document.createElement('td');
box6.setAttribute('class','boxes');
box6.setAttribute('id','b6');
box6.setAttribute('onclick','randFun("b6")');

//sub div7
var box7=document.createElement('td');
box7.setAttribute('class','boxes');
box7.setAttribute('id','b7');
box7.setAttribute('onclick','randFun("b7")');

//sub div8
var box8=document.createElement('td');
box8.setAttribute('class','boxes');
box8.setAttribute('id','b8');
box8.setAttribute('onclick','randFun("b8")');

//sub div9
var box9=document.createElement('td');
box9.setAttribute('class','boxes');
box9.setAttribute('id','b9');
box9.setAttribute('onclick','randFun("b9")');



var counter=1;

function randFun(boxId)
{
    var randNo=Math.floor((Math.random() * 9) + 1);
    var current= document.getElementById(boxId);
    var currentText=document.createTextNode(randNo);
    current.removeAttribute('onclick');
    current.appendChild(currentText);
    
if(counter>7){
    var ar=[];
var tds=document.getElementsByTagName('td');
for(var i=0;i<tds.length;i++)
{
    ar[i]=tds[i].firstChild.nodeValue;
}

    
for(var j=0;j<ar.length;j++)
{
    var counter2=1;
    var data=ar[j];
    for(var k=j+1;k<ar.length;k++)
    {
        
        if(data===ar[k]){
            
            counter2++;
            
        }
        
    }
        if(counter2>=3){
            
            break;
            
        }
    }
    if(counter2>=3)
    {
        alert("Congrats!  You Won");
    }
    else{
        alert("Sorry !You Loss");
    }
    
}


counter++;
}       


tr1.appendChild(box1);
tr1.appendChild(box2);
tr1.appendChild(box3);

tr2.appendChild(box4);
tr2.appendChild(box5);
tr2.appendChild(box6);


tr3.appendChild(box7);
tr3.appendChild(box8);
tr3.appendChild(box9);






