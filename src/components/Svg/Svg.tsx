export const Svg = ({
  svg,
  ...props
}: {
  svg: string;
} & React.HTMLProps<HTMLDivElement>) => {
  return <div dangerouslySetInnerHTML={{ __html: svg }} {...props} />;
};
