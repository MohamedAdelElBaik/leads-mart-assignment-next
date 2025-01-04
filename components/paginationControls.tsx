import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
}

export function PaginationControls({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
}: PaginationControlsProps) {
  return (
    <div className="flex justify-center mt-4 space-x-2">
      <Button onClick={onPrevious} disabled={currentPage === 1}>
        <ChevronLeft className="w-4 h-4 mr-2" />
        Previous
      </Button>
      <Button onClick={onNext} disabled={currentPage === totalPages}>
        Next
        <ChevronRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
}
