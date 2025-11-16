import type {FC,ComponentProps} from 'react';
import { Loader2 } from 'lucide-react';

interface SpinnerProps extends ComponentProps<typeof Loader2> {
  className?: string;
}


export const Spinner: FC<SpinnerProps> = ({ className = 'h-4 w-4', ...props }) => {
  return <Loader2 className={`animate-spin ${className}`.trim()} {...props} />;
};

export default Spinner;
