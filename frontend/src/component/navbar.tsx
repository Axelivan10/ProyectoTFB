import React, { useEffect, useState } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Card,
    IconButton,
} from "@material-tailwind/react";
import {
    CubeTransparentIcon,
    UserCircleIcon,
    CodeBracketSquareIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
    Bars2Icon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

// profile menu component
const profileMenuItems = [
    {
        label: "My Profile",
        icon: UserCircleIcon,
    },
    {
        label: "Edit Profile",
        icon: Cog6ToothIcon,
    },
    {
        label: "Inbox",
        icon: InboxArrowDownIcon,
    },
    {
        label: "Help",
        icon: LifebuoyIcon,
    },
    {
        label: "Sign Out",
        icon: PowerIcon,
    },
];

function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="tania andrew"
                        className="border border-gray-900 p-0.5"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                            }`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="p-1">
                {profileMenuItems.map(({ label, icon }, key) => {
                    const isLastItem = key === profileMenuItems.length - 1;
                    return (
                        <MenuItem
                            key={label}
                            onClick={closeMenu}
                            className={`flex items-center gap-2 rounded ${isLastItem
                                ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                : ""
                                }`}
                        >
                            {React.createElement(icon, {
                                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                                strokeWidth: 2,
                            })}
                            <Typography
                                as="span"
                                variant="small"
                                className="font-normal"
                                color={isLastItem ? "red" : "inherit"}
                            >
                                {label}
                            </Typography>
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
}

function NavList() {
    return (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
            {navListItems.map(({ label, icon, to }, key) => (
                <Link to={to}>
                    <Typography 
                    key={label}
                    variant="small"
                    color="gray"
                    className="font-medium text-blue-gray-500">
<MenuItem className="flex items-center gap-2 lg:rounded-full">
                        {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
                        <span className="text-gray-900"> {label}</span>
                    </MenuItem>
                    </Typography>
                    
                </Link>
            ))}
        </ul>
    );
}

// nav list component
const navListItems = [
    {
        label: "Sistemas",
        icon: UserCircleIcon,
        to: "/login"
    },
    {
        label: "Responsivas",
        icon: CubeTransparentIcon,
        to: "/responsiva"
    },
    {
        label: "Usuarios",
        icon: CodeBracketSquareIcon,
        to: "/login"
    },
    {
        label: "Registros",
        icon: UserCircleIcon,
        to: "/addUser"
    },
    {
        label: "Configuración",
        icon: CubeTransparentIcon,
        to: "/login"
    },
    {
        label: "Otro",
        icon: CodeBracketSquareIcon,
        to: "/login"
    },
];

export function ComplexNavbar() {
    const [isNavOpen, setIsNavOpen] = React.useState(false);

    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setIsNavOpen(false),
        );
    }, []);

    return (
        <div className="pt-4">
            <Navbar className="mx-auto max-w-screen-xl p-4 lg:rounded-full">
                <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 ml-2 cursor-pointer py-1.5 font-semibold"
                    >
                        The Fives
                    </Typography>
                    <div className="hidden lg:block">
                        <NavList />
                    </div>
                    <IconButton
                        size="sm"
                        color="blue-gray"
                        variant="text"
                        onClick={toggleIsNavOpen}
                        className="ml-auto mr-2 lg:hidden"
                    >
                        <Bars2Icon className="h-6 w-6" />
                    </IconButton>

                    <div className="flex">
                        <Button size="sm" variant="text">
                            <span>Log In</span>
                        </Button>
                        <ProfileMenu />
                    </div>
                </div>
                <MobileNav open={isNavOpen} className="overflow-scroll">
                    <NavList />
                </MobileNav>
            </Navbar>
        </div>
    );
}


export default ComplexNavbar
