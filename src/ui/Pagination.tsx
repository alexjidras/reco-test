import { twMerge } from "tailwind-merge";

interface PaginationProps {
  page?: number;
  totalPages?: number;
  onPageChange: (newPage: number) => void;
}

export const Pagination = ({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <div className="join">
      {[...new Array(totalPages ?? 0).keys()]
        .map((key) => key + 1)
        .map((pageItem) => (
          <button
            className={twMerge(
              "join-item btn",
              pageItem === page ? "btn-active" : ""
            )}
            onClick={() => {
              onPageChange(pageItem);
            }}
            key={pageItem}
          >
            {pageItem}
          </button>
        ))}
    </div>
  );
};
