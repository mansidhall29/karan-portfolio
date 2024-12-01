const CALENDAR_CONFIG = {
  apiKey: process.env.REACT_APP_GOOGLE_CALENDAR_API_KEY,
  calendarId: process.env.REACT_APP_CALENDAR_ID,
};

export const getCalendarEvents = async () => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_CONFIG.calendarId}/events?` +
        new URLSearchParams({
          key: CALENDAR_CONFIG.apiKey,
          timeMin: new Date().toISOString(),
          maxResults: 10,
          singleEvents: true,
          orderBy: "startTime",
        })
    );

    const data = await response.json();

    if (!data.items) {
      return [];
    }

    return data.items.map((event) => {
      let eventDetails = {
        bandName: event.summary || "TBA",
        venue: "TBA",
        image: "/default-show-image.jpg",
        description: "No description available",
      };

      if (event.description) {
        const [bandName, venue, imageUrl, ...descParts] = event.description
          .split("|")
          .map((s) => s.trim());

        eventDetails = {
          bandName: bandName || event.summary,
          venue: venue || "TBA",
          image: imageUrl || "/default-show-image.jpg",
          description: descParts.join(" ") || "No description available",
        };
      }
      console.log(eventDetails);

      return {
        ...eventDetails,
        date: event.start.dateTime
          ? new Date(event.start.dateTime).toISOString().split("T")[0]
          : new Date(event.start.date).toISOString().split("T")[0],
        time: event.start.dateTime
          ? new Date(event.start.dateTime).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })
          : "00:00",
      };
    });
  } catch (error) {
    console.error("Error fetching calendar events:", error);
    return [];
  }
};
