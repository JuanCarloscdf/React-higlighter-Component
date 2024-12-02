import { atomOneDark as theme } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { lazy, Suspense } from 'react';

const SyntaxHighlighter = lazy(() => import("react-syntax-highlighter"))
const code = `const [counter, setCounter] = useState(0);
<div>
    <span>{counter}</span>
    <button onClick={() => setCounter(prev => prev + 1)}>add</button>
    <button onClick={() => setCounter(prev => prev - 1)}>substarct</button>
</div>
`

const Highlighter = () => {
    return (
        <div className='text-start flex flex-col gap-4 w-full'>
            <h2 className='font-extrabold text-2xl'>highlighter Component</h2>
            <div className=' border border-solid border-white p-4 rounded-xl'>
                <Suspense>
                    <SyntaxHighlighter
                        language="typescript"
                        style={theme}
                        customStyle={{ padding: "1rem", textAlign: "start", background: "transparent" }}
                    >
                        {code}
                    </SyntaxHighlighter>
                </Suspense>
            </div>
        </div>
    );
};

export default Highlighter;