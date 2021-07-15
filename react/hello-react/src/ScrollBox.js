import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import './ScrollBox.css';

let ScrollBox = (props, ref) => {
    const contentRef = useRef();
    useImperativeHandle(ref, () => ({
        scrolltoEnd() {
            contentRef.current.scrollIntoView(false);
        }
    }));
    return (
        <div class="container">
            <div class="content" ref={contentRef}></div>
        </div>
    );
}
ScrollBox = forwardRef(ScrollBox);

export default ScrollBox;
