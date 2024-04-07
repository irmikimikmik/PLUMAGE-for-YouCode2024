import Image from "next/image";
import Event1 from "../../public/event1.png";
import Event2 from "../../public/event2.png";
import Event3 from "../../public/event3.png";

export default function Events() {
  return (
    <div className="h-96 w-full pt-11 space-y-3.5">
      <h2>Curated events</h2>
      <hr></hr>
      <div className="grid grid-cols-3 gap-9 w-max m-auto">
        <div className="">
          <Image width="244px" height="244px" src={Event1} />
        </div>
        <div>
          <Image width="244px" height="244px" src={Event2} />
        </div>
        <div>
          <Image width="244px" height="244px" src={Event3} />
        </div>
      </div>
    </div>
  );
}
