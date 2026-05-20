export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-3 border-brand-100 border-t-brand-400 animate-spin" />
        <p className="text-sm text-ink-muted font-body">Loading...</p>
      </div>
    </div>
  );
}
