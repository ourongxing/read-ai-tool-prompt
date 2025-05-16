import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarGroup,
  SidebarGroupContent,
} from "./ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { ChevronRight } from "lucide-react";

export type MenuItem = {
  label: string;
  href?: string;
  children?: MenuItem[];
};

const MenuItem = ({ item, level = 0 }: { item: MenuItem; level?: number }) => {
  const hasChildren = Boolean(item.children?.length);

  if (!hasChildren) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <a href={item.href}>
            <span>{item.label}</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }

  return (
    <Collapsible className="group/collapsible" defaultOpen={false}>
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            <span className="truncate">{item.label}</span>
            <ChevronRight className="transition-transform ml-auto flex-shrink-0 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub className="overflow-hidden">
            {item.children?.map((child, index) => (
              <SidebarMenuSubItem key={index} className="overflow-hidden">
                <MenuItem item={child} level={level + 1} />
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
};

export default function AppSidebar({ menu }: { menu: MenuItem[] }) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent className="overflow-hidden">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu className="overflow-hidden">
                {menu.map((item, index) => (
                  <MenuItem key={index} item={item} />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}
