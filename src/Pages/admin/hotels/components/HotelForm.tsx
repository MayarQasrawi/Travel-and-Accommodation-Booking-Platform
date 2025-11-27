import { Formik, type FormikHelpers } from "formik";
import FormFooter from "@/components/Form/FormFooter";
import FormikInput from "@/components/Form/FormikTextInput";
// import { useCitiesQuery } from "@/Pages/admin/cities/hooks/useCitiesQuery";
import type { Hotel } from "../api/types";
import { hotelFormSchema } from "./hotelFormSchema";

// import FormikSelect from "@/components/Form/FormikSelect";

export interface HotelFormValues {
	hotelName: string;
	// cityId: string;
	location: string;
	starRating: number;
}

interface HotelFormProps {
	initialValues?: Hotel;
	onSubmit: (values: HotelFormValues, helpers: FormikHelpers<HotelFormValues>) => void;
	onCancel: () => void;
}

export function HotelForm({ initialValues, onSubmit, onCancel }: HotelFormProps) {
	// const { data: cities = [], isLoading: citiesLoading } = useCitiesQuery();

	const defaultValues: HotelFormValues = {
		hotelName: initialValues?.hotelName || "",
		// cityId: initialValues?.cityId || "",
		location: initialValues?.location || "",
		starRating: initialValues?.starRating || 3,
	};

	return (
		<Formik initialValues={defaultValues} validationSchema={hotelFormSchema} onSubmit={onSubmit} enableReinitialize>
			{({
				isSubmitting,
				handleSubmit,
				// , setFieldValue, values
			}) => (
				<form className="space-y-6" onSubmit={handleSubmit}>
					<FormikInput label="Hotel Name" name="hotelName" placeholder="Enter hotel name" />

					{/* <FormikSelect
            label="City"
            name="cityId"
            placeholder="Select a city"
            options={cities.map((city) => ({
              label: `${city.name}, ${city.country}`,
              value: city.id,
            }))}
            isLoading={citiesLoading}
            onChange={(val) => setFieldValue("cityId", val)}
            value={values.cityId}
          /> */}

					<FormikInput label="Location" name="location" placeholder="Enter location address" />

					<FormikInput
						label="Star Rating"
						name="starRating"
						type="number"
						min={1}
						max={5}
						placeholder="Enter star rating (1-5)"
					/>

					<FormFooter
						onCancel={onCancel}
						isSubmitting={isSubmitting}
						submitLabel={initialValues ? "Update Hotel" : "Create Hotel"}
					/>
				</form>
			)}
		</Formik>
	);
}
