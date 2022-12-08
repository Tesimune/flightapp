import { MdOutlineLoop } from "react-icons/md"

export default function Flight() {
  return (
    <div className="bg-white p-9 rounded-b rounded-r shadow-2xl w-[900px]">
        <div className="flex justify-between pb-2">
        <div className="flex gap-3">
            <div className="flex gap-2 font-semibold text-gray-800">
            <input type="radio"/>
            <label>Round trip</label>
            </div>
            <div className="flex gap-2 font-semibold text-gray-800">
            <input type="radio"/>
            <label>One way</label>
            </div>
            <div className="flex gap-2 font-semibold text-gray-800">
            <input type="radio"/>
            <label>Multi-city</label>
            </div>
        </div>
        <div className="flex gap-2 font-semibold text-gray-800">
            <input type="checkbox"/>
            <label>Award ticket - Buy a ticket with Miles</label>
        </div>
        </div>
        <div className="flex gap-1 pb-2">
            <div className="flex w-full gap-2 relative">
              <input className="bg-gray-200 p-3 w-full rounded-md outline-none font-bold text-gray-600" type="text" placeholder="FROM" />
              <MdOutlineLoop className="absolute right-48 top-5 border border-black text-gray-600 h-9 w-9 p-1 bg-white rounded-full" />
              <input className="bg-gray-200 p-3 w-full rounded-md outline-none font-bold text-gray-600" type="text" placeholder="TO" />
            </div>
            <input className="bg-gray-200 p-3 rounded-md outline-none font-bold text-gray-600" type="date" />
            <div className="flex gap-3">
                <input className="bg-gray-200 p-3 rounded-md outline-none font-bold text-gray-600" type="text" placeholder="Passengers" />
                <button className="flex bg-red-500 font-semibold p-3 rounded-md text-white">
                  Search flights
                </button>
            </div>
        </div>
        
    </div>
  )
}
