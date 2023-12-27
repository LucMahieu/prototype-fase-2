document.addEventListener('DOMContentLoaded', function() {
  const segmentElement = document.querySelector('.container');
  const submitBtn = segmentElement.querySelector('.submit-btn');
  const submitMessage = segmentElement.querySelector('.submit-message');
  submitBtn.addEventListener('click', function() {
      submitMessage.textContent = "Bedankt voor je feedback!";
      submitMessage.style.display = 'block';

  });
});
