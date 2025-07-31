import React from "react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";

const SearchForm = ( {query}: {query?:string} ) => {
    
    return (
        <>
            <Form action="/" scroll={false} >
                <input
                    name="query"
                    defaultValue={query}
                    className="search-input"
                    placeholder="Search Startups"
                />

                {/* pour les supprimer quelque chose qu'on tappe on appel le client component de de reset */}
                <div className="flex gap-2">
                    {query && <SearchFormReset/>}

                    <button type="submit" className="search-btn text-white">
                        S
                    </button>
                </div>
            </Form>
        </>
    )
}
export default SearchForm