import { useRef, useEffect } from "react";
import { Requirement, Seniority } from "../../types/Types";
import Controls from "../Controls/Controls";

function RequirementComponent({
  requirement,
  order,
}: {
  requirement: Requirement;
  order: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // if (ref.current) {
    //     const move = ref.current.clientWidth / 2;
    //     const y = Math.sin(order * Math.PI / 4);
    //     const x = Math.asin(y)*4/Math.PI;
    //     const marginX = x * move;
    //     const marginY = move / 2;
    //     ref.current.style.marginLeft = `${marginX}px`;
    //     ref.current.style.marginTop = `${marginY}px`;
    // }
  }, []);

  return (
    <div className="level" ref={ref}>
      <div className="level-title">{requirement.name}</div>
      <div className={`level-status`}>
        <p className={`${requirement.status}`}>
        {requirement.status}
        </p>
      </div>
      {requirement.controls && <Controls controls={requirement.controls} />}
    </div>
  );
}

export default function SeniorityLevel({
  seniorityLevel,
}: {
  seniorityLevel: Seniority;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-full pb-8">
      <header className={`seniority-header ${seniorityLevel.status}`}>{seniorityLevel.name}</header>
      <div className="flex flex-col items-center justify-center">
        {seniorityLevel.requirements && (
          <>
            <div className="requirements-header">
              <div className="flex flex-row items-center justify-start px-6 font-bold">
                Title
              </div>
              <div className="flex flex-row items-center justify-center font-bold">
                Status
              </div>
              <div className="flex flex-row items-center justify-center font-bold">
                Actions
              </div>
            </div>
            {seniorityLevel.requirements.map(
              (item: Requirement, index: number) => (
                <RequirementComponent
                  key={item.name}
                  order={index}
                  requirement={item}
                />
              )
            )}
          </>
        )}
      </div>
    </div>
  );
}
