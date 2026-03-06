const secretBtn = document.getElementById("secret_button");
const recallBtn = document.getElementById("recall_button");
const nightmodeBtn = document.getElementById("nightmode_button");
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");





recallBtn.addEventListener("click", function () {
    const answer = prompt("Are you Mary Grace? (yes/no)");
    if (answer && answer.toLowerCase() ==="yes"){

        const zodiac = prompt("Prove it, what is your sun rising?");

        if (zodiac && zodiac.toLowerCase() ==="scorpio"){
            alert("Welcome my love!"); 
        }
        else
        {
           alert("Access denied.") 
        }

    } else {
        alert("Access denied");
    }

});

nightmodeBtn.addEventListener("click", function () {
    document.body.classList.toggle("night-mode");
});



tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    // Remove active from all tabs
    tabs.forEach(t => t.classList.remove("active"));

    // Remove active from all content
    contents.forEach(c => c.classList.remove("active"));

    // Activate clicked tab
    tab.classList.add("active");

    // Show corresponding content
    const target = tab.getAttribute("data-tab");
    document.getElementById(target).classList.add("active");
  });
});