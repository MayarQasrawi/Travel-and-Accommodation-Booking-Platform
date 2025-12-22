import FormikInput from "@/components/Form/FormikTextInput";
import FormSection from "@/components/Form/FormSection";
import { personalInfoFields } from "../personalDetailsForm.config";

export function PersonalInfoStep() {
	return (
		<FormSection title="Personal Information" contentClassName="grid grid-cols-1 md:grid-cols-2 gap-4">
			{personalInfoFields.map(({ label, name, placeholder }) => (
				<FormikInput key={name} label={label} name={name} placeholder={placeholder} />
			))}
		</FormSection>
	);
}
