import { useCallback, useEffect, useState } from "react"

const MicroApp = ({name, url}) => {
    const [elementNode, setElementNode] = useState();
    const [microAppApi, setMicroAppApi] = useState();

    const elementRef = useCallback(node => setElementNode(node), []);
    const onScriptLoaded = () => setMicroAppApi(window.microAppApis[name]);

    useEffect(() => {
        if (!microAppApi) {
            return;
        }

        if (elementNode) {
            microAppApi.mount(elementNode);
        }
        else {
            microAppApi.unmount();
        }
    }, [microAppApi, elementNode]);

    return (
        <>
            <div ref={elementRef}></div>
            <script src={url} onLoad={onScriptLoaded}></script>
        </>
    )
}

export default MicroApp;
