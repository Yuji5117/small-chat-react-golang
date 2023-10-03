import { useState } from "react";

const useToggle = (): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(false);
  const toggle = () => setState((prev) => !prev);

  return [state, toggle];
};

function ToggleComponent() {
  const [isOpen, toggleIsOpen] = useToggle();

  return (
    <div>
      <p>The shop is {isOpen ? "Open!!!" : "Closed!!"}</p>
      <button onClick={toggleIsOpen}>Toggle</button>
    </div>
  );
}

export default ToggleComponent;
