"use client";

import Button from "@/app/components/Button";
import { Restaurant } from "@/app/restaurant/[slug]/layout";
import { partySize, times } from "@/data";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  restaurant: Restaurant;
}

export default function ReservationCard({ restaurant }: Props) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const filterTimesByRestaurantOpenWindow = () => {
    const timesWithinWindows: typeof times = [];

    let isWithinWindow = false;

    times.forEach((time) => {
      if (time.time === restaurant.open_time) isWithinWindow = true;
      if (isWithinWindow) timesWithinWindows.push(time);
      if (time.time === restaurant.close_time) isWithinWindow = false;
    });

    return timesWithinWindows;
  };

  return (
    <section className="sticky top-0 w-80 rounded bg-white p-3 shadow">
      <h4 className="mb-4 border-b pb-3 text-center text-lg font-bold">
        Make a reservation
      </h4>
      <form className="grid grid-cols-2 gap-4">
        <div className="col-span-2 flex flex-col">
          <label className="text-xs font-bold" htmlFor="partySize">
            Party Size
          </label>
          <select className="border-b py-3 text-sm outline-none" id="partySize">
            {partySize.map((size) => (
              <option value={size.value}>{size.label}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-bold" htmlFor="date">
            Date
          </label>
          <DatePicker
            className="w-full border-b py-3 outline-none"
            id="date"
            selected={selectedDate}
            onChange={setSelectedDate}
            dateFormat="MMMM d"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-bold" htmlFor="time">
            Time
          </label>
          <select className="border-b py-3 outline-none" id="time">
            {filterTimesByRestaurantOpenWindow().map((time) => (
              <option value={time.time}>{time.displayTime}</option>
            ))}
          </select>
        </div>

        <Button className="col-span-2 w-full">Find a time</Button>
      </form>
    </section>
  );
}
