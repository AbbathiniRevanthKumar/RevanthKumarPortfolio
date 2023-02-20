let tablinks = document.getElementsByClassName("title-links");
let tabcontents = document.getElementsByClassName("tab-contents");

let opentab = (tabname)=>{
    for(tablink of tablinks)
    {
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}


let sidemenu = document.getElementById("sidemenu");
let open = document.getElementById('open');

let openmenu = ()=>{
    sidemenu.style.right = "0";
    open.style.display = "none";
}

let closemenu = ()=>{
    open.style.display = "block";
    sidemenu.style.right = "-200px";
}