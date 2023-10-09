/*---------------------start content----------------------*/

//select Elements
let notificationIcon = document.getElementById("notification");
let notificationsInfo = document.querySelector(".content .second .notifications-info");
let currentYear = document.querySelectorAll(".current-year");
let selectProjectsIcon = document.querySelector(".content .projects-head .select-icon");
let projectsCategoeries = document.querySelector(".content .projects-head .projects-filter");
let projectsLi = Array.from(projectsCategoeries.children);
let projectsTableBody = document.querySelector(".content .projects-table tbody");
let projects = Array.from(document.querySelectorAll(".content .projects-table tbody tr"));
let offcanvasBody = document.querySelector("#sidebarOffcanvas .offcanvas-body");
let sidebar = document.querySelector(".sidebar");

//remove notification red circle if the user saw it 
window.localStorage.getItem("notification") && notificationIcon.lastElementChild.remove();


//toggle the notifications box by clicking on bell icon
notificationIcon.onclick = (e)=>{

    e.stopPropagation();

    notificationsInfo.classList.toggle("show");
    
    //remove notification red circle
    notificationIcon.lastElementChild.tagName === "SPAN" && notificationIcon.lastElementChild.remove();

    //add "seen" in local storage
    window.localStorage.setItem("notification","seen");
};


//remove notifications box by clicking anywhere
document.addEventListener("click",(e)=>{

    if(e.target !== notificationIcon){
        notificationsInfo.classList.remove("show");

    }

});

//get current year
currentYear.forEach(el => el.innerHTML = new Date().getFullYear());

//show projects selection
selectProjectsIcon.onclick = () => projectsCategoeries.classList.toggle("show");

//filter projects
projectsLi.forEach(li =>{

    //hide projects categoeries box
    li.onclick = () => {
        projectsCategoeries.classList.remove("show");

        projectsTableBody.innerHTML = "";
        
        let newArr = projects.filter(el => li.hasAttribute("data-cat") ? el.dataset.cat === li.dataset.cat : el);

        for(let i = 0; i < newArr.length; i++){

           projectsTableBody.appendChild(newArr[i]);
        }

    };


    
});

//add sidebar to offcanvas from medium screens
if(window.innerWidth <= 992){

    offcanvasBody.appendChild(sidebar);
}

/*---------------------end content----------------------*/



