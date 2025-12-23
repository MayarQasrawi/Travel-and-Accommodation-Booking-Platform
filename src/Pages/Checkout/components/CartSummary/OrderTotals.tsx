import { CURRENCY } from "@/constants/storage";

interface OrderTotalsProps {
	subtotal: number;
	taxRate?: number;
}
const TAX_RATE = 0.1;

function OrderTotals({ subtotal, taxRate = TAX_RATE }: OrderTotalsProps) {
	const tax = subtotal * taxRate;
	const total = subtotal + tax;

	const rows = [
		{ label: "Subtotal", value: subtotal },
		{ label: `Tax (${taxRate * 100}%)`, value: tax, muted: true },
	];

	return (
		<footer className="border-t pt-4 space-y-2">
			<dl className="space-y-2">
				{rows.map(({ label, value, muted }) => (
					<div key={label} className={`flex justify-between ${muted ? "text-sm text-gray-600" : ""}`}>
						<dt>{label}</dt>
						<dd>
							{CURRENCY}
							{value.toFixed(2)}
						</dd>
					</div>
				))}
			</dl>

			<div className="flex justify-between text-lg font-bold border-t pt-4 mt-4">
				<span>Total</span>
				<span>
					{CURRENCY}
					{total.toFixed(2)}
				</span>
			</div>
		</footer>
	);
}

export default OrderTotals;
