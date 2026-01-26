'use client';

export default function Error404() {
    return (
        <div id="cannot-find-div">
            <h1 id="404-header">Error 404</h1>
            <p>Server cannot find the requested resource</p>
            <a href="/" ><p id="return-to-home">Return to Home</p></a>
        </div>
    );
}
