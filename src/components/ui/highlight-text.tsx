import { cn } from "@/lib/utils";

const HighlightedSubtitle = ({
  children,
  className,
  ...rest
}: React.ComponentProps<"h2">) => {
  return (
    <h2
      {...rest}
      className={cn(
        "text-3xl font-bold mb-8 text-blue-600 dark:text-blue-400",
        className
      )}
    >
      {`/* ${children} */`}
    </h2>
  );
};

export { HighlightedSubtitle };
