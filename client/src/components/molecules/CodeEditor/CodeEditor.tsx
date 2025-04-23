import { useEffect } from "react";
import Editor, { loader } from "@monaco-editor/react";
import * as monacoEditor from "monaco-editor";

import monokai from "monaco-themes/themes/Monokai.json";
import chrome from "monaco-themes/themes/Chrome DevTools.json";


interface CodeEditorProps {
    value: string;
    language: string;
    theme: "monokai" | "chrome";
    onChange: (value: string | undefined) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ value, language, theme, onChange }) => {
    useEffect(() => {
        loader.init().then((monaco) => {
            monaco.editor.defineTheme(
                "monokai", monokai as monacoEditor.editor.IStandaloneThemeData
            );
            monaco.editor.defineTheme(
                "chrome", chrome as monacoEditor.editor.IStandaloneThemeData
            );
        });
    }, []);

    return (
        <Editor
            height="70vh"
            language={ language }
            value={ value }
            theme={ theme }
            onChange={ onChange }
            options={{
                fontSize: 14,
                fontFamily: "Jetbrains Mono, Fira Code, monospace",
                fontLigatures: true,
                wordWrap: "on",
                minimap: { enabled: false },
                bracketPairColorization: { enabled: true },
                autoClosingBrackets: "always",
                autoIndent: "advanced",
                cursorSmoothCaretAnimation: "on",
                cursorBlinking: "expand",
                renderLineHighlight: "all",
                renderWhitespace: "selection",
                guides: {
                    indentation: true,
                    bracketPairs: true,
                    highlightActiveBracketPair: true,
                },
                glyphMargin: true,
                scrollBeyondLastLine: false,
                tabSize: 4,
            }}
              
        />
    );
};

export default CodeEditor;
