import LeaveLogTable from "./components/LeaveLogTable"
import ProfilePannel from "./components/ProfilePannel"
import SideBar from "./components/SideBar"
export default function Home() {
  return (
    <>

      <div className="w-full h-screen bg-slate-100 flex gap-x-4 overflow-hidden">
        <SideBar />
        <div className="w-full">
        <ProfilePannel/>
      <LeaveLogTable/>
        </div>
      </div>

    </>
  )
}
