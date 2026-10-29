type CrosshairProps = {
  className?: string;
};

// Decorative registration mark. Position it with `className`.
export default function Crosshair({ className = "" }: CrosshairProps) {
  return (
    <span aria-hidden="true" className={`absolute size-14 ${className}`}>
      <span className="absolute inset-x-0 top-1/2 h-px bg-white/25" />
      <span className="absolute inset-y-0 left-1/2 w-px bg-white/25" />
    </span>
  );
}
