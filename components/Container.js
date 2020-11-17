export default function Container({ children, ...classes }) {
  const localClasses = classes.classes;
  if (localClasses === undefined) {
    return <div className="container mx-auto px-4 sm:px-6">{children}</div>;
  } else {
    return (
      <div className={"container mx-auto px-4 sm:px-6" + " " + localClasses}>
        {children}
      </div>
    );
  }
}
