import Image from "next/image";
import { siteConfig } from "@/config/site";

interface LogoProps {
  className?: string;
  variant?: "default" | "inverse" | "copper";
}

export default function Logo({ className = "", variant = "default" }: LogoProps) {
  const logoMap = {
    default: "/logo/wordmark.svg",
    inverse: "/logo/wordmark-inverse.svg",
    copper: "/logo/wordmark-copper.svg",
  };

  return (
    <Image
      src={logoMap[variant]}
      alt={siteConfig.name}
      width={140}
      height={28}
      className={className}
      priority
    />
  );
}
