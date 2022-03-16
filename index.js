
let employeeData = [
    {
        firstName:"Anthony",
        lastName: "Morris",
        preferredName:"anthonymorris",
        jobTitle:"Sharepoint Practice Head",
        department:"IT Department",
        office:"India"
    },
    {
        firstName:"Helen",
        lastName: "Jimmerman",
        preferredName:"helenjimmerman",
        jobTitle:"Operations Manager",
        department:"IT Department",
        office:"India"
    },
    {
        firstName:"Jonathan",
        lastName: "Smith",
        preferredName:"jonathansmith",
        jobTitle:"Product Manager",
        department:"IT Department",
        office:"India"
    },
    {
        firstName:"Tami",
        lastName: "Hopkins",
        preferredName:"tamihopkins",
        jobTitle:"Lead Engineer - Dot Net",
        department:"IT Department",
        office:"India"
    },
    {
        firstName:"Franklin",
        lastName: "Humark",
        preferredName:"franklinhumark",
        jobTitle:"Network Engineer",
        department:"IT Department",
        office:"India"
    },
    {
        firstName:"Angelina",
        lastName: "Bailey",
        preferredName:"angelinabailey",
        jobTitle:"Talent Magnet Jr.",
        department:"HR Department",
        office:"India"
    },
    {
        firstName:"Robert",
        lastName: "Mitchell",
        preferredName:"robertmitchell",
        jobTitle:"Software Engineer",
        department:"IT Department",
        office:"India"
    },
    {
        firstName:"Olivia",
        lastName: "Watson",
        preferredName:"oliviawatson",
        jobTitle:"UI Designer",
        department:"UX Department",
        office:"Seattle"
    }
]
let filteredEmployees = [];
let currentActiveButton='';
let advFilterName = '';
let advFilterCategory = '';
let searchKeyword='';
let filterByCategory='';
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
    leftformFields = document.querySelector(".left").children;
    rightformFields = document.querySelector(".right").children;
    for(let element of leftformFields)
    {
        removeErrorMsg(element);
    }
    for(let element of rightformFields)
    {
        removeErrorMsg(element);
    }
}
function removeErrorMsg(element)
{
    element.style.borderColor="gray";
    if(element.id.includes("Error"))
        element.style.display="none";
}
function createButtonByAsciiCode(ascii_code)
{
    let button = document.createElement("button");
    button.innerHTML = String.fromCharCode(ascii_code);
    button.id = String.fromCharCode(ascii_code);
    button.className = "alpha-button";
    button.setAttribute("onclick",`filterEmployeesByAlphabet("${String.fromCharCode(ascii_code)}")`);
    document.getElementById("alphabeticalSearch").appendChild(button);
}
function filterEmployeesByAlphabet(charOnButton)
{
    highlightClickedButton(charOnButton);
    for(const employee of employeeData)
    {
        if(advFilterName!=''&& advFilterCategory!='')
        {
            if((employee[advFilterCategory].toLowerCase()).includes(advFilterName.toLowerCase()) && (employee.firstName[0].toLowerCase() == currentActiveButton.toLowerCase()))
            {
                filteredEmployees.push(employee);
            }
        }
        else 
        {
            if(employee.firstName[0].toLowerCase()==charOnButton.toLowerCase())
            filteredEmployees.push(employee);
        }
    }
    displayEmployees(filteredEmployees);
    filteredEmployees=[];

}
function handlePersonButton()
{
    advFilterName='';
    advFilterCategory='';
    filteredEmployees=[];
    deColourPersonButton();
}
function deColourPersonButton()
{
    loadAllEmployees();
    deColourAllButtons();
    currentActiveButton='';
    
    let btn = document.getElementById("personButton");
    if (btn.style.backgroundColor!="white") {
        btn.style.borderColor="#01b0fc";
        btn.style.backgroundColor="white";
        btn.style.color="#01b0fc";
    }
    else
    {
        button.style.backgroundColor="#01b0fc";
        button.style.color="white";
        button.style.border = "1px solid white";
    }
}
function highlightClickedButton(btnID)
{
    deColourPersonButton();
    deColourAllButtons();
    let btn = document.getElementById(btnID);
    btn.style.borderColor="#01b0fc";
    btn.style.backgroundColor="white";
    btn.style.color="#01b0fc";
    currentActiveButton=btnID.toLowerCase();
}
function deColourAllButtons()
{
    for(let button of document.getElementsByClassName("alpha-button"))
    {
        button.style.backgroundColor="#01b0fc";
        button.style.color="white";
        button.style.border = "1px solid white";
    }
}
function applyAdvFilter(filter)
{
    filteredEmployees=[];
    advFilterName = filter.split('-')[0].toLowerCase();
    advFilterCategory = filter.split('-')[1];
    for(let employee of employeeData)
    {
        if (currentActiveButton!='') {
            if((employee[advFilterCategory].toLowerCase()).includes(advFilterName) && (employee.firstName[0].toLowerCase() == currentActiveButton))
            {
                filteredEmployees.push(employee);
            }
        }
        else
        {
            if(employee[advFilterCategory].toLowerCase().includes(advFilterName.toLowerCase()))
                filteredEmployees.push(employee);
        }
    }
    displayEmployees(filteredEmployees);
    
}
function applySearchFilter()
{
    filteredEmployees=[];
    searchKeyword = document.getElementById("search-input").value;
    filterByCategory = document.getElementById("filter-input").value;
    if(searchKeyword!='')
    {
        for(let employee of employeeData)
        {
            if (currentActiveButton!='' && advFilterCategory!='' && advFilterName!='') 
            {
                if((employee[advFilterCategory].toLowerCase()).includes(advFilterName) && (employee.firstName[0].toLowerCase() == currentActiveButton) && (employee[filterByCategory].toLowerCase()).includes(searchKeyword.toLowerCase()))
                {
                    filteredEmployees.push(employee);
                }
            }
            else if(advFilterCategory!='' && advFilterName!='')
            {
                    if (employee[advFilterCategory].toLowerCase().includes(advFilterName) && (employee[filterByCategory].toLowerCase()).includes(searchKeyword.toLowerCase()))
                    {
                        filteredEmployees.push(employee);
                    }
            }
            else if(currentActiveButton!='')
            {
                if ((employee.firstName[0].toLowerCase() == currentActiveButton) && (employee[filterByCategory].toLowerCase()).includes(searchKeyword.toLowerCase())) 
                {
                    filteredEmployees.push(employee);
                }
            }
            else
            {
                if((employee[filterByCategory].toLowerCase()).includes(searchKeyword.toLowerCase()))
                {
                    filteredEmployees.push(employee);
                }
            }
        }
        displayEmployees(filteredEmployees);
    }
    else
    {
        if(filteredEmployees.length==0)
            loadAllEmployees();
        else
            displayEmployees(filteredEmployees);
    }
}
function loadFilters()
{
    for(let deptName in departments)
    {
        let deptDiv = document.querySelector(".departments-list");
        let dept = document.createElement("li");
        dept.innerHTML = `<a onclick=applyAdvFilter("${deptName}-department")>${deptName} (${departments[deptName]})</a>`;
        deptDiv.appendChild(dept);
    }
    for(let ofcName in offices)
    {
        let ofcDiv = document.querySelector(".offices-list");
        let ofc = document.createElement("li");
        ofc.innerHTML = `<a  onclick=applyAdvFilter("${ofcName}-office")>${ofcName} (${offices[ofcName]})</a>`;
        ofcDiv.appendChild(ofc);
    }
    for(let jobName in jobTitles)
    {
        let jobsDiv = document.querySelector(".jobtitles-list");
        let job = document.createElement("li");
        job.innerHTML = `<a  onclick=applyAdvFilter("${jobName}-jobTitle")>${jobName} (${jobTitles[jobName]})</a>`;
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
function loadAllEmployees()
{
   displayEmployees(employeeData);
}
function displayEmployees(data)
{
    document.querySelector(".employee-list").innerHTML='';
    for(let employee of data)
    {
        let employeeCard = document.createElement("div");
        let imageDiv = document.createElement("div");
        let detailsDiv = document.createElement("div");
        employeeCard.className = "employee-card";
        imageDiv.className = "emp-img";
        imageDiv.innerHTML=`<img src='Images/${employee.firstName.toLowerCase()}-${employee.lastName.toLowerCase()}.png'>`;
        employeeCard.appendChild(imageDiv);
        detailsDiv.className = "emp-details";
        detailsDiv.innerHTML = `<h5 class='emp-name'>${employee.firstName} ${employee.lastName}</h5><p class='emp-jobtitle'>${employee.jobTitle}</p><p class='emp-dept'>${employee.department}</p><h6 class='extras'>&#xf098;&nbsp &#xf0e0;&nbsp &#xf075;&nbsp &#xf005;&nbsp &#xf004;</h6>`;
        employeeCard.appendChild(detailsDiv);
        document.querySelector(".employee-list").appendChild(employeeCard);
    }
}