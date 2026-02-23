type Props = {
  type?: "info" | "tip" | "warn" | "texting";
  children: React.ReactNode;
};

export default function Callout({ type = "info", children }: Props) {
  const base = "p-2 md:p-4 rounded-md ";
  const colors = {
    info: "bg-blue-50 border-blue-500",
    tip: "bg-green-50 border-green-500",
    warn: "bg-yellow-50 border-yellow-500",
    texting: "",
  };
  
  const textColors = {
    info: "text-blue-900",
    tip: "text-green-900",
    warn: "text-amber-900",
    texting: "text-red-700",
  };

  return (
    <div className={`${base} ${colors[type]} my-6`}>
      <div className={textColors[type]}>
        {children}
      </div>
    </div>
  );
}
