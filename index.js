
let employeeData = [
    {
        Name:"Anthony Morris",
        jobTitle:"Sharepoint Practice Head",
        department:"IT Department"
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
    }
]

let jobTitles = {
        SharepointPracticeHead:1,
        OperationsManager:1,
        ProductManager:1,
        LeadEngineerDotNet:1,
        NetworkEngineer:1,
        TalentMangerJr:1,
        SoftwareEngineer:1,
        UIDesigner:1
}
let offices = {
    Seattle:1,
    India:1
}
let departments = {
    IT:6,
    HR:1,
    UX:1
}
//displays add employee popup when called.
function displayPopup()
{
    const popup = document.querySelector(".popup");  
    if(popup.style.display == "block")
     {
        popup.style.display="none";  
        document.querySelector(".container").style.filter="none";     

     }   
    else
    {
        popup.style.display = "block";
        document.querySelector(".container").style.filter="blur(8px)";     
    }
}
//closes the add employee popup.
function closePopup()
{
    document.querySelector(".container").style.filter="none";     
    document.querySelector(".add-emp-form").reset();
    document.querySelector(".popup").style.display = "none";
    let leftFormFields = document.getElementById("left").children;
    for(let element of leftFormFields)
    {
        console.log(element);
        element.style.borderColor="gray";
        getElementById(element.id+"Error").display="none";
    }
}
function createButtonByAsciiCode(ascii_code)
{
    let button = document.createElement("button");
    button.innerHTML = String.fromCharCode(ascii_code);
    button.setAttribute("class","alpha-button");
    document.getElementById("alphabeticalSearch").appendChild(button);
}
function loadFilters()
{
    for(let deptName in departments)
    {
        let deptDiv = document.querySelector(".departments-list");
        let dept = document.createElement("li");
        dept.innerHTML = `<a href="#">${deptName} (${departments[deptName]})</a>`;
        deptDiv.appendChild(dept);
    }
    for(let ofcName in offices)
    {
        let ofcDiv = document.querySelector(".offices-list");
        let ofc = document.createElement("li");
        ofc.innerHTML = `<a href="#">${ofcName} (${offices[ofcName]})</a>`;
        ofcDiv.appendChild(ofc);
    }
    for(let jobName in jobTitles)
    {
        let jobsDiv = document.querySelector(".jobtitles-list");
        let job = document.createElement("li");
        job.innerHTML = `<a href="#">${jobName} (${jobTitles[jobName]})</a>`;
        jobsDiv.appendChild(job);
    }
}
function addEmployee()
{
    validateEmployeeDetails();
}
function validateEmployeeDetails()
{
    let ids = ["fname","lname","email","jobtitle","office","dept","phone","skypeid"];
    let formData = {};
    for(let id of ids)
    {
        formData[id] = document.getElementById(id).value;
    }
    let namePattern = /^[A-Za-z]+$/;
    let emailPattern = /[A-Za-z0-9]*@[A-Za-z]*.[A-Za-z]+$/;
    let skypeIdPattern = /[A-Za-z0-9]+$/;
    let contactNumberPattern = /^[0-9]{10}$/;
    for(let id of ids)
    {
        let errorMsg = document.getElementById(id+"Error");
        if(id==="email")
        {
            if(!formData[id].match(emailPattern))
            {
                document.getElementById(id).style.borderColor="red";
                errorMsg.style.display="block";
            }
            else
            {
                document.getElementById(id).style.borderColor="gray";
                errorMsg.style.display="none";
            }
        }
        else if(id==="phone")
        {
            if(!formData[id].match(contactNumberPattern))
            {
                document.getElementById(id).style.borderColor="red";
                errorMsg.style.display="block";
            }
            else
            {
                document.getElementById(id).style.borderColor="gray";
                errorMsg.style.display="none";
            }
        }
        else if(id==="skypeid")
        {
            if(!formData[id].match(skypeIdPattern))
            {
                document.getElementById(id).style.borderColor="red";
                errorMsg.style.display="block";
            }
            else
            {
                document.getElementById(id).style.borderColor="gray";
                errorMsg.style.display="none";
            }
        }
        else
        {
            if(!formData[id].match(namePattern))
            {
                document.getElementById(id).style.borderColor="red";
                errorMsg.style.display="block";
            }
            else
            {
                document.getElementById(id).style.borderColor="gray";
                errorMsg.style.display="none";
            }
        }
    }
}

function loadEmployees()
{
    for(let employee of employeeData)
    {
        let employeeCard = document.createElement("div");
        let imageDiv = document.createElement("div");
        let detailsDiv = document.createElement("div");
        employeeCard.className = "employee-card";
        imageDiv.className = "emp-img";
        imageDiv.innerHTML=`<img src='Images/${employee.Name.trim().toLowerCase().replace(' ', '-')}.png'>`;
        employeeCard.appendChild(imageDiv);
        detailsDiv.className = "emp-details";
        detailsDiv.innerHTML = `<h5 class='emp-name'>${employee.Name}</h5><p class='emp-jobtitle'>${employee.jobTitle}</p><p class='emp-dept'>${employee.department}</p><h6 class='extras'>&#xf098;&nbsp &#xf0e0;&nbsp &#xf075;&nbsp &#xf005;&nbsp &#xf004;</h6>`;
        employeeCard.appendChild(detailsDiv);
        document.querySelector(".employee-list").appendChild(employeeCard);
    }
}