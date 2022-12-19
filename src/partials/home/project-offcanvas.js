import React from "react";
import Link from "next/link";
import { IconAngleLeft, IconOpenLink } from "@src/svg";
import BackDrop from "@src/components/backdrop";
import { StyledImage } from "@src/styled-component";

const ProjectOffCanvas = (props) => {
  const { data, handleOnClose } = props;

  return (
    <>
      <aside className="h-[100vh] flex flex-col bg-white dark:bg-dark-600 fixed top-0 right-0 max-w-full w-[544px] z-[75] shadow-xl">
        <header className="pb-3 pt-7 border-b border-solid border-slate-300 mx-7">
          <button
            type="button"
            className="bg-transparent border-0 flex items-center gap-2 dark:fill-white hover:text-red-500 hover:!fill-red-500"
            onClick={() => handleOnClose()}
          >
            <IconAngleLeft />
            Back to projects
          </button>
        </header>

        <main className="flex-1 overflow-auto p-7">
          <h4 className="text-xl mb-5 text-primary-500 dark:text-primary-100">
            {data.name}
            <small className="font-normal text-sm text-slate-400 dark:text-slate-100 block mt-1">
              {data.tagline}
            </small>
          </h4>

          <figure className="relative aspect-[16/9] overflow-hidden rounded-2xl">
            <StyledImage
              url={data.image}
              alt={data.name}
              placeholder=""
              layout="fill"
            />
          </figure>

          <h5 className="font-semibold text-lg mt-6 mb-2">About</h5>
          <p>{data.content}</p>

          <h5 className="font-semibold text-lg mt-6 mb-2">Technologies</h5>
          <div className="flex flex-wrap gap-1">
            {data.tools.map((tool) => {
              return (
                <span
                  key={tool}
                  className="px-1.5 py-1 rounded bg-primary-500 text-white text-xs"
                >
                  {tool}
                </span>
              );
            })}
          </div>

          <h5 className="font-semibold text-lg mt-6 mb-2">Webiste</h5>
          {data.status !== "live" ? (
            <p>{data.status}</p>
          ) : (
            <Link
              className="text-red-500 underline"
              href={data.url || "#"}
              target="_blank"
            >
              {data.url}
            </Link>
          )}
        </main>

        {data.url && data.status !== "expired" && (
          <footer className="sticky bottom-0">
            <Link
              className="w-full h-20 flex items-center justify-center text-center bg-slate-800 text-white gap-2"
              href={data.url || "#"}
              target="_blank"
            >
              Open project
              <IconOpenLink />
            </Link>
          </footer>
        )}
      </aside>
      <BackDrop onClick={() => handleOnClose()} />
    </>
  );
};

export default ProjectOffCanvas;
