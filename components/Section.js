export default function Section({ children, background }) {
  if (background === undefined) {
    return <div className={"py-20 bg-transparent"}>{children}</div>;
  } else {
    return <div className={"py-20" + " " + background}>{children}</div>;
  }
}
