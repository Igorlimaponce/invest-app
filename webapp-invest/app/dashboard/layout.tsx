"use client"
import Header from "@/components/header/header";
import { Route } from "@/components/invest/navigation";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  const actualPath = usePathname();
  const path = actualPath ? actualPath.split('/')[1] : '';

  const basePath = path ? `/${path}` : '';

  const routes: Route[] = [
    {
      href: `${basePath}`,
      label: "Dashboard",
    },
    {
      href: `${basePath}/transactions`,
      label: "Transações",
    },
    {
      href: `${basePath}/accounts`,
      label: "Contas",
    },
    {
      href: `${basePath}/categories`,
      label: "Categorias",
    },
  ];

  return (
    <>
      <Header nav={routes} message={"Centralize seus investimentos em um só lugar!"} />
      <main className="px-3 lg:px-14">{children}</main>
    </>
  );
};

export default DashboardLayout;