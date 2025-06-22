"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, File, Folder } from "lucide-react";

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarRail,
} from "@/components/ui/sidebar";

interface FileNode {
    name: string;
    url?: string;
    children?: FileNode[];
}

interface ChangeItem {
    name: string;
    status: string;
    url?: string;
}

const sidebarData = {
    changes: [
        {
            name: "README.md",
            status: "M", // M = Modified, A = Added, D = Deleted
            url: "/",
        },
    ] as ChangeItem[],

    fileTree: [
        {
            name: "example",
            children: [
                {
                    name: "sub00",
                    children: [
                        {
                            name: "sub01",
                            children: [
                                {
                                    name: "example.rs",
                                    url: "#",
                                },
                            ],
                        },
                    ],
                },
                {
                    name: "example.rs",
                    url: "#",
                },
            ],
        },
        {
            name: "example.rs",
            url: "#",
        },
    ] as FileNode[],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar {...props}>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Changes</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <NavChanges />
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Files</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <NavFileTree />
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}

function NavChanges() {
    return (
        <SidebarMenu>
            {sidebarData.changes.map((item, index) => (
                <SidebarMenuItem key={index}>
                    {item.url ? (
                        <SidebarMenuButton asChild>
                            <Link href={item.url}>
                                <File />
                                <span>{item.name}</span>
                            </Link>
                        </SidebarMenuButton>
                    ) : (
                        <SidebarMenuButton>
                            <File />
                            <span>{item.name}</span>
                        </SidebarMenuButton>
                    )}
                    <SidebarMenuBadge>{item.status}</SidebarMenuBadge>
                </SidebarMenuItem>
            ))}
        </SidebarMenu>
    );
}

function NavFileTree() {
    return (
        <SidebarMenu>
            {sidebarData.fileTree.map((item, index) => (
                <FileTreeNode key={index} node={item} />
            ))}
        </SidebarMenu>
    );
}

function FileTreeNode({ node }: { node: FileNode }) {
    const pathname = usePathname();
    const hasChildren = node.children && node.children.length > 0;
    const isActive = node.url === pathname;

    if (!hasChildren) {
        return (
            <SidebarMenuSubItem>
                {node.url ? (
                    <SidebarMenuSubButton asChild isActive={isActive}>
                        <Link href={node.url}>
                            <File />
                            <span>{node.name}</span>
                        </Link>
                    </SidebarMenuSubButton>
                ) : (
                    <SidebarMenuSubButton>
                        <File />
                        <span>{node.name}</span>
                    </SidebarMenuSubButton>
                )}
            </SidebarMenuSubItem>
        );
    }

    return (
        <SidebarMenuItem>
            <Collapsible
                defaultOpen={
                    node.name === "components" ||
                    node.name === "ui" ||
                    node.name === "example"
                }
                className="group/collapsible"
            >
                <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                        <ChevronRight className="transition-transform group-data-[state=open]/collapsible:rotate-90" />
                        <Folder />
                        <span>{node.name}</span>
                    </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <SidebarMenuSub>
                        {node.children?.map((childNode, index) => (
                            <FileTreeNode key={index} node={childNode} />
                        ))}
                    </SidebarMenuSub>
                </CollapsibleContent>
            </Collapsible>
        </SidebarMenuItem>
    );
}
