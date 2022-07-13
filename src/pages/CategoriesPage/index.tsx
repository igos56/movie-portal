import routeMain from "./routes";
import MoviesListCategory from "components/MoviesListCategory";

const CategoriesPage = () => {
    const genre = "adventures";
    return (
        <div>
            <MoviesListCategory
                genre={genre}
            />
        </div>
        
    );
};

export {routeMain};
export default CategoriesPage;