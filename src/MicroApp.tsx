import { useCallback, useRef } from "react"
import { loadMicroApp } from 'qiankun';
import type {Parcel} from 'single-spa';

type MicroAppProps = {
    name: string;
    url: string;
};

// also prefetchApps is available
const MicroApp: React.FC<MicroAppProps> = ({name, url}) => {
    const microAppRef = useRef<Parcel | null>(null);

    const elementRef = useCallback(node => {
        if (node) {
            microAppRef.current = loadMicroApp({
                name,
                entry: url,
                container: node,
            });
        } else {
            microAppRef.current?.unmount();
        }
    }, [name, url]);

    return (
        <div ref={elementRef} style={{width: 300, height: 300}}></div>
    )
}

export default MicroApp;
