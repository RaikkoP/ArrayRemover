function remove(){
    let jarjend = ['allveelaev', 'sügavas', 'käis', 'linnud', 'vees', 'kollane'];
    let soov = document.getElementById("element").value;
    let i = 0;
    while (i <= jarjend.length-1){
        if(jarjend[i] === soov) {
            jarjend.splice(i,1);
        }
        i+=1;
    }
    document.getElementById('tulemus').innerHTML= `Uueks järjendiks on: ${jarjend}`;
}