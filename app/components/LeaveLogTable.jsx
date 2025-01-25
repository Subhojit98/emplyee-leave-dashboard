"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Calendar } from "@/components/ui/calendar"
import { eventsList, leaveRecords } from "../data/mockData"
import { useState } from "react"
import ApplyLeaveFrom from "./ApplyLeaveFrom"

const LeaveLogTable = () => {

  const [date, setDate] = useState(new Date())
  return (
    <div className='w-full h-full flex mt-3 gap-x-3'>
    <div className="w-[70%] bg-white rounded-md p-4">
<Tabs defaultValue="Leave" className="w-full m-auto">
  <TabsList className="flex justify-around">
    <TabsTrigger value="Attendence" className="text-lg">Attendance Log</TabsTrigger>
    <TabsTrigger value="Leave" className="text-lg">Leave Log</TabsTrigger>
  </TabsList>

{/* attendence content */}

  <TabsContent value="Attendence" className="text-center text-red-500">Yet To be developted !</TabsContent>

  <TabsContent value="Leave">
    
    {/* From for leave -> */}
   <ApplyLeaveFrom/>

<Table className="w-full border round mt-4">
  <TableHeader>
    <TableRow>
      <TableHead>Leave Type</TableHead>
      <TableHead>From</TableHead>
      <TableHead >To</TableHead>
      <TableHead >Reason</TableHead>
      <TableHead >Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {
      leaveRecords.map((data,i)=>{
        const {leaveType,fromDate,toDate,reason,status} = data
      return <TableRow key={i}>
      <TableCell className="font-medium">{leaveType}</TableCell>
      <TableCell className="text-neutral-600">{fromDate}</TableCell>
      <TableCell className="text-neutral-600">{toDate}</TableCell>
      <TableCell className="text-neutral-600">{reason}</TableCell>
      <TableCell className={`${
        status === "Approved" ?
        "text-green-600" :
        status === "Rejected" ?
        "text-red-600" :
        status === "Pending" ?
        "text-blue-600" :
         ""
        }`}>{status}</TableCell>
    </TableRow>
      })
    }
  </TableBody>
</Table>
  </TabsContent>

  <span className="float-right m-5 underline cursor-pointer">View More</span>
</Tabs>


</div>

{/* Calender and events -> */}

    <div className="w-[30%] h-full bg-white rounded-md">
    <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    modifiers={{
    past: { before: new Date() }
  }}
  modifiersClassNames={{
    past: "text-gray-400 pointer-events-none"
  }}
  />

<div className="mt-5 w-full px-6">

<div className="flex justify-between mt-10 mb-3">
    <h2>Upcoing Holidays</h2>
    <span className="underline cursor-pointer text-sm">View All</span>

</div>

    <ul className="text-sm">
   {
      eventsList.map((data,i)=>{
        const {day,eventType} = data
        return <li key={i} className="flex justify-between py-4">
        <span>{day}</span>
        <span className="text-neutral-500">{eventType}</span>
    </li>
      })
   }
    </ul>
</div>

</div>
    </div>
  )
}

export default LeaveLogTable
