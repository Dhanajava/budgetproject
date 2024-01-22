
var plusincome=0;
var incomes=[];

document.querySelector(".incbtn").addEventListener('click',function(){
    var incdiscription=document.querySelector(".income_discription").value
    var incvalue=document.querySelector(".incomevalue").value;
    plusincome+=parseInt(incvalue);
    let totalLength =incomes.length+1
if(parseInt(incvalue)){
       var currentincome = `${incdiscription}${incdiscription ? '   :':""}    ${incvalue}`;
           incomes.push(currentincome);
       var close=`<i class='close ${totalLength-1} fa-regular fa-circle-xmark'></i>`;
       var incometag=`<p class='incomeParent-${totalLength-1} inputincome'>${totalLength} --- <span class='del-${totalLength-1} incomedisc'>${currentincome}</span>${close} </p>`;
    document.querySelector(".incomeDisplay").innerHTML+=incometag; 
    document.querySelector(".downinc").textContent=plusincome;
    document.querySelector(".Total").textContent=plusincome;
    document.querySelector(".income_discription").value = "";
    document.querySelector(".incomevalue").value="";
    
}
    else alert("Please enter income value!!!")
            }); 

var plusexp=0;
var expen=[];
 document.querySelector(".expbtn").addEventListener('click',function(){
 var expdiscription=document.querySelector(".exp_discription").value;
 var expvalue=document.querySelector(".expvalue").value;
     plusexp+=parseInt(expvalue);
     let totalLength = document.querySelectorAll('.expenParent').length+1
if(parseInt(expvalue)){
            var currentexpences = `${expdiscription}${expdiscription ? '   :':""}    ${expvalue}`;
            expen.push(currentexpences);
            var close=`<i class='clos ${totalLength-1} fa-regular fa-circle-xmark'></i>`;
            var expencestag=`<p class='expenParent-${totalLength-1} inputexpns'>${totalLength} --- <span class='dell-${totalLength-1} expndisc'>${currentexpences}</span>${close} </p>` ;
            document.querySelector(".expencesDisplay").innerHTML+=expencestag;
     document.querySelector(".downexp ").textContent=plusexp;
    console.log("percent tag",{tag: document.querySelector(".percent")});
    document.querySelector(".percent").textContent=getpercentage();
    document.querySelector(".Total").textContent=plusexp-plusincome;
    document.querySelector(".exp_discription").value = "";
    document.querySelector(".expvalue").value = "";
}
    else alert("Please enter expences value!!!")
            });


document.body.addEventListener('click', function (e) {
    if(e.target.classList[0] === "close"){
        let currentClass = parseInt(e.target.classList[1])
        incomes.splice(currentClass,1)
         var dele=document.querySelector(`.del-${currentClass}`).textContent;
        e.target.parentElement.remove();
       plusincome-=dele;
        
        var delint=parseInt(dele);
        var totalinc= document.querySelector(".downinc");
        var inc=totalinc.textContent 
        var incint=parseInt(inc);
        var intminus=incint-delint;
        totalinc.textContent=intminus;
        document.querySelector(".Total").textContent=intminus-(parseInt(document.querySelector(".downexp").textContent) ||0);
        
    }
    
expences(e);
});


function expences (j) {
    if(j.target.classList[0] === "clos"){
        let currentClass = parseInt(j.target.classList[1])
        expen.splice(currentClass,1)
        var dell=document.querySelector(`.dell-${currentClass}`).textContent;
        j.target.parentElement.remove();
        
    plusexp-=dell;
        
       var delexp=parseInt(dell);
       var totalexp= document.querySelector(".downexp");
       var exp=totalexp.textContent 
       var expint=parseInt(exp);
       var expminus=expint-delexp;
       totalexp.textContent=expminus;
        var intminus= document.querySelector(".downinc");
    document.querySelector(".Total").textContent=((expminus-intminus)||plusincome);
        
        
        
        document.querySelector('.percent').textContent=getpercentage();
        
    }  
}

function getpercentage(){
    var percentinc=parseInt(document.querySelector(".downinc").textContent)||0;
    var percentexp=parseInt(document.querySelector(".downexp").textContent)||0;
    var percentage=Math.round((percentexp/percentinc)*100);
    return percentage;
}






//function percentage(num, per)
//{
//  return (num/100)*per;
//}
//          
//console.log(percentage(1000, 47.12));
//
















        
        
        
        
        