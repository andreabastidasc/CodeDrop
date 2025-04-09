import MonacoEditor from "react-monaco-editor";

interface CodeEditorProps {
    value: string;
    language: string;
    theme: "vs-dark" | "light";
    onChange: (value: string | undefined) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ value, language, theme, onChange }) => {
    return (
        <MonacoEditor
            height="70vh"
            language={ language }
            value={value}
            theme={ theme }
            onChange={ onChange }
            options={{
                fontSize: 14,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                wordWrap: "on",
            }}
        />
    );
};

export default CodeEditor;
