import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface DatePickerProps {
	label: string;
	date: Date;
	onChange: (date: Date) => void;
}

export function DatePicker({ label, date, onChange }: DatePickerProps) {
	return (
		<div>
			<label htmlFor={`datepicker-${label}`} className="text-sm font-medium text-foreground mb-2 block">
				{label}
			</label>{" "}
			<Popover>
				<PopoverTrigger asChild>
					<Button
						id={`datepicker-${label}`}
						variant="outline"
						className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
					>
						<CalendarIcon className="mr-2 h-4 w-4" />
						{format(date, "MMM dd")}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0" align="start">
					<Calendar mode="single" selected={date} onSelect={(d) => d && onChange(d)} />
				</PopoverContent>
			</Popover>
		</div>
	);
}
