import Announces from "./Announces"
import { TopBar } from "./TopBar/topBar"
import Welcome from "./Welcome/welcome"
import Course from "./classroom"
import Business from "./Business/main-business"
import History from "./History/history"
import "element-theme-default"

export default function Page() {
    return (
        <div>
            <TopBar/>
            <Welcome/>
            <Announces/>
            <Course/>
            <Business/>
            <History />
        </div>
    )
}