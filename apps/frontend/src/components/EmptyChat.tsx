import { RetroGrid } from "./magicui/retro-grid";

export default function EmptyChat(){
    return (
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
        <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
          Just ask something
        </span>

        <RetroGrid opacity={1} angle={20} cellSize={100} />
      </div>
    )
}