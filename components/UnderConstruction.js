import Link from 'next/link'


export default function UnderConstruction() {
    return <>
        <style dangerouslySetInnerHTML={{ __html: "\n  body { text-align: center; padding: 150px; }\n  h1 { font-size: 50px; }\n  body { font: 20px Helvetica, sans-serif; color: #333; }\n  article { display: block; text-align: left; width: 650px; margin: 0 auto; }\n  a { color: #dc8100; text-decoration: none; }\n  a:hover { color: #333; text-decoration: none; }\n" }} />
        <article>
            <h1>This page is under construction!</h1>
            <div>
                <p>Sorry for the inconvenience, but we’re still designing this page at the moment. If you need to, you can always <a href="mailto:#" target="_blank" rel="noopener noreferrer">contact us</a>, 
                otherwise this will be finished as soon as possible!</p>
                <p>— The Team @ Valkyrie PCs</p>
            </div>
            <br />
            <h2>
                <Link href="/">
                    Go back to homepage
                </Link>
            </h2>
        </article>
    </>
}