import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

const Spinner: React.FC = () => {
    const loading = useSelector((state: RootState) => state.spinner.activeRequests);

    if (loading === 0) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black/20 flex items-center justify-center z-50">
            <div className="animate-spin w-12 h-12 border-4 border-white border-t-transparent rounded-full" />
        </div>
    );
};

export default Spinner;
