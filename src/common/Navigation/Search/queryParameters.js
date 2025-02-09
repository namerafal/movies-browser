import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { pageQueryParamName, searchQueryParamName } from "../../QueryParamName";
import { useRef } from "react";
import { toMovieList, toPeople } from "../../../routes";

export const useQueryParameter = key => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(key);
};

export const useUpdateQueryParameter = setSearchQuery => {
    const searchDelay = 500;
    const history = useHistory();
    const location = useLocation();
    const timeout = useRef();
    let path = location.pathname;

    const params = new URLSearchParams(location.search);

    return ((newQuery) => {
        clearTimeout(timeout.current);
        setSearchQuery(newQuery);

        if (newQuery) {
            params.set(searchQueryParamName, newQuery);
        } else {
            params.delete(searchQueryParamName);
        }
        params.delete(pageQueryParamName);

        timeout.current = setTimeout(() => {
            if (path.startsWith(`${toMovieList()}/`) && path !== toMovieList()) {
                path = toMovieList();
            } else if (path.startsWith(`${toPeople()}/`) && path !== toPeople()) {
                path = toPeople();
            }

            history.push(`${path}?${params.toString()}`);
        }, searchDelay);
    });
};