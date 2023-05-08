function submitQuiz() {
  // Get all the input elements
  const inputs = document.querySelectorAll('input[type="radio"]');
  
  // Initialize the score to 0
  let score = 0;

  // Loop through all the input elements
  inputs.forEach(input => {
    // Add the score for the selected answer to the total score
    if (input.checked) {
      score += parseInt(input.value);
    }
  });

  // Determine the level of depression based on the score
  let result = "";
  if (score <= 5) {
    result = "Relax! it's just a bad phase.";
  } else if (score <= 10) {
    result = "You may be experiencing mild to moderate depression. It's recommended that you seek professional help.";
  } else if (score <= 15) {
    result = "You may be experiencing moderate to severe depression. It's recommended that you seek immediate professional help.";
  } else {
    result = "You may be experiencing severe depression. It's recommended that you seek immediate professional help.";
  }

  // Display the result
  alert(result);
}
