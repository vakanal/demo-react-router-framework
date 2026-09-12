import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "~/components/ui/empty";
import { Spinner } from "~/components/ui/spinner";

interface Props {
  title?: string;
  description?: string;
}

export const SpinnerEmpty = ({ title, description }: Props) => {
  return (
    <Empty className="h-screen w-full bg-muted/30">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Spinner className="size-8" />
        </EmptyMedia>
        {title && <EmptyTitle>{title}</EmptyTitle>}
        {description && <EmptyDescription>{description}</EmptyDescription>}
      </EmptyHeader>
    </Empty>
  );
};
