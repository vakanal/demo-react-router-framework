import { Skeleton } from "~/components/ui/skeleton";

const ContactInformationSkeleton = () => {
  return (
    <div className="p-4">
      {/* Header: avatar + name + badge + status */}
      <div className="flex flex-col items-center pb-6 border-b">
        <Skeleton className="h-20 w-20 rounded-full mb-3" />
        <Skeleton className="h-5 w-32 mb-2" />
        <Skeleton className="h-4 w-24 mb-2" />
        <div className="flex items-center mt-1">
          <Skeleton className="h-2 w-2 rounded-full mr-1" />
          <Skeleton className="h-3 w-10" />
        </div>
      </div>

      <div className="py-4 space-y-4">
        {/* Contact Information */}
        <div>
          <Skeleton className="h-4 w-36 mb-2" />
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-4 w-32" />
            </div>
            <div className="flex justify-between text-sm">
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-4 w-24" />
            </div>
            <div className="flex justify-between text-sm">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-20" />
            </div>
          </div>
        </div>

        {/* Account Details */}
        <div>
          <Skeleton className="h-4 w-28 mb-2" />
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <Skeleton className="h-4 w-10" />
              <Skeleton className="h-4 w-16" />
            </div>
            <div className="flex justify-between text-sm">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-16" />
            </div>
            <div className="flex justify-between text-sm">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="pt-4 border-t">
        <Skeleton className="h-8 w-full rounded-md" />
      </div>
    </div>
  );
};

export default ContactInformationSkeleton;
