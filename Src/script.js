document.getElementById("akanform").addEventListener("submit",function(event){   
    event.preventDefault();
    this.style.color = "blue";
    

    const birthdate = document.getElementById("birthdate").value;
    const gender = document.getElementById("gender").value;

    if (!birthdate || !gender) {
        alert("Please enter a valid birthdate and select gender.");
        return;
    }
    const Date= new Date(birthdate);
    if (isNaN(date.getTime())) {
        alert("Please enter a valid date.");
        return;
    }
    const today = new Date();


    const date = new Date(birthdate);
    const dayOfWeek = date.getDay();

    const akanNames = {
        Male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
        Female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
    };

    const akanName = akanNames[gender][dayOfWeek];
    document.getElementById("output") .textContent = `Your Akan name is: ${akanName}`;
    document.getElementById("output").style.color = "Green";

    
});
document.getElementById("resetButton").addEventListener("click", function() {
    document.getElementById("akanform").reset(); 
    document.getElementById("output").textContent = ""; 
});
