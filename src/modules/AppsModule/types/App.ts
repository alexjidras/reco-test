export interface App {
  appId: string;
  name: string;
  category: string;
  connector: string;
  logos: Record<string, string>;
}
