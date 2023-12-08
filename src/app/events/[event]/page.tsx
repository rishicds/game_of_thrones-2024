import { SectionHeader } from "@/components";
import events from "@/utils/events";

import { constructMetaData } from "@/utils/metadata";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = constructMetaData({
  title: "Events | GOT RCCIIT",
});

type Params = {
  params: {
    event: string;
  };
};
const fetchEvent = (eventdata: any) => {
  const eventObj = events.find(
    (event) => event.title.toLowerCase() === eventdata.toLowerCase(),
  );
  return eventObj;
};
const page = ({ params: { event } }: Params) => {
  const eventTitle = decodeURIComponent(event);
  const eventObj = fetchEvent(eventTitle);
  return (
    <div className="mt-[100px] flex flex-col  justify-center gap-8 px-3 md:px-10">
      <SectionHeader text={eventTitle} />
      <div className="flex flex-row flex-wrap-reverse items-center justify-between gap-8">
        <div className="flex flex-col gap-8 font-got text-xl font-semibold md:text-2xl">
          <h1>
            Registration Fees :{" "}
            <span className="font-sans font-medium">
              {eventObj?.regFees == ""
                ? "Yet to be Announced"
                : eventObj?.regFees}
            </span>
          </h1>
          <h1>
            Prize :{" "}
            <span className="font-sans font-medium">
              {eventObj?.prize == "" ? "Yet to be Announced" : eventObj?.prize}
            </span>
          </h1>
          <h1>
            Venue :{" "}
            <span className="font-sans font-medium">
              {eventObj?.venue == "" ? "Yet to be Announced" : eventObj?.venue}
            </span>
          </h1>
          <h1>
            Date :{" "}
            <span className="font-sans font-medium">
              {eventObj?.date == "" ? "Yet to be Announced" : eventObj?.date}
            </span>
          </h1>
        </div>
        <Image
          src={eventObj!.hoverImage}
          width={0}
          height={0}
          className="w-[800px] rounded-lg md:h-[400px]"
          alt={eventTitle}
        />
      </div>
      <h1 className="font-got text-2xl font-semibold">Rules :</h1>
      <div
        className="text-start bg-[#252525] px-10 py-5 rounded-2xl border-t-2 border-b-2"
        dangerouslySetInnerHTML={{ __html: eventObj!.rules }}
      ></div>
    </div>
  );
};

export default page;
