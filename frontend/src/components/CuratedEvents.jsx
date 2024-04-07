import Image from "next/image";
import Event1 from "../../public/event1.png";
import Event2 from "../../public/event2.png";
import Event3 from "../../public/event3.png";
import React, { useState } from 'react'; // Import useState

export default function CuratedEvents() {
  const [isCollapsed, setIsCollapsed] = useState(false); // Initial state is not collapsed

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed); // Toggle the state between true and false
  };

  return (
    <div className="w-full pt-10">
      <div className="flex justify-between items-center">
      </div>
      {/* Render this div only if isCollapsed is false */}
      {!isCollapsed && (
        <div className="grid grid-cols-3 gap-9 w-max m-auto space-y-3.5">
          <div>
            <Image width="244px" height="244px" src={Event1} alt="Event 1" />
          </div>
          <div>
            <Image width="244px" height="244px" src={Event2} alt="Event 2" />
          </div>
          <div>
            <Image width="244px" height="244px" src={Event3} alt="Event 3" />
          </div>
        </div>
      )}
    </div>
  );
}
