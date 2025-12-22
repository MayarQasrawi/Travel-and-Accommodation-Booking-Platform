interface DiscountPercentageParams {
	originalPrice: number;
	finalPrice: number;
}

export const discountPercentage = ({ originalPrice, finalPrice }: DiscountPercentageParams): number => {
	if (originalPrice <= 0) return 0;

	return Math.round(((originalPrice - finalPrice) / originalPrice) * 100);
};
