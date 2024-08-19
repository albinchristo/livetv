const eventContainer = document.getElementById('event-container');

function createEventHtml(event) {
  const eventDiv = document.createElement('div');
  eventDiv.classList.add('event');

  const title = document.createElement('h2');
  title.textContent = event.event_title;
  eventDiv.appendChild(title);

  const start = document.createElement('p');
  start.textContent = `Event Start: ${event.event_start}`;
  eventDiv.appendChild(start);

  const category = document.createElement('p');
  category.textContent = `Category: ${event.category_name}`;
  eventDiv.appendChild(category);

  const league = document.createElement('p');
  league.textContent = `League: ${event.league_name}`;
  eventDiv.appendChild(league);

  const channels = document.createElement('div');
  channels.classList.add('channels');
  // Assuming channel_embeds provides valid HTML for iframes
  channels.innerHTML = event.channel_embeds;
  eventDiv.appendChild(channels);

  return eventDiv;
}

function fetchEvents() {
  fetch('https://sons-stream.com/api/v1/') // Replace with actual API endpoint
    .then(response => response.json())
    .then(data => {
      if (data.success && data.data) {
        data.data.forEach(event => {
          const eventHtml = createEventHtml(event);
          eventContainer.appendChild(eventHtml);
        });
      } else {
        console.error('Error fetching events:', data.error);
        // Handle API errors gracefully (e.g., display an error message)
      }
    })
    .catch(error => {
      console.error('Error fetching events:', error);
      // Handle network errors gracefully (e.g., display an error message)
    });
}

fetchEvents();
