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
            status: "M",
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
                        <SidebarMenu>
                            {sidebarData.changes.map((item, index) => (
                                <SidebarMenuItem key={index}>
                                    <SidebarMenuButton asChild={!!item.url}>
                                        {item.url ? (
                                            <Link href={item.url}>
                                                <File />
                                                <span>{item.name}</span>
                                            </Link>
                                        ) : (
                                            <>
                                                <File />
                                                <span>{item.name}</span>
                                            </>
                                        )}
                                    </SidebarMenuButton>
                                    <SidebarMenuBadge>
                                        {item.status}
                                    </SidebarMenuBadge>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Files</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {sidebarData.fileTree.map((item, index) => (
                                <Tree key={index} node={item} />
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}

function Tree({ node }: { node: FileNode }) {
    const pathname = usePathname();
    const hasChildren = node.children && node.children.length > 0;
    const isActive = node.url === pathname;

    if (!hasChildren) {
        return (
            <SidebarMenuButton
                asChild={!!node.url}
                isActive={isActive}
                className="data-[active=true]:bg-transparent"
            >
                {node.url ? (
                    <Link href={node.url}>
                        <File />
                        <span>{node.name}</span>
                    </Link>
                ) : (
                    <>
                        <File />
                        <span>{node.name}</span>
                    </>
                )}
            </SidebarMenuButton>
        );
    }

    return (
        <SidebarMenuItem>
            <Collapsible
                className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
                // defaultOpen={node.name === "example"}
            >
                <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                        <ChevronRight className="transition-transform" />
                        <Folder />
                        <span>{node.name}</span>
                    </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <SidebarMenuSub>
                        {node.children?.map((subNode, index) => (
                            <Tree key={index} node={subNode} />
                        ))}
                    </SidebarMenuSub>
                </CollapsibleContent>
            </Collapsible>
        </SidebarMenuItem>
    );
}
