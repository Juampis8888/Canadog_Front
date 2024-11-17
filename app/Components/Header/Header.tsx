"use client"

import React from "react";
import { useRouter } from 'next/navigation';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Image} from "@nextui-org/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useRouter();

  const donationNavigation = (path: string) => {
    console.log(window.location.href)
    router.push(path);
  };
    
  const menuItems = [
    { name: "Adopciones", action: () => donationNavigation('/#adopciones') },
    { name: "Tienda Gora", url: "https://gorafundacion.org" },
    { name: "Contáctanos", url: "#contactanos" },
    { name: "Ayudanos", action: () => donationNavigation('/Home/Donations') }, 
  ];

    
  return (
    <div>
        <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-greenGora justify-between md:py-4">
            <NavbarContent>
                <NavbarBrand>
                    <Link href="/" className="flex items-center">
                        <Image src="/LogoGora.png" width="140" height="40" alt="Logo Gora"/>
                    </Link>
                </NavbarBrand>
                
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="lg:hidden text-OrangeLightGora"
                />
            </NavbarContent>
            {/* menu web */}
            <NavbarContent className="hidden lg:flex gap-8" justify="start">
                <NavbarItem>
                    <Link 
                        className="text-lg text-pinkLightGora hover:text-orangeGora hover:underline hover:underline-offset-8" 
                        onClick={() =>
                            {
                                window.location.pathname === "/Home/Donations" ? router.push('/#adopciones') : router.push('/#adopciones')
                            }
                        }>
                        Adopciones
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link className="text-lg text-pinkLightGora hover:text-orangeGora hover:underline hover:underline-offset-8" href="https://gorafundacion.org">
                        Tienda Gora
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-lg text-pinkLightGora hover:text-orangeGora hover:underline hover:underline-offset-8" href="#">
                        Contáctanos
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    {/* Redirección a Donations usando onClick y router */}
                    <Link 
                        className="text-lg text-pinkLightGora hover:text-orangeGora hover:underline hover:underline-offset-8" 
                        onClick={() => { 
                                console.log(window.location.pathname) 
                                router.push('/Home/Donations')
                        }} 
                        style={{ cursor: 'pointer' }}>
                        Ayudanos
                    </Link>
                </NavbarItem>
            </NavbarContent>
            {/* menu cel */}
            <NavbarMenu>
                {menuItems.map((item, index) => (
                <NavbarMenuItem key={`${item.name}-${index}`} className="mt-4">
                    {item.url ? (
                        <Link
                            className="flex justify-center py-2 w-full text-4xl text-greenGora hover:text-orangeGora"
                            href={item.url}
                        >
                            {item.name}
                        </Link>
                    ) : (
                        <Link
                            className="flex justify-center py-2 w-full text-4xl text-greenGora hover:text-orangeGora"
                            onClick={item.action}  // Usa la acción de redirección interna
                            style={{ cursor: 'pointer' }}
                        >
                            {item.name}
                        </Link>
                    )}
                 </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    </div>
  );
}
