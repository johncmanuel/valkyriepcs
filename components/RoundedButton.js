export default function RoundedButton({
  children,
  textColor,
  background,
  backgroundHover,
  onClick,
  href,
  ref,
  // The CSS classes (text color, background, hover:background) are required for this
  // component; every other classes are optional.
  ...classes
}) {
  const defaultClasses =
    "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-full focus:outline-none focus:shadow-outline transition duration-150 ease-in-out cursor-pointer";
  let localClasses = classes.classes;

  // Actual button component that forwards ref attribute. Generally, this allows direct changes
  // to the the child component (the button component in this case), specifically the
  // ref attribute needed for accessing the component itself without going through the
  // normal dataflow, without triggering the higher components (such as the Link component,
  // in this case)
  const LocalRoundedButton = React.forwardRef(() => (
    <a
      className={
        backgroundHover +
        " " +
        textColor +
        " " +
        background +
        " " +
        defaultClasses +
        " " +
        localClasses
      }
      onClick={onClick}
      href={href}
      ref={ref}
    >
      {children}
    </a>
  ));

  // Checks if one or more parameters are undefined, else returns
  // a rounded button component
  if (textColor === undefined) {
    textColor = "text-white";
  }
  if (background === undefined) {
    background = "bg-indigo-600";
  }
  if (backgroundHover === undefined) {
    backgroundHover = "hover:bg-indigo-500";
  }
  if (localClasses === undefined) {
    localClasses = "";
  }
  return <LocalRoundedButton />;
}
