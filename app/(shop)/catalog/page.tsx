import { ShapesIcon } from "lucide-react";
import { Badge } from "../../_components/ui/badge";
import { db } from "../../_lib/prisma";
import CategoryItem from "./components/category-item";

const CatalogPage = async () => {
  const categories = await db.category.findMany({});

  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge variant="heading">
        <ShapesIcon size={16} />
        Catálogo
      </Badge>

      <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
