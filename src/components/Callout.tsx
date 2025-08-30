type Props = {
  type?: "info" | "tip" | "warn" | "texting";
  children: React.ReactNode;
};

export default function Callout({ type = "info", children }: Props) {
  const base = "p-2 md:p-4 rounded-md ";
  const colors = {
    info: "bg-blue-50 border-blue-500 text-red-700",
    tip: "bg-green-50 border-green-500 text-green-800",
    warn: "bg-yellow-50 border-yellow-500 text-yellow-800",
    texting: "text-red-300",
  };

  return <div className={`${base} ${colors[type]}`}>{children}</div>;
}
