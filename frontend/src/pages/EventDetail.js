import { redirect, useRouteLoaderData } from "react-router-dom";

import EventItem from "../components/EventItem";

export default function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");

  return <EventItem event={data.event} />;
}

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw new Response(
      JSON.parse({ message: "Could not fetch details for selected event." }),
      { status: 500 }
    );
  }

  const data = await response.json();
  return data;
}

export async function action({ request, params }) {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Response(JSON.parse({ message: "Could not delete event." }), {
      status: 500,
    });
  }

  return redirect("/events");
}
