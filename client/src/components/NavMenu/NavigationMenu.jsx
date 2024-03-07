// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "../../../components/ui/navigation-menu";

// import "./navigationMenu.css";

// function NavMenu() {
//   return (
//     <div className="nav-menu-layout">
//       <NavigationMenu>
//         <NavigationMenuList>
//           <NavigationMenuItem>
//             <NavigationMenuLink>Check In</NavigationMenuLink>
//           </NavigationMenuItem>
//           <NavigationMenuItem>
//             <NavigationMenuLink>Check Out</NavigationMenuLink>
//           </NavigationMenuItem>
//           <NavigationMenuItem>
//             <NavigationMenuLink>Update Status</NavigationMenuLink>
//           </NavigationMenuItem>
//           <NavigationMenuItem>
//             <NavigationMenuLink>Work Order Activity</NavigationMenuLink>
//           </NavigationMenuItem>
//         </NavigationMenuList>
//       </NavigationMenu>
//     </div>
//   );
// }

// export default NavMenu;

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../../components/ui/navigation-menu";

import "./navigationMenu.css";

function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="nav-menu-layout">

        <NavigationMenuItem>
          <NavigationMenuLink className="nav-link">
            Check In
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
        <NavigationMenuLink className="nav-link">
            Check Out
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink className="nav-link">
            Update Status
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink className="nav-link">
            Work Order Activity
          </NavigationMenuLink>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavMenu;
