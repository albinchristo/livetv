function fetchEvents() {
  fetch('https://sons-stream.com/api/v1/')
    .then(response => response.json())
    .then(data => {
      console.log('API Data:', data); // Log the entire API response

      if (data.success && data.data && data.data.length > 0) {
        data.data.forEach(event => {
          const eventHtml = createEventHtml(event);
          eventContainer.appendChild(eventHtml);
        });
      } else {
        eventContainer.textContent = 'No upcoming events found.';
      }
    })
    .catch(error => {
      console.error('Error fetching events:', error);
      eventContainer.textContent = 'Error fetching events. Please try again later.';
    });
}
