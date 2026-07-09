const BookCardSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="rounded-2xl overflow-hidden bg-white shadow-lg">
        {/* Cover */}
        <div className="aspect-3/4 bg-gray-200"></div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <div className="h-5 bg-gray-200 rounded w-3/4"></div>

          <div className="h-4 bg-gray-200 rounded w-1/2"></div>

          <div className="flex justify-between pt-2">
            <div className="h-3 bg-gray-200 rounded w-14"></div>

            <div className="h-3 bg-gray-200 rounded w-14"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCardSkeleton;