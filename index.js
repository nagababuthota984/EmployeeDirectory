
let employeeData = [
    {
        firstName:"Anthony",
        lastName: "Morris",
        preferredName:"anthonymorris",
        jobtitle:"Sharepoint Practice Head",
        department:"IT Department",
        office:"India"
    },
    {
        firstName:"Helen",
        lastName: "Jimmerman",
        preferredName:"helenjimmerman",
        jobtitle:"Operations Manager",
        department:"IT Department",
        office:"India"
    },
    {
        firstName:"Jonathan",
        lastName: "Smith",
        preferredName:"jonathansmith",
        jobtitle:"Product Manager",
        department:"IT Department",
        office:"India"
    },
    {
        firstName:"Tami",
        lastName: "Hopkins",
        preferredName:"tamihopkins",
        jobtitle:"Lead Engineer Dot Net",
        department:"IT Department",
        office:"India"
    },
    {
        firstName:"Franklin",
        lastName: "Humark",
        preferredName:"franklinhumark",
        jobtitle:"Network Engineer",
        department:"IT Department",
        office:"India"
    },
    {
        firstName:"Angelina",
        lastName: "Bailey",
        preferredName:"angelinabailey",
        jobtitle:"Talent Magnet Jr.",
        department:"HR Department",
        office:"India"
    },
    {
        firstName:"Robert",
        lastName: "Mitchell",
        preferredName:"robertmitchell",
        jobtitle:"Software Engineer",
        department:"IT Department",
        office:"India"
    },
    {
        firstName:"Olivia",
        lastName: "Watson",
        preferredName:"oliviawatson",
        jobtitle:"UI Designer",
        department:"UX Department",
        office:"Seattle"
    }
]
let filteredEmployees = [];
let currentActiveButton='';
let generalFilterName = '';
let generalFilterCategory = '';
let searchKeyword='';
let filterByCategory='';
let ids = ["firstName","lastName","email","jobTitle","office","department","phone","skypeId"];
let newIds = ["newFirstName","newLastName","newEmail","newJobTitle","newOffice","newDepartment","newPhone","newSkypeId"];
let offices = [];
let departments = [];
let jobTitles=[];
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
function closeEditPopup()
{
    document.querySelector(".container").style.filter="none";     
    document.querySelector(".add-emp-form").reset();
    document.getElementById("editEmployeeDiv").style.display = "none";
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
        if(generalFilterName!=''&& generalFilterCategory!='')
        {
            if((employee[generalFilterCategory[0].toLowerCase()]).includes(generalFilterName) && (employee.firstName[0].toLowerCase() == currentActiveButton.toLowerCase()))
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
//reset all the filter values
function handlePersonButton()
{
    generalFilterName='';
    generalFilterCategory='';
    filteredEmployees=[];
    colorizePersonButton(); //applies color to the button accordingly.
    colorizeGeneralFilters();
}
function colorizePersonButton()
{
    loadAllEmployees();
    colorizeAllButtons();
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
    colorizePersonButton();
    colorizeAllButtons();
    let btn = document.getElementById(btnID);
    btn.style.borderColor="#01b0fc";
    btn.style.backgroundColor="white";
    btn.style.color="#01b0fc";
    currentActiveButton=btnID.toLowerCase();
}
function colorizeAllButtons()
{
    for(let button of document.getElementsByClassName("alpha-button"))
    {
        button.style.backgroundColor="#01b0fc";
        button.style.color="white";
        button.style.border = "1px solid white";
    }
}
function colorizeGeneralFilters(idToHighlight)
{
    for(let element of document.querySelector(".departments-list").children)
    {
        if(element.id == idToHighlight)
        {
            element.style.backgroundColor="rgb(1, 176, 252,0.4)";
            element.style.borderRadius="4px";
        }
        else
            element.style.backgroundColor="white";
    }
    for(let element of document.querySelector(".offices-list").children)
    {
        if(element.id == idToHighlight)
        {
            element.style.backgroundColor="rgb(1, 176, 252,0.4)";
            element.style.borderRadius="4px";
        }
        else
            element.style.backgroundColor="white";
    }
    for(let element of document.querySelector(".jobtitles-list").children)
    {
        if(element.id == idToHighlight)
        {
            element.style.backgroundColor="rgb(1, 176, 252,0.4)";
            element.style.borderRadius="4px";
        }
        else
            element.style.backgroundColor="white";
    }
    

}
function applyGeneralFilter(filter)
{
    button.style.backgroundColor="#01b0fc";
    button.style.color="white";
    button.style.border = "1px solid white";
    let filterParts = filter.split('-');
    generalFilterCategory = filterParts.slice(-1);
    filterParts.pop();
    colorizeGeneralFilters(filter);
    filter = filterParts.join(" ");
    generalFilterName = filter;
    for(let employee of employeeData)
    {
        if (currentActiveButton!='') {
            if((employee[generalFilterCategory[0].toLowerCase()]).includes(filter) && (employee.firstName[0].toLowerCase() == currentActiveButton))
            {
                if(employee in filteredEmployees)
                {
                    console.log(employee.firstName + " already there")
                }
                filteredEmployees.push(employee);
            }
        }
        else
        {
            if(employee[generalFilterCategory[0].toLowerCase()].includes(filter))
                filteredEmployees.push(employee);
        }
    }
    displayEmployees(filteredEmployees);
    filteredEmployees = [];

    
}
function applySearchFilter()
{
    searchKeyword = document.getElementById("search-input").value;
    filterByCategory = document.getElementById("filter-input").value;
    if(searchKeyword!='')
    {
        for(let employee of employeeData)
        {
            if (currentActiveButton!='' && generalFilterCategory[0]!='' && generalFilterName!='') 
            {
                console.log((employee[filterByCategory].toLowerCase()).includes(searchKeyword.toLowerCase()));
                if((employee[generalFilterCategory[0].toLowerCase()]).includes(generalFilterName) && (employee.firstName[0].toLowerCase() == currentActiveButton) && (employee[filterByCategory].toLowerCase()).includes(searchKeyword.toLowerCase()))
                {
                    filteredEmployees.push(employee);
                }
            }
            else if(generalFilterCategory!='' && generalFilterName!='')
            {
                if (employee[generalFilterCategory[0].toLowerCase()].includes(generalFilterName) && (employee[generalFilterCategory[0].toLowerCase()]).includes(searchKeyword.toLowerCase()))
                {
                    filteredEmployees.push(employee);
                }
            }
            else if(currentActiveButton!='')
            {
                if ((employee.firstName[0].toLowerCase() == currentActiveButton) && (employee[filterByCategory[0].toLowerCase()].includes(searchKeyword.toLowerCase()))) 
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
        filteredEmployees=[];

    }
    else
    {
        applyGeneralFilter(generalFilterName+"-"+generalFilterCategory);
    }
}
function loadFilters()
{
    countFilters();
    let deptDiv = document.querySelector(".departments-list");
    deptDiv.innerHTML='';
    let ofcDiv = document.querySelector(".offices-list");
    ofcDiv.innerHTML='';
    let jobsDiv = document.querySelector(".jobtitles-list");
    jobsDiv.innerHTML='';
    for(let deptName in departments)
    {
        let dept = document.createElement("li");
        dept.id = deptName.replaceAll(/\s/g,'-');
        dept.innerHTML = `<a  onclick=applyGeneralFilter("${deptName.replaceAll(/\s/g,"-")}")>${deptName} (${departments[deptName]})</a>`;
        deptDiv.appendChild(dept);
    }
    for(let ofcName in offices)
    {
        let ofc = document.createElement("li");
        ofc.id=ofcName.replaceAll(/\s/g,'-')+'-office';
        ofc.innerHTML = `<a  onclick=applyGeneralFilter("${ofcName.replaceAll(/\s/g,"-")}-office")>${ofcName} (${offices[ofcName]})</a>`;
        ofcDiv.appendChild(ofc);
    }
    for(let jobName in jobTitles)
    {
        let job = document.createElement("li");        
        job.id = jobName.replaceAll(/\s/g,'-')+"-jobtitle";
        job.innerHTML = `<a  onclick=applyGeneralFilter("${jobName.replaceAll(/\s/g,'-')}-jobtitle")>${jobName} (${jobTitles[jobName]})</a>`;
        jobsDiv.appendChild(job);
    }
}
function countFilters()
{
    for(let employee of employeeData)
    {
        if(employee.department in departments)
        {
            departments[employee.department]+=1;
        }
        else
        {
            departments[employee.department]=1;
        }
        if(employee.office in offices)
        {
            offices[employee.office]+=1;
        }
        else
        {
            offices[employee.office]=1;
        }
        if(employee.jobtitle in jobTitles)
        {
            jobTitles[employee.jobtitle]+=1;
        }
        else
        {
            jobTitles[employee.jobtitle]=1;
        }
    }
}
function addEmployee()
{
    let data = validateEmployeeDetails(ids);
     if(!data[0]) 
    {
        employeeData.push(data[1]);
        if(data[1].department in departments)
            departments[data[1].department] +=1;
        else
            departments[data[1].department] = 1;
        if(data[1].office in offices)
            offices[data[1].office] +=1;
        else
            offices[data[1].office] = 1;
        if(data[1].jobTitle in jobTitles)
            jobTitles[data[1].jobTitle] +=1;
        else
            jobTitles[data[1].jobTitle] = 1;
        loadFilters();
        closePopup();
        displayEmployees(employeeData);
    }
   

}
function openEditForm(employee)
{
    
    const popup = document.getElementById("editEmployeeDiv");
    if(popup.style.display == "block")
     {
        popup.style.display="none";  
        document.querySelector(".container").style.filter="none";     
     }   
    else
    {
        popup.style.display = "block";
        document.getElementById("newFirstName").value=employee.firstName;
        document.getElementById("newLastName").value=employee.lastName;
        document.getElementById("newOffice").value=employee.office;
        document.getElementById("newDepartment").value=employee.department;
        document.getElementById("newEmail").value=employee.email;
        document.getElementById("newPhone").value=employee.phone;
        document.getElementById("newSkypeId").value=employee.skypeId;
        document.getElementById("newJobTitle").value=employee.jobTitle;
        document.querySelector(".container").style.filter="blur(8px)";     
    }
}
function validateEmployeeDetails(ids)
{
    let isErrorOccured=false;
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
        if((id.toLowerCase()).includes("email"))
        {
            
            if(!formData[id].match(emailPattern))
            {
                document.getElementById(id).style.borderColor="red";
                errorMsg.style.display="block";
                isErrorOccured=true;
            }
            else
            {
                document.getElementById(id).style.borderColor="gray";
                errorMsg.style.display="none";
            }
        }
        else if((id.toLowerCase()).includes("phone"))
        {
            if(!formData[id].match(contactNumberPattern))
            {
                document.getElementById(id).style.borderColor="red";
                errorMsg.style.display="block";
                isErrorOccured=true;

            }
            else
            {
                document.getElementById(id).style.borderColor="gray";
                errorMsg.style.display="none";
            }
        }
        else if((id.toLowerCase()).includes("skypeid"))
        {
            if(!formData[id].match(skypeIdPattern))
            {
                document.getElementById(id).style.borderColor="red";
                errorMsg.style.display="block";
                isErrorOccured=true;

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
                isErrorOccured=true;

            }
            else
            {
                document.getElementById(id).style.borderColor="gray";
                errorMsg.style.display="none";
            }
        }
    }
    return [isErrorOccured,formData];
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
        employeeCard.setAttribute("onclick","openEditForm()");
        imageDiv.className = "emp-img";
        imageDiv.innerHTML=`<img src='Images/${employee.firstName.toLowerCase()}-${employee.lastName.toLowerCase()}.png' onerror="this.onerror=null; this.src='/Images/default-dp.png'">`;
        employeeCard.appendChild(imageDiv);
        detailsDiv.className = "emp-details";
        detailsDiv.innerHTML = `<h5 class='emp-name'>${employee.firstName} ${employee.lastName}</h5><p class='emp-jobtitle'>${employee.jobtitle}</p><p class='emp-dept'>${employee.department}</p><h6 class='extras'>&#xf098;&nbsp &#xf0e0;&nbsp &#xf075;&nbsp &#xf005;&nbsp &#xf004;</h6>`;
        employeeCard.appendChild(detailsDiv);
        document.querySelector(".employee-list").appendChild(employeeCard);
    }
}