
let employees = [
    {
        Name:"Anthony Morris",
        jobTitle:"Sharepoint Practice Head",
        department:"IT Department",
    },
    {
        Name:"Helen Jimmerman",
        jobTitle:"Operations Manager",
        department:"IT Department"
    },
    {
        Name:"Jonathan Smith",
        jobTitle:"Product Manager",
        department:"IT Department"
    },
    
    {
        Name:"Tami Hopkins",
        jobTitle:"Lead Engineer - Dot Net",
        department:"IT Department"
    },
    {
        Name:"Franklin Humark",
        jobTitle:"Network Engineer",
        department:"IT Department"
    },
    {
        Name:"Angelina Bailey",
        jobTitle:"Talent Magnet Jr.",
        department:"HR Department"
    },
    {
        Name:"Robert Mitchell",
        jobTitle:"Software Engineer",
        department:"IT Department"
    },
    {
        Name:"Olivia Watson",
        jobTitle:"UI Designer",
        department:"UX Department"
    },
    
]
//displays add employee popup when called.
function displayPopup()
{
    const popup = document.querySelector(".popup");  
    if(popup.style.display == "block")
        popup.style.display="none";        
    else
        popup.style.display = "block";
}
//closes the add employee popup.
function closePopup()
{
    document.querySelector(".popup").style.display = "none";
}
function createButtonByAsciiCode(ascii_code)
{
    let button = document.createElement("button");
    button.innerHTML = String.fromCharCode(ascii_code);
    button.setAttribute("class","alpha-button");
    document.getElementById("alphabeticalSearch").appendChild(button);
}
function loadEmployees()
{
    for(let i=0;i<employees.length;i++)
    {
        let card = document.createElement("div");
        let leftDiv = document.createElement("div");
        let rightDiv = document.createElement("div");
        card.className = "employee-card";
        leftDiv.className = "emp-img";
        rightDiv.className = "emp-details";
        
        leftDiv.innerHTML=`<img src='Images/${employees[i].Name.trim().toLowerCase().replace(' ', '-')}.png'>`;
        card.appendChild(leftDiv);
        
        rightDiv.innerHTML = `<h5 class='emp-name'>${employees[i].Name}</h5><p class='emp-jobtitle'>${employees[i].jobTitle}</p><p class='emp-dept'>${employees[i].department}</p><h6 class='extras'>&#xf098;&nbsp &#xf0e0;&nbsp &#xf075;&nbsp &#xf005;&nbsp &#xf004;</h6>`;
        card.appendChild(rightDiv);
        
        
        document.querySelector(".employee-list").appendChild(card);

    }
}