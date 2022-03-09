// let departments = {
//     IT:21,
//     HumanResources:2,
//     MD:1,
//     Sales:4
// }
// let offices = {
//     Seattle:1,
//     India:1
// }

function displayPopup()
{
    const popup = document.querySelector(".popup");
    if(popup.style.display != "block")
        popup.style.display = "block";
    else
        popup.style.display="none";        
}
function closePopup()
{
    document.querySelector(".popup").style.display = "none";
}