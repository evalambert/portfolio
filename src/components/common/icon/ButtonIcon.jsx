import Icon from './Icon';

const ButtonIcon = ({ onClick, name, className }) => {
  return (
    <button onClick={onClick} className={className}>
      <Icon name={name} />
    </button>
  );
};

export default ButtonIcon;
