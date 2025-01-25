"use client"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CalendarIcon, Info, X } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const ApplyLeaveFrom = () => {

  const [isClicked,setIsClicked] = useState(false)
  const [date,setDate] = useState(new Date())

  const handleCancel = ()=>{
    setIsClicked(false)
  }
  return (
    <>
     <div className="flex justify-between mx-4 mt-5">
             <h1 className="text-xl">Leave Log</h1>
             <Button variant={"outline"} onClick = {()=> setIsClicked(true)}>Apply Leave</Button>
         </div>

    {isClicked && <div
    style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }} 
     className="w-full h-screen fixed top-0 left-0 z-40 flex justify-center items-center">
      <div className="w-1/2 h-[75%] bg-white border rounded-md p-5 opacity-100">
     
     <div className="flex w-full justify-between px-5 mb-5 text-2xl">
      <h1>Apply Leave</h1>
      <button onClick={handleCancel}><X className="w-8 h-8"/></button>
     </div>

{/* from from here -> */}

<div className="flex w-full h-full">

<div className="w-full h-[90%] p-4">
  <form className="flex flex-col gap-6 mt-5">

    <div>
      <label htmlFor="leave" className="text-lg">Leave Type *</label>
      <Select>
  <SelectTrigger className="w-72 mt-2">
    <SelectValue placeholder="Select Leave" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="Sick Leave">Sick Leave</SelectItem>
    <SelectItem value="Casual Leave">Casual Leave</SelectItem>
    <SelectItem value="Annual Leave">Annual Leave</SelectItem>
    <SelectItem value="Paternity Leave<">Paternity Leave</SelectItem>
  </SelectContent>
</Select>
    </div>
    <div>
      <label htmlFor="leave" className="text-lg">Start Date *</label>
    <Popover>
        <br />

      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className="w-72 inline-flex justify-between items-center mt-2"
        >
         DD / MM / YYYY
          <CalendarIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
    <RadioGroup className="flex gap-x-10 text-sm mt-5">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" />
    <label htmlFor="first-half">First Half</label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" />
    <label htmlFor="second-half">Second Half</label>
  </div>
</RadioGroup>

    </div>
    <div>
      <label htmlFor="leave" className="text-lg">End Date *</label>
    <Popover>
        <br />

      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className="w-72 inline-flex justify-between items-center mt-2"
        >
         DD / MM / YYYY
          <CalendarIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
    </div>

    <div>
      <label htmlFor="reason" className="text-lg">Reason *</label>
<br />
<textarea 
  placeholder="Type Here" 
  className="border border-s-slate-300 outline-none w-72 min-h-[120px] p-3 rounded-md resize-none mt-2">
</textarea>

</div>

<label htmlFor="uploadFile1"
      className="flex text-blue-500 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 mr-2 fill-blue-500 inline" viewBox="0 0 32 32">
        <path
          d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
          data-original="#000000" />
        <path
          d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
          data-original="#000000" />
      </svg>
      Upload document
      <input type="file" id='uploadFile1' className="hidden" />
    </label>
  </form>
</div>


<div className="w-full h-[90%] relative">


<div className="w-11/12 m-auto border h-52 mt-2 rounded-md p-4 px-6">

<h2 className="text-xl mb-2">Available Leaves (Yearly)</h2>
<hr className="h-[2px] bg-slate-200"/>

<ul className="mt-4 flex flex-col gap-5">
  <li className="inline-flex justify-between">Casual Leave <span>12</span></li>
  <li className="inline-flex justify-between">Sick Leave <span>12</span></li>
  <li className="inline-flex justify-between">LOP <span>--</span></li>
</ul>
</div>

<p className="text-sm text-center inline-flex gap-x-3 items-center m-4">
<Info className="w-4 h-4"/>

Pending and approved leaves can be edited within 7 days
</p>

<div className="inline-flex gap-x-3 right-2 absolute bottom-0">
  <Button variant="outline" onClick={handleCancel}>Cancel</Button>
<Button variant="" onClick={handleCancel}>Apply Leave</Button>
</div>
</div>

</div>

    </div>
    </div>}
    </>
  )
}

export default ApplyLeaveFrom
