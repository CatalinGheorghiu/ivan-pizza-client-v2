type ErrorProps = {
  message: string;
};

const ErrorDisplay = ({ message }: ErrorProps) => {
  return <div>{message}</div>;
};

export default ErrorDisplay;
