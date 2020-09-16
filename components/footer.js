export default function Footer({ info }) {
    return <footer className="container">
        <p className="float-right"><a href="#">Back to top</a></p>
        <p>{`© 2020 ${info.name}, Inc.`}</p>
    </footer>
}