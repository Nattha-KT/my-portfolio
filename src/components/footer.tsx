import { Socials } from "./shared";

export function Footer() {
  return (
    <footer className=" bg-secondary py-12 mt-20">
      <div className=" container mx-auto">
        <div className=" flex flex-col justify-between items-center">
          {/* socials */}
          <Socials
            containerStyles=" flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconStyles=" text-primary text-[25px] dark:text-white/80 hover:text-white
            dark:hover:text-primary hover:scale-125  transition-all "
          />
          {/* copyright here */}

          <div className=" text-muted-foreground">
            Copyright &copy; Natthaphon Kanthatham. All right reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
