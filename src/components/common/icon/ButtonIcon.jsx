// ButtonIcon.jsx
import Button from "./Button";
import Icon from "./Icon";

const ButtonIcon = ({ onClick, name, className }) => {
  return (
    <Button onClick={onClick} className={className}>
      <Icon name={name} />
    </Button>
  );
};

export default ButtonIcon;
