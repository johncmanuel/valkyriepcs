export default function Container({ children, ...classes }) {
  const local_classes = classes.classes;
  if (local_classes === undefined) {
    return <div className="container mx-auto px-4 sm:px-6">{children}</div>;
  } else {
    return (
      <div className={"container mx-auto px-4 sm:px-6" + " " + local_classes}>
        {children}
      </div>
    );
  }
}
