import { List, PawPrint } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <section className="w-full flex justify-between p-5 border-b-2 lg:px-10 lg:py-5">
      <div>
        <PawPrint size={28} />
      </div>

      <div className="lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <List />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-52">
            <DropdownMenuLabel className="flex items-center gap-x-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>Name</div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  );
};

export default Header;
