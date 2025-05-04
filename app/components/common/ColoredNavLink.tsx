import { type FC, type PropsWithChildren } from "react";
import { NavLink } from "react-router";

interface ColoredNavLinkProps extends PropsWithChildren {
  to: string;
}

export const ColoredNavLink: FC<ColoredNavLinkProps> = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-sm font-medium transition-colors hover:underline ${
          isActive ? "text-sky-500" : "text-sky-600"
        }`
      }
      end
    >
      {children}
    </NavLink>
  );
};
