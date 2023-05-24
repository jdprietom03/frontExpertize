import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ControlsProps } from "../../types/Types";

export default function Controls({ controls }: { controls: ControlsProps[] }) {
  const [openControls, setOpenControls] = useState<boolean>(false);
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (parentRef.current && !parentRef.current.contains(event.target)) {
        setOpenControls(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [parentRef]);

  return (
    <div className="level-controls" ref={parentRef}>
      <div className="controls-button">
        <button onClick={() => setOpenControls(!openControls)}>
          View actions
        </button>
        {openControls && (
          <div className="menu-controls">
            <ul>
              {controls.map((control) => (
                <li key={control.name}>
                  <Link to={control.url}>{control.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
