export default function Home() {
    return (
        <div className="min-h-screen p-8">
            <main className="max-w-4xl mx-auto space-y-8">
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

                    <div className="space-y-2">
                        <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-wide">
                            Kosugi Maru
                        </h3>
                        <p className="text-4xl font-kosugi-maru">Tsukuyomi</p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-wide">
                            Gaegu Light
                        </h3>
                        <p className="text-4xl font-gaegu font-light">
                            Tsukuyomi
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-wide">
                            Gaegu Normal
                        </h3>
                        <p className="text-4xl font-gaegu">Tsukuyomi</p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-wide">
                            Gaegu Bold
                        </h3>
                        <p className="text-4xl font-gaegu font-bold">
                            Tsukuyomi
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-sm font-semibold text-foreground/60 uppercase tracking-wide">
                            Rock Salt
                        </h3>
                        <p className="text-4xl font-rock-salt">Tsukuyomi</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
