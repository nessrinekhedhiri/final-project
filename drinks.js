function calculprix(i)
{
    var somme=0;

    var p=document.getElementById("price"+i).textContent;
    p=p.replace('D',"");
    p=p.trim();

    var q= document.getElementById("quantite"+i).value;
    var checkbox=document.getElementById("checkbox"+i);
     somme=p*q;
    if(checkbox.checked==true)
    {
    alert("somme :" +somme)
    }
}