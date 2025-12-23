import { Trash2 } from "lucide-react";
import type React from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Loader } from "../common/Loader";

export interface Column<T> {
	key: keyof T | string;
	label: string;
	render?: (row: T) => React.ReactNode;
}

interface DataTableProps<T> {
	columns: Column<T>[];
	data: T[];
	onRowClick?: (row: T) => void;
	onDelete?: (row: T) => void;
	isLoading?: boolean;
	emptyMessage?: string;
}

export function DataTable<T extends { id: number }>({
	columns,
	data,
	onRowClick,
	onDelete,
	isLoading,
	emptyMessage = "No data available",
}: DataTableProps<T>) {
	if (isLoading) {
		return <Loader size={80} />;
	}

	return (
		<div className="rounded-lg border border-border bg-card">
			<Table>
				<TableHeader>
					<TableRow>
						{columns.map((column) => (
							<TableHead key={String(column.key)}>{column.label}</TableHead>
						))}
						{onDelete && <TableHead className="w-20">Actions</TableHead>}
					</TableRow>
				</TableHeader>
				<TableBody>
					{data.length === 0 ? (
						<TableRow>
							<TableCell
								colSpan={columns.length + (onDelete ? 1 : 0)}
								className="h-24 text-center text-muted-foreground"
							>
								{emptyMessage}
							</TableCell>
						</TableRow>
					) : (
						data.map((row) => (
							<TableRow
								key={row.id}
								className={onRowClick ? "cursor-pointer hover:bg-muted/50" : ""}
								onClick={() => onRowClick?.(row)}
							>
								{columns.map((column) => {
									const value = row[column.key as keyof T];
									const displayValue = value === null || value === undefined || value === "" ? "-" : String(value);

									return (
										<TableCell key={String(column.key)}>{column.render ? column.render(row) : displayValue}</TableCell>
									);
								})}

								{onDelete && (
									<TableCell>
										<Button
											variant="ghost"
											size="icon"
											onClick={(e) => {
												e.stopPropagation();
												onDelete(row);
											}}
											className="h-8 w-8 text-destructive hover:bg-destructive/10"
										>
											<Trash2 className="h-4 w-4" />
										</Button>
									</TableCell>
								)}
							</TableRow>
						))
					)}
				</TableBody>
			</Table>
		</div>
	);
}
