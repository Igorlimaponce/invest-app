'use client'

import { usePathname, useRouter } from 'next/navigation'

// import { Loader2 } from "lucide-react";

// import HeaderLogo from "@/components/common/header-logo";
import Navigation, { Route } from "@/components/invest/navigation";
import WelcomeMsg from "@/components/invest/welcome-msg";
import { Button } from "../ui/button";

const webName = [// programa esta preparado para receber outros modulos, ao adicionar aqui!
    {
      name: "Compras e Orçamentos",
      href: "/investimentos",
    }
];
function getHeaderNameByHref(href: string): string | undefined {
    const hrefModule = href.split('/')[1];
    const foundModule = webName.find(module => module.href === `/${hrefModule}`);
    return foundModule ? foundModule.name : undefined;
}

const Header = ({nav,message}: {nav:Route[],message:string}) => {
    const pathname = usePathname();
    const router = useRouter();
    const headerName = pathname ? getHeaderNameByHref(pathname): undefined;

    const handleExitModule = () => {
        router.push('/');
    }

    return (
        <header className="bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-8 lg:px-14 pb-36">
            <div className="max-w-screen-2xl mx-auto">
                <div className="w-full flex items-center justify-between mb-14">
                    <div className="flex items-center lg:gap-x-16">
                    {/* <HeaderLogo title={headerName} /> */}
                    <Navigation nav={nav} />
                    </div>
                    <div className="flex items-center gap-x-4">
                        <Button onClick={handleExitModule} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                        Sair do Módulo
                        </Button>
                    </div>
                </div>
                <WelcomeMsg message={message} />
            </div>
        
        
        
        
        
        </header>
    )
}


export default Header;