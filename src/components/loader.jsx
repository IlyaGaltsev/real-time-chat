/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import styled from "styled-components";

const CenterScreen = styled.div`
display:flex;
align-items:center;
justify-content: center;
height:100%;
width:100%;
`
const Loader = () => {
    return(
        <CenterScreen>
            // eslint-disable-next-line jsx-a11y/iframe-has-title, jsx-a11y/iframe-has-title
            <iframe src="https://giphy.com/embed/hWZBZjMMuMl7sWe0x8" width="480" height="360" frameBorder="0"  allowFullScreen></iframe>
        </CenterScreen>
    )
}

export default Loader;