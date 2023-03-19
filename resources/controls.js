let currentExpanded = 'p1-div';


function changeName(pDiv)
{ 
    //example - p2-p
    let pName = pDiv.split('-');
    return pName[0] + '-div';

}

function changeNameToP(p)
{ 
    //example - p2-div
    let pName = p.split('-');
    return pName[0] + '-p';

}


function toogleExpansion(event) {
    let id = event.target.id;
    let divTarget = changeName(id);
    const divElement = document.getElementById(divTarget);
    
     
 
    

    if (event.target.innerHTML === '(Expand)'){
        
       
        divElement.style.maxHeight = '100vh';
       
        event.target.innerHTML = '(Collapse)';
        
    }
    else if (event.target.innerHTML === '(Collapse)') {
       
        divElement.style.maxHeight = 0;
        event.target.innerHTML = '(Expand)';
    } else {
        alert('Error, cannot decided whether to expand or collapse');
    }
    





}


function projectsDivClickedListeners(projectDiv)
{
    
    projectDiv.addEventListener('click', toogleExpansion);
}



let listOfProjects = document.getElementsByClassName('project-p');
let listArray = Array.from(listOfProjects);


listArray.forEach(projectsDivClickedListeners);

