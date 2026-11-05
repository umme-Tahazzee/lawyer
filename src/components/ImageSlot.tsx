import { useState, type ElementType } from "react";
import { cn } from "@/lib/utils";

interface Props {
  src: string;
  alt: string;
  className?: string;
  icon: ElementType;
  hint: string;
}

/** Shows the image if the file exists, otherwise a neat placeholder. */
export default function ImageSlot({ src, alt, className, icon: Icon, hint }: Props) {
  const [failed, setFailed] = useState(false);

  if (!failed) {
    return <img src={src} alt={alt} onError={() => setFailed(true)} className={cn("object-cover", className)} />;
  }
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn("grid place-items-center bg-gradient-to-br from-[#5a3d2b] to-[#2a1c14] text-amber-100/70", className)}
    >
      <div className="flex flex-col items-center gap-2 px-4 text-center">
        <Icon className="size-14" strokeWidth={1} />
        <span className="text-xs">{hint}</span>
      </div>
    </div>
  );
}
