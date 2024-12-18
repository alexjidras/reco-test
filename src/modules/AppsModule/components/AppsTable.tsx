import { useApps } from "../hooks/useApps";
import { App } from "../types/App";
import { Pagination } from "../../../ui/Pagination";
import { twMerge } from "tailwind-merge";
import { useSearchParams } from "react-router-dom";
import { Drawer } from "./AppDrawer";

const placeholderApps = [...new Array(10).keys()].map(
  (key) => ({ appId: key } as unknown)
) as App[];

export const AppsTable = () => {
  const [queryParams, setQueryParams] = useSearchParams();

  const page = +(queryParams.get("page") ?? 1);
  const sortDir = queryParams.get("sortDir");
  const sortField = queryParams.get("sortField");

  const { data: appsData, isPending } = useApps({
    page,
    sortDir,
    sortField,
  });

  const apps = appsData?.apps;

  const handlePageChange = (newPage: number) => {
    setQueryParams((prev: URLSearchParams) => {
      prev.set("page", `${newPage}`);
      return prev;
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Connector</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {(apps ?? placeholderApps).map((app) => (
              <tr key={app.appId}>
                <td>
                  <Drawer app={isPending ? undefined : app}>
                    <label
                      htmlFor={`drawer-${app.appId}`}
                      className="cursor-pointer-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <div className="avatar">
                          <div
                            className={twMerge(
                              "rounded-full h-12 w-12",
                              isPending ? "skeleton" : ""
                            )}
                          >
                            {!isPending && (
                              <img
                                src={app.logos.app}
                                alt={app.name ?? ""}
                                loading="lazy"
                                className="h-6"
                              />
                            )}
                          </div>
                        </div>
                        {isPending ? (
                          <div className="skeleton w-20 h-4" />
                        ) : (
                          app.name
                        )}
                      </div>
                    </label>
                  </Drawer>
                </td>
                <td>
                  {isPending ? <div className="skeleton w-10 h-4" /> : app.name}
                </td>
                <td>
                  {isPending ? (
                    <div className="skeleton w-10 h-10" />
                  ) : (
                    <img
                      src={app.logos.connector}
                      alt={app.connector ?? ""}
                      loading="lazy"
                      className="h-6"
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        totalPages={appsData?.pagination?.totalPages}
        page={page}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
