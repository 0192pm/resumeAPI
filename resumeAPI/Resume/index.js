document.addEventListener('DOMContentLoaded', async (event) => {
  // Declare API
  const apiURL = "https://keisharesume.azurewebsites.net/api/visitorCounter?code=p365cTEUecz6OzW44wfa8WtVB5RvBOZ9tDMoaGGbHRJ9AzFuE2TygQ==";
  console.log('DOM content loaded!');

  try {
    const result = await fetch(apiURL); // Fetch data
    if (!result.ok) {
      throw new Error('Network response was not ok');
    }

    const apiResponse = await result.json(); // Parse JSON
    console.log(apiResponse);

    // Update the visitor count in the HTML
    const visitorCountElement = document.getElementById('visitor-count');
    if (visitorCountElement) {
      visitorCountElement.innerHTML = JSON.stringify(apiResponse);
    } else {
      console.error('Visitor count element not found.');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});



// Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;

    // Check if the panel is open
    var isPanelOpen = panel.style.maxHeight && panel.style.maxHeight !== "0px";

    // Close all panels
    for (var j = 0; j < acc.length; j++) {
      acc[j].classList.remove("active");
      acc[j].nextElementSibling.style.maxHeight = null;
    }

    // If the panel was closed or partially open, open it
    if (!isPanelOpen) {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
