import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
export function Markdown({ content }: { content: string }) {
  return <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />;
}
