import { useEffect } from 'react';

const useOutsideClick = (ref, callback, excludeRefs = []) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                ref.current &&
                !ref.current.contains(event.target) &&
                !excludeRefs.some((excludedRef) => excludedRef.current.contains(event.target))
            ) {
                callback();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, callback, excludeRefs]);
};

export default useOutsideClick;
