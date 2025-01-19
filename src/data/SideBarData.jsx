import { MdDashboard } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { IoIosSettings } from "react-icons/io";
import { FaUsers } from "react-icons/fa";

export const SideBarData = [
    {
        link: "/",
        name: "Home",
        icon: <MdDashboard />,
        // item: [
        //     {
        //         link: "/",
        //         name: "Home",
        //     },
        // ]
    },
    {
        link: "/stumgmt",
        name: "Student Management",
        icon: <PiStudentBold />,
        item: [
            // {
            //     link: "/student",
            //     name: "Student",
            // },
            {
                link: "/studentlisting",
                name: "Student Listing",
            },
        ]
    },
    {
        link: "/usermgmt",
        name: "User Management",
        icon: <FaUsers />,
        item: [
            // {
            //     link: "/user",
            //     name: "User",
            // },
            {
                link: "/userlisting",
                name: "User Listing",
            },
        ]
    },
    {
        link: "/orgmanagement",
        name: "Org Management",
        icon: <FaUsers />,
        item: [
            {
                link: "/orglisting",
                name: "Organization",
            },
            {
                link: "/group",
                name: "Group",
            },
            {
                link: "/department",
                name: "Department",
            },
            {
                link: "/role",
                name: "Role",
            },
        ]
    },

    {
        link: "/settings",
        name: "Settings",
        icon: <IoIosSettings />,
        item: [
            {
                link: "/devicehealth",
                name: "Device Health",
            },
            {
                link: "/themesettings",
                name: "Theme Settings",
            },
            {
                link: "/timezonesetting",
                name: "Time Zone Setting",
            },
        ]
    },
    // {
    //     link: "/logout",
    //     name: "Logout",
    // },
]


