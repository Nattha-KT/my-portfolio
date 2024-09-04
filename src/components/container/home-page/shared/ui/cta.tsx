import { Button } from "@/components/ui";
import Link from "next/link";

export function Cta() {
  return (
    <section className=" bg-tertiary py-24 dark:bg-secondary/40">
      <div className=" container mx-auto">
        <div className=" flex flex-col items-center">
          <h2 className=" h2 max-w-xl text-center mb-8 ">
            Prepared to turn ideas reality? I'm here to help.
          </h2>
          <Link href={"/contact"}>
            <Button>Cantact me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
