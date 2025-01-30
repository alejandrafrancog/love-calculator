function calculateLove(){
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    if (name1 && name2){
        console.log("HOLAAAA");
        const hash = (name1+name2).split('').reduce((acc,char) => acc+char.charCodeAt(0),0);
        const lovePercentage = hash % 101;
        if (lovePercentage >= 90){
            document.getElementById("result").style.backgroundColor ="#4CAF50";
            document.getElementById("result").style.color = `white`;

            document.getElementById("result").textContent = `Love's in the air! You got a ${lovePercentage}% compatibility score :D`;
        }
        else if(lovePercentage >= 60 && lovePercentage < 90){
            document.getElementById("result").style.backgroundColor ="#2196F3";
            document.getElementById("result").style.color = "black";
            document.getElementById("result").textContent = `I can feel a connection ;) You got a ${lovePercentage}%  score`;
        }
        else if(lovePercentage >= 50 && lovePercentage < 60){
            document.getElementById("result").style.color = `black`;
            document.getElementById("result").style.backgroundColor ="#FFC107";
            document.getElementById("result").textContent = `Perhaps you should give it a try...You got a ${lovePercentage}%  score`;
        }
        else{
            document.getElementById("result").textContent = `No way Jose. You got a ${lovePercentage}%  score`;
            document.getElementById("result").style.backgroundColor ="#F44336";
            document.getElementById("result").style.color = `white`;
        }

        document.getElementById("result").style.width = "569px";
        document.getElementById("result").style.fontSize = "15px";
        document.getElementById("result").style.marginLeft = "248px";
    } else{
        console.log("NOOO");
        document.getElementById("result").style.color = "white";
        document.getElementById("result").style.fontWeight="bold";
        document.getElementById("result").style.width = "569px";
        document.getElementById("result").style.fontSize = "15px";
        document.getElementById("result").style.marginLeft = "248px";
        document.getElementById("result").style.backgroundColor ="rgb(211, 5, 5)";
        document.getElementById("result").textContent = "Please, type both names"
    }
}