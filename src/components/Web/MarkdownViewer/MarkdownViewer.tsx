import { LinkRendererProps, MarkdownViewerProps } from "@/types/web";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
const LinkRenderer = ({ href, children }: LinkRendererProps) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "skyblue", borderBottom: "1px solid skyblue" }}
        >
            {children}
        </a>
    );
};
export const MarkdownViewer = ({ rawText }: MarkdownViewerProps) => {
    return (
        <ReactMarkdown
            components={{
                a({ children, href }) {
                    return <LinkRenderer href={href}>{children}</LinkRenderer>;
                },
            }}
        >
            {rawText}
        </ReactMarkdown>
    );
};
