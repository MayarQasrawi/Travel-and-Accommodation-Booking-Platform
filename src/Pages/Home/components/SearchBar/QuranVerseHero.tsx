import { cn } from "@/lib/utils";

interface QuranVerseHeroProps {
	className?: string;
	mainTitle?: string;
	highlightedTitle?: string;
	arabicVerse?: string;
}

const QuranVerseHero = ({
	className,
	mainTitle = "Travel Smarter with",
	highlightedTitle = "Travio",
	arabicVerse = "﴿ قُلْ سِيرُوا فِي الْأَرْضِ فَانظُرُوا كَيْفَ بَدَأَ الْخَلْقَ ﴾",
}: QuranVerseHeroProps) => {
	return (
		<section className={cn("text-primary-foreground text-center mb-12", className)}>
			<h1 className="text-5xl md:text-6xl font-bold mb-4">
				{mainTitle}
				<p className="mt-2">
					<span className=" text-primary">{highlightedTitle}</span>
				</p>
			</h1>

			<article className="backdrop-blur-sm rounded-lg p-4 max-w-md mx-auto mt-6 bg-white/10">
				<div className="text-lg mb-1 font-arabic font-medium" dir="rtl">
					{arabicVerse}
				</div>
				<div className="text-sm font-light italic">
					"Travel through the land and observe how He began creation" - Surah Al-Ankabut (29:20)
				</div>
			</article>
		</section>
	);
};

export default QuranVerseHero;
