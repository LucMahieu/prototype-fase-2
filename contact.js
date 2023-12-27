document.addEventListener('DOMContentLoaded', function() {
  const segmentElement = document.querySelector('.container');
  const submitBtn = segmentElement.querySelector('.submit-btn');
  const submitMessage = segmentElement.querySelector('.submit-message');
  submitBtn.addEventListener('click', function() {
      submitMessage.textContent = "Bedankt voor je bericht, we nemen snel contact met je op!";
      submitMessage.style.display = 'block';

  });
});
