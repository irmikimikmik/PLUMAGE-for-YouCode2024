import Image from "next/image";
import events from "../../public/events.svg";
import React, { useState } from 'react'; // Import useState

export default function CuratedEvents() {
  const [isCollapsed, setIsCollapsed] = useState(false); // Initial state is not collapsed

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed); // Toggle the state between true and false
  };

  return (
    <div className="w-full pt-5">
      <div className="flex justify-between items-center">
      </div>
      {/* Render this div only if isCollapsed is false */}
      {!isCollapsed && (
        <div className="grid grid-cols-3 gap-9 w-max m-auto space-y-3.5">
          <div className="flex justify-center"> {/* Centers the Image horizontally within the grid cell */}
            <Image width="244px" height="244px" src={events} alt="Event 1" />
        </div>
        </div>
      )}
    </div>
  );
}
