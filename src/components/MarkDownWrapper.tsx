type Props = {
  children: React.ReactNode;
};

export default function MarkdownWrapper({ children }: { children: React.ReactNode }) {
  return (
    <article className="prose max-w-none">{children}</article>
  );
}
