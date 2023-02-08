const Button = ({
  text,
  color,
  onClick,
}: {
  text: string;
  color: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="btn text-white"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

export default Button;
