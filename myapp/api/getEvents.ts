import { Event } from "@models/Event";

export type GetEventsResponse = {
  result: Event[];
}

export function getEvents(): Promise<GetEventsResponse> {

  return new Promise((resolve) => {
    return resolve({
      "result": [
        {
          "id": 1,
          "title": "Cool event 1",
          "description": "This is the description of cool event 1",
          "date": new Date().toISOString().split("T")[0],
          "time": "10:30AM",
          "price": 100,
          "availableTickets": 45,
          "duration": 60
        },
        {
          "id": 2,
          "title": "Cool event 2",
          "description": "This is the description of cool event 2",
          "date": "10-10-2020",
          "time": "10:30AM",
          "price": 100,
          "availableTickets": 45,
          "duration": 60,
        },
        {
          "id": 3,
          "title": "Cool event 2",
          "description": "This is the description of cool event 2",
          "date": "12-10-2020",
          "time": "10:30AM",
          "price": 100,
          "availableTickets": 45,
          "duration": 60,
        }
      ]
    });
  });
}
