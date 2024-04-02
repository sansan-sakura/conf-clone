import { CallstackIcon } from "@/svgs/callstackIcon";
import { MetaIcon } from "@/svgs/metaIcon";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <MetaIcon />
      <CallstackIcon />
    </div>
  );
}
