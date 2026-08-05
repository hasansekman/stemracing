export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-brand-black text-white">
      <div className="text-center px-6">
        <div
          className="mx-auto mb-6 h-10 w-10 rounded-full border-2 border-white/20 border-t-brand-accent animate-spin"
          aria-hidden
        />
        <p className="font-[family-name:var(--font-heading)] italic text-2xl">
          Yükleniyor…
        </p>
      </div>
    </div>
  );
}
