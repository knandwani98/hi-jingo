import React from "react";

export const HiGrid = (props: { data: number[]; className?: string }) => {
  const { data } = props;

  return (
    <section className={props.className}>
      <ul className="grid grid-cols-5 border border-black bg-secondary">
        {data?.map((token: any, i: number) => {
          return (
            <li className="border border-black p-4" key={i}>
              <p className="font-black text-3xl sm:text-5xl flex items-center justify-center">
                {token || 0}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
