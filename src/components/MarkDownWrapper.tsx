type Props = {
  children: React.ReactNode;
};

export default function MarkdownWrapper({ children }: Props) {
  return (
    <article className="prose dark:prose-invert max-w-none">{children}</article>
  );
}
