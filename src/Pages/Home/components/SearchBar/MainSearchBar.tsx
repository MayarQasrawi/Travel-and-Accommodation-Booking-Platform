import { Search as SearchIcon, Users } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchInput from "@/components/common/SearchInput";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CounterControl } from "./CounterControl";
import { DatePicker } from "./DatePicker";

interface SearchForm {
	query: string;
	checkIn: Date;
	checkOut: Date;
	adults: number;
	children: number;
	rooms: number;
}

export default function MainSearchBar() {
	const [form, setForm] = useState<SearchForm>({
		query: "",
		checkIn: new Date(),
		checkOut: new Date(Date.now() + 86400000),
		adults: 2,
		children: 0,
		rooms: 1,
	});
	const navigate = useNavigate();

	const counters = [
		{ label: "Adults", description: "Ages 13+", key: "adults", min: 1 },
		{ label: "Children", description: "Ages 0-12", key: "children", min: 0 },
		{ label: "Rooms", description: "Number of rooms", key: "rooms", min: 1 },
	] as const;

	const datePickers = [
		{ label: "Check-in", key: "checkIn" as const },
		{ label: "Check-out", key: "checkOut" as const },
	];

	const handleSearch = () => {
		navigate("/search-results", { state: { ...form } });
	};

	return (
		<form
			className="bg-card rounded-xl shadow-lg border border-border p-6 space-y-6 w-full max-w-6xl mx-auto"
			onSubmit={(e) => {
				e.preventDefault();
				handleSearch();
			}}
		>
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
				<div className="lg:col-span-3">
					<label htmlFor="location-search" className="text-sm font-medium text-foreground mb-2 block">
						Where are you going?
					</label>
					<SearchInput
						placeholder="Search for hotels, cities..."
						value={form.query}
						onChange={(query) => setForm({ ...form, query })}
						onEnter={handleSearch}
						className="w-full"
					/>
				</div>

				<div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
					{datePickers.map(({ label, key }) => (
						<DatePicker
							key={key}
							label={label}
							date={form[key]}
							onChange={(date) => setForm({ ...form, [key]: date })}
						/>
					))}
				</div>

				<div className="lg:col-span-3">
					<label htmlFor="guests-rooms-trigger" className="text-sm font-medium text-foreground mb-2 block">
						Guests & Rooms
					</label>
					<Popover>
						<PopoverTrigger asChild>
							<Button variant="outline" className="w-full justify-start" id="guests-rooms-trigger">
								<Users className="mr-2 h-4 w-4" />
								{form.adults + form.children} Guests, {form.rooms} Room{form.rooms > 1 ? "s" : ""}
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-80" align="end">
							<div className="space-y-4">
								{counters.map(({ label, description, key, min }) => (
									<CounterControl
										key={key}
										label={label}
										description={description}
										value={form[key]}
										min={min}
										onChange={(val) => setForm({ ...form, [key]: val })}
									/>
								))}
							</div>
						</PopoverContent>
					</Popover>
				</div>

				<div className="lg:col-span-2">
					<Button type="submit" className="w-full h-10" size="lg">
						<SearchIcon className="mr-2 h-5 w-5" />
						Search
					</Button>
				</div>
			</div>
		</form>
	);
}
