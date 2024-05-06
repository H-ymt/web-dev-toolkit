import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import SideMenuList from './side-menu-list'

export default function SideMenu() {
  return (
    <>
      <div className="border-b pb-4 pt-1">
        <Sheet>
          <SheetTrigger className="flex items-center gap-1 px-6 pt-0 text-sm text-muted-foreground lg:hidden">
            <Menu size={20} />
            Menu
          </SheetTrigger>
          <SheetContent side="left" className="max-w-[280px] px-0 py-0">
            <SheetHeader>
              <SheetDescription>
                <SideMenuList />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <span></span>
      </div>

      <div className="max-lg:hidden">
        <SideMenuList />
      </div>
    </>
  )
}
