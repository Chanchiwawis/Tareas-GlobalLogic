import { Contents } from "./Content/Contents"
import {SideBar} from "./Content/SideBar"
export const Content = () => {
  return (
    <div className="content">
        <Contents/>
        <SideBar/>
    </div>
  )
}
