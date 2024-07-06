import Link from "next/link";
import React from "react";

const EventCard = ({ event }) => {
  return (
    <div className="flex mx-20">
      <Link
        href={"/events/" + event.id}
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div className="container h-32 w-32 m-0 p-0">
          <img
            className="object-cover max-h-full rounded-t-lg h-32 rounded-none md:rounded-s-lg"
            src={event.img}
            alt="event related image"
          />
        </div>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {event.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {event.desc}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
