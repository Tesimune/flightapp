import React, { Component } from 'react'
import { GiAirplaneDeparture } from "react-icons/gi"
import { GiAirplaneArrival } from "react-icons/gi"
import { GiSandsOfTime } from "react-icons/gi"


export default class FlightOpt extends Component {
  componentDidMount(){
    const flight = document.querySelector ('#flight');
    const checkin = document.querySelector ('#checkin');
    const status = document.querySelector ('#status');
    const flightBtn = document.querySelector ('#flightBtn');
    const checkinBtn = document.querySelector ('#checkinBtn');
    const statusBtn = document.querySelector ('#statusBtn');
    
      flightBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        flight?.classList.remove('hidden')
        checkin?.classList.add('hidden')
        status?.classList.add('hidden')
      })
  
      checkinBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        checkin?.classList.remove('hidden')
        flight?.classList.add('hidden')
        status?.classList.add('hidden')
      })
  
      statusBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        status?.classList.remove('hidden')
        flight?.classList.add('hidden')
        checkin?.classList.add('hidden')
      })

  }
  render() {
    return (
      <div className="flex justify-start gap-2">
      <button id='flightBtn' className="flex gap-3 justify-center items-center rounded-t font-semibold text-red-500 bg-white p-3">
        <GiAirplaneDeparture className="w-5 h-5" />
        <span>
          Flight
        </span>
      </button>
      <button id='checkinBtn' className="flex gap-3 justify-center items-center rounded-t font-semibold text-gray-500 bg-gray-200 p-3">
        <GiAirplaneArrival className="w-5 h-5" />
        <span>
          Check-in / Manage booking
        </span>
      </button>
      <button id='statusBtn' className="flex gap-3 justify-center items-center rounded-t font-semibold text-gray-500 bg-gray-200 p-3">
        <GiSandsOfTime className="w-5 h-5" />
          <span>
          Flight status
          </span>
      </button>
    </div>
    )
  }
}



 
