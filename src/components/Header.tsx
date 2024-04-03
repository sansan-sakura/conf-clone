import { ConfIcon } from "@/svgs/confIcon";
import { Button } from "./Button";
import { Menu } from "@/svgs/menu";
import { ButtonAnimated } from "./Button-Animated";

export const Header = () => {
  return (
    <div className="px-4 py-2 flex justify-between bg-transparent backdrop-blur-sm fixed w-screen">
      <Button>
        <ConfIcon />
      </Button>
      <div className="flex gap-6 items-center">
        <ButtonAnimated width="fit-content"> GET TICKET</ButtonAnimated>

        <Menu />
      </div>
    </div>
  );
};
