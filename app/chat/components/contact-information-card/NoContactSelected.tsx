import { TriangleAlert } from "lucide-react";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "~/components/ui/empty";

const NoContactSelected = () => {
  return (
    <Empty className="h-full bg-muted/30">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <TriangleAlert />
        </EmptyMedia>
        <EmptyTitle>No Contact Selected</EmptyTitle>
        <EmptyDescription>Select a contact from the sidebar</EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
};

export default NoContactSelected;
