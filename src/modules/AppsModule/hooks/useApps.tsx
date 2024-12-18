import { useQuery } from "@tanstack/react-query";

import * as AppsApi from "../api/appsApi";

interface UseAppsProps {
  page?: number;
  sortField?: string;
  sortDir?: string;
}

export const useApps = ({ page = 1, sortField, sortDir }: UseAppsProps) => {
  return useQuery({
    queryKey: ["apps", page, sortField, sortDir],
    queryFn: () => AppsApi.getApps({ page }),
  });
};
