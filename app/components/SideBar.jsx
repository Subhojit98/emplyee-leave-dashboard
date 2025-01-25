import Logo from "@/app/components/Logo"
import { House, List, CalendarClock, Building, UserCog, LogOut, HelpCircleIcon } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SideBar = () => {
  return (
    <aside className="w-[16%] h-full bg-white">
          <span className="m-3"> <Logo /></span>

          <div>
            <ul className="w-10/12 mx-auto mt-5">
              <li className="flex gap-x-4 p-4 hover:bg-gray-950  hover:text-white hover:rounded-md hover:cursor-pointer"><House /> Home</li>
              <li className="flex gap-x-4 p-4 hover:bg-gray-950 hover:text-white hover:rounded-md hover:cursor-pointer"><List /> Attendance</li>
              <li className="flex gap-x-4 p-4 hover:bg-gray-950 hover:text-white hover:rounded-md hover:cursor-pointer"><CalendarClock /> Leave</li>
              <li className="flex gap-x-4 p-4 hover:bg-gray-950 hover:text-white hover:rounded-md hover:cursor-pointer"><Building /> Company Deatils</li>
              <li className="flex gap-x-4 p-4 hover:bg-gray-950 hover:text-white hover:rounded-md hover:cursor-pointer"><UserCog /> Profile & Settings</li>
            </ul>


            <ul className="w-10/12 mx-auto mt-96">

            <TooltipProvider>
  <Tooltip>
    <TooltipTrigger className="flex gap-x-4 p-3 hover:cursor-pointer"><HelpCircleIcon /> Help
</TooltipTrigger>
    <TooltipContent>
      <p>Under Development</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger className="flex gap-x-4 p-3 hover:cursor-pointer"><LogOut /> Logout
</TooltipTrigger>
    <TooltipContent>
      <p>Under Development</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
            </ul>
          </div>
        </aside>
  )
}

export default SideBar
