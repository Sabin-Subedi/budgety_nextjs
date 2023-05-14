import { API_ROUTES } from "@/constants/apiRoutes";
import { PAGE_ROUTES } from "@/constants/pageRoutes";
import { routeModifier } from "@/types/route";
import queryString, { StringifiableRecord } from "query-string";

export const getAPIRouteByName = (
  routeName: string,
  routeModifier?: routeModifier
) => {
  let route = API_ROUTES[routeName];
  if (!route) {
    throw new Error(`Route ${routeName} not found`);
  }
  if (routeModifier) {
    Object.keys(routeModifier).forEach((key) => {
      route = route.replace(`:${key}`, routeModifier[key]);
    });
  }

  return route;
};

export const getPageRouteByName = (
  pageRouteName: string,
  options?: { modifier?: routeModifier; query?: StringifiableRecord }
) => {
  let route = PAGE_ROUTES[pageRouteName];
  if (!route) {
    throw new Error(`Route ${pageRouteName} not found`);
  }
  if (options?.modifier) {
    Object.keys(options.modifier).forEach((key) => {
      route = route.replace(
        `:${key}`,
        options.modifier && options.modifier[key] ? options.modifier[key] : ""
      );
    });
  }

  if (options?.query) {
    route = `${route}?${queryString.stringify(options.query)}`;
  }
  return route;
};
