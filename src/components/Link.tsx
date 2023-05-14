import { routeModifier } from "@/types/route";
import { getPageRouteByName } from "@/utils/route-handler";
import RouterLink, { LinkProps as RouterLinkProps } from "next/link";
import { StringifiableRecord } from "query-string";

interface LinkProps extends Omit<RouterLinkProps, "href"> {
  name: string;
  modifier?: routeModifier;
  params?: StringifiableRecord;
  children?: React.ReactNode;
}

function Link({ children, name, modifier, params, ...props }: LinkProps) {
  return (
    <RouterLink
      href={getPageRouteByName(name, {
        modifier,
        query: params,
      })}
      {...props}
    >
      {children}
    </RouterLink>
  );
}

export default Link;
