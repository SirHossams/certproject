var ttlqualpnts=0,ttlcrds=0;
function addcourse() {
var grade=document.getElementsByClassName("grade");
var qualpnts;
var crds=document.getElementById("crdttxt").nodeValue;
switch (grade)
{
    case "F":
        qualpnts=0.00;
        break;
    case "D":
        qualpnts=2.00;
        break;
    case "C":
        qualpnts=2.33;
        break;
    case "C+":
        qualpnts=2.67;
        break;
    case "B":
        qualpnts=3.00;
        break;
    case "B+":
        qualpnts=3.33;
        break;
    case "A-":
        qualpnts=3.67;
        break;
    case "A":
        qualpnts=4.00;
        break;
    default:
        alert("It is not a grade!")
}
ttlqualpnts+=qualpnts;
ttlcrds+=crds;
}

var result=ttlqualpnts/ttlcrds;
var disp=function() {
if (result>=2.00)
    alert("Congratulations! Your are successful.")
else if (result<2.00)
    alert("OH NO! You have failed.")
}
