import React from "react";
import { App } from "../types/App";
import { UsersTable } from "./UsersTable";

interface AppDrawerProps {
  app?: App;
  children: React.ReactNode;
}

export const Drawer = ({ app, children }: AppDrawerProps) => {
  const overlayRef = React.useRef<HTMLDivElement | null>(null);
  if (!app) {
    return children;
  }

  return (
    <div className="drawer drawer-end">
      <input
        id={`drawer-${app.appId}`}
        type="checkbox"
        className="drawer-toggle"
      />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <label
          htmlFor={`drawer-${app.appId}`}
          aria-label="close sidebar"
          className="drawer-overlay"
          ref={overlayRef}
        ></label>
        <div className="bg-base-200 min-h-full w-80 p-4">
          <button
            type="button"
            onClick={() => {
              overlayRef.current?.click();
            }}
          >
            X
          </button>
          <h2>App overview</h2>
          <div className="flex items-center">
            <img
              src={app.logos.app}
              alt={app.name ?? ""}
              loading="lazy"
              className="h-6 rounded-full"
            />
            <span className="ml-2">{app.name}</span>
          </div>

          <UsersTable appId={app.appId} />
        </div>
      </div>
    </div>
  );
};
