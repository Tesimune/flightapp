import CheckIn from "./Flight/CheckIn"
import Flight from "./Flight/Flight"
import FlightOpt from "./Flight/FlightOpt"
import FlightStatus from "./Flight/FlightStatus"

export default function Landing() {
  return (
    <div className="grid h-screen">
      <div className="bg-cover bg-[url('/images/travels.jpeg')] hidden md:block border-b-2 border-blue-800 h-[400px] min-w-full relative">
        <div className="grid gap-2 absolute md:left-36 top-10 text-white">
            <h4 className="text-2xl font-semibold">HELLO</h4>
            <h1 className="text-4xl font-bold">Where do you want to explore?</h1>
        </div>
        <div className="absolute inset-x-0 -bottom-40">
          <div className="grid justify-center items-center">
            <FlightOpt />
            <div>
              <div id="flight" className="">
                <Flight />
              </div>
              <div id="checkin" className="hidden">
                <CheckIn />
              </div>
              <div id="status" className="hidden">
                <FlightStatus />
              </div>
            </div>    
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center md:hidden">
        <span className="font-bold text-xl">Not Mobile friendly</span>
      </div>
    </div>
  )
}
