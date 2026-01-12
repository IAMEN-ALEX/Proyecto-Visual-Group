import { Container } from "./container";

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-slate-950 py-12">
            <Container className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div>
                    <h3 className="mb-4 font-serif text-lg font-semibold text-white">Visual Group Chile</h3>
                    <p className="text-slate-400 text-sm">
                        Expertos en decoración y efectos especiales para eventos que impactan.
                    </p>
                </div>

                {/* Simplified footer for now */}
                <div className="col-span-1 md:col-span-3 text-right">
                    <p className="text-slate-600 text-sm">
                        © {new Date().getFullYear()} Visual Group Chile. Reservados todos los derechos.
                    </p>
                </div>
            </Container>
        </footer>
    );
}
