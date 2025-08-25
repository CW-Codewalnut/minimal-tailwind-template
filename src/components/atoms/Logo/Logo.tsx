import Image from 'next/image';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({ className = '', width = 100, height = 100 }: LogoProps) {
  return (
    <Image
      src="/codewalnut_logo.jpeg"
      alt="CodeWalnut logo"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
