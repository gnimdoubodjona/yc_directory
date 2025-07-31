"use client"

import { Link } from "lucide-react";

const SearchFormReset = () => {
    const reset = () => {
        // recupérer ce qui est entrer dans le formulaire là
        const form = document.querySelector('.search-form') as HTMLFormElement;
        if(form) form.reset();
    }
    return (
        <button type="reset" onClick={reset}>
            <Link href="/" className="search-btn">
                X
            </Link>
        </button>
    )
}

export default SearchFormReset

