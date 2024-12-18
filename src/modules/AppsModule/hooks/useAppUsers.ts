import { useQuery } from "@tanstack/react-query";

import * as AppsApi from "../api/appsApi";

interface UseAppsProps {
  appId: string;
}

export const useAppUsers = ({ appId }: UseAppsProps) => {
  return useQuery({
    queryKey: ["app-users", appId],
    queryFn: () => AppsApi.getAppUsers({ appId }),
  });
};
