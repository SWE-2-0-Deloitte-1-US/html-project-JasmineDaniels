let projectLinks = document.querySelectorAll('.project-link');
let projects = document.querySelectorAll('.image-box');
let placeholder = document.querySelector('#placeholder');
let lastEl;

console.log("Projects : ", placeholder)

projectLinks.forEach((link) => {
    link.addEventListener('mouseover', function(){
        if(lastEl != null){
            lastEl.classList.remove('active');
        }
        
        for(let i = 0; i < projects.length; i++){
            if(projects[i].getAttribute('name') == link.getAttribute('id')){
                placeholder.classList.add('none');
                //projects[i].classList.remove('none');
                // add an active class that reveals
                projects[i].classList.toggle('active');
                lastEl = projects[i];
            } 
        }
    })
})



