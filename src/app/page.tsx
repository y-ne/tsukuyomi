import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Home() {
    return (
        <>
            <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator
                    orientation="vertical"
                    className="mr-2 data-[orientation=vertical]:h-4"
                />
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem className="block font-rock-salt">
                            <BreadcrumbLink href="/">Tsukuyomi</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </header>

            <div className="flex flex-1 flex-col gap-4 p-4">
                <div className="max-w-4xl mx-auto space-y-8 w-full">
                    <div className="text-center space-y-2">
                        <h1 className="text-5xl font-bold">Font Testing</h1>
                        <p className="text-foreground/70">
                            Testing &quot;Tsukuyomi&quot; in different fonts
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-wide">
                                Playpen Sans (Default)
                            </h3>
                            <p className="text-4xl font-sans">Tsukuyomi</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
