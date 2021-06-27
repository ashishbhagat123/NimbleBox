import React, {useState} from 'react'
import { MdDashboard,MdCallToAction,MdInsertEmoticon,MdPerson } from "react-icons/md";
import { GiDramaMasks } from "react-icons/gi";
import Dashboard from "../../Pages/Dashboard/Index"
import Header from './Header/Index'
import SideBar from './SideBar/Index';


const links = [
    {
        name: "All Movies",
        icon: <MdDashboard />,
        href: ""
    },
    {
        name: "Action",
        icon: <MdCallToAction />,
        href: ""
    },
    {
        name: "Comedy",
        icon: <MdInsertEmoticon />,
        href: ""
    },
    {
        name: "Drama",
        icon: <GiDramaMasks />,
        href: ""
    },
    {
        name: "Profile",
        icon: <MdPerson />,
        href: ""
    },
]

const Layout = ({header, pageName, body, sidebar}) => {
    const [width, setWidth] = useState("5");

    //handling with for sidebar and dashboard onclick of expand button in sidebar
    const handleWidth = () => {
        setWidth(() => width === "5"? "15": "5")
    }

    // switching pages 
    const getPage = () => {
        if(body) return body;
        switch(pageName) {
            case "dashboard": return <Dashboard width = {width}/>
            default: return <Dashboard width = {width}/>
        }
    }

    return (
        <div>
                {header && <Header />}
                {sidebar && <SideBar data = {links} handleWidth = {handleWidth} width = {width}/>}
                {getPage()}
        </div>
    )
}

export default Layout
