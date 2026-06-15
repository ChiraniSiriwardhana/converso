"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
   
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils";
import Image from "next/image"
import Link from "next/link"
import { sidebarLinks } from '@/constants' 
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <section className='w-full max-w-66' >
        <Sheet>
            <SheetTrigger asChild>
                
                    <Image
                        src="/icons/Home.svg"
                        alt="Menu"
                        width={36}
                        height={36}
                        className="cursor-pointer sm:hidden"
                    />
                

            </SheetTrigger>
            <SheetContent side='left' className='border-none bg-dark-1 '>
                <SheetTitle className="sr-only">
                    Navigation Menu
                </SheetTitle>
                <Link href='/' className='flex items-center gap-1'>
                    <Image
                        src='/icons/add-personal.svg'
                        width={32}
                        height={32}
                        alt='Converso logo'
                        className='max-sm:size-10 '
                    />
                    <p className='text-[26px] font-extrabold text-white '>Converso</p>
        
                </Link>

                <div className='flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto '>
                    <SheetClose asChild>  
                        <section className='flex h-full flex-col gap-6 pt-16 text-white'>
                            {  sidebarLinks.map((link) => {
                                const isActive = pathname === link.route;
                                return(
                                  <SheetClose asChild key={link.route}>
                                   <Link 
                                        key={link.label}
                                        href={link.route}
                                        className={cn('flex items-center gap-4 rounded-lg p-4 w-full max-w-60', {

                                         'bg-blue-1': isActive,
                                        })}
                                    >
                                    <Image 
                                       src={link.imgUrl}
                                       alt={link.label}
                                       width={24}
                                       height={24}
                                    />

                                    <p className=' font-semibold  '>{link.label}</p>
                                    </Link>
                                </SheetClose>
                                )
                            })}
                            
                        </section>  

                    </SheetClose>
                    
                </div>
            </SheetContent>
        </Sheet>

    </section>
  )
}

export default MobileNav