import {forwardRef, ReactElement} from 'react';

interface HeadingProps {
    title: string;
    tag: string;
}

const Heading2 = forwardRef<HTMLHeadingElement, HeadingProps>(function headingFunction(
    props: HeadingProps,
    ref,
): ReactElement<HeadingProps, HeadingProps['tag']> | null {
    return (
        <div ref={ref}>{props.title}</div>
    );
});

Heading2.whyDidYouRender = true;

export default Heading2;