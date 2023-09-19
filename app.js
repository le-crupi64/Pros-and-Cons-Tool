
(function(app){
    'use strict';
    const pros={};
    const cons={};
    let pCount=0;
    let cCount=0;


    app.startUp = function(){

        const prosForm = document.getElementById('prosForm');
        const consForm = document.getElementById('consForm');

        pros.list=document.getElementById('prosList');
        pros.input=prosForm.querySelector('#prosInput');
        pros.submit=prosForm.querySelector('#prosSubmit');


        cons.list=document.getElementById('consList');
        cons.input=consForm.querySelector('#consInput');
        cons.submit=consForm.querySelector('#consSubmit');

        pros.submit.addEventListener('click', addPro);
        cons.submit.addEventListener('click', addCon);

        return chartData;
    };

    function addPro(e){ 
        e.preventDefault();

        const li = document.createElement('li');
        li.innerText = pros.input.value;
        pros.list.appendChild(li);
        pros.input.value='';
        pCount= pCount+1;
        document.getElementById('prosCount').innerHTML=pCount;
        

    }

    function addCon(e){
        e.preventDefault();

        const li = document.createElement('li');
        li.innerText = cons.input.value;
        cons.list.appendChild(li);
        cons.input.value='';
        cCount+=1;
        document.getElementById('consCount').innerHTML=cCount;

    }

})(window.app=window.app ||{});