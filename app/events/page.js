import React from "react";
import EventForm from "../components/eventform";
import EventList from "../components/eventlist";

const Page = async () => {
  const response = await fetch("http://localhost:3000//api/hello", {
    cache: "no-store",
  });
  const responseData = await response.json();
  return (
    <div className="flex h-screen">
      <section className="add-event-section w-[50vw] flex items-center justify-center overflow-y-auto">
        <EventForm />
      </section>
      <div className="w-[2px] bg-white"></div>
      <section className="events-list-section w-[50vw] flex flex-col items-center justify-center overflow-y-auto">
        <EventList events={responseData}/>
      </section>
    </div>
  );
};

export default Page;
