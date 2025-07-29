import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "h-full mx-auto max-w-screen-xl w-full md:px-8 px-3",
        className
      )}
    >
      {children}
    </div>
  );
}
