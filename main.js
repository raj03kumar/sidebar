// Get elements from the DOM
const links=document.querySelectorAll(".sidebar .navigation li a");
const tooltip=document.querySelector(".cursor-tooltip");

// Loop through list elements
links.forEach(link=>{
    // Get last span from each link
    const linkText=link.querySelectorAll("span")[1];

    // Add mouseover event to list element
    link.addEventListener("mouseover", e=>{
        //Get x coordinate
        const x=e.clientX;
        //Get y coordinate
        const y=e.clientY;
        //Reveal tooltip
        tooltip.style.display="block";
        //Set tooltip inner HTML to hovered link text
        tooltip.innerHTML=linkText.innerHTML;
        //Position tooltip next to cursor
        tooltip.style.left=x+20+"px";
        tooltip.style.top=y+"px";
    });
    //Add a mouseout event
    link.addEventListener("mouseout", ()=>{
        //Hide tooltip
        tooltip.style.display="none";
    });
});

// disabling inspect element
document.addEventListener("contextmenu", function(e){
    e.preventDefault(); //this prevents right click
});
document.onkeydown=function(e){
    if(event.keycode==123){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="I".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="C".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="J".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="U".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="S".charCodeAt(0)){
        return false;
    }
};